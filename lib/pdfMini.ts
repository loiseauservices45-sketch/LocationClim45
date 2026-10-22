// ─────────────────────────────────────────────────────────────
// Mini-générateur de PDF (A4) sans dépendance externe.
// Gère : texte Helvetica (normal / gras) avec accents français,
// rectangles, traits et images JPEG (signatures).
// Coordonnées en millimètres, origine en haut à gauche.
// ─────────────────────────────────────────────────────────────

const MM = 72 / 25.4; // 1 mm en points PDF
const PAGE_W = 210;
const PAGE_H = 297;

// Encodage WinAnsi (caractères spéciaux hors Latin-1)
const WINANSI: Record<string, number> = {
  "€": 0x80, "‚": 0x82, "„": 0x84, "…": 0x85, "‘": 0x91, "’": 0x92, "“": 0x93, "”": 0x94,
  "•": 0x95, "–": 0x96, "—": 0x97, "Œ": 0x8c, "œ": 0x9c, "™": 0x99,
};

function encodeTexte(s: string): number[] {
  const out: number[] = [];
  for (const ch of s.normalize("NFC")) {
    const c = ch.charCodeAt(0);
    let b: number;
    if (WINANSI[ch] !== undefined) b = WINANSI[ch];
    else if (c === 0x202f || c === 0x00a0) b = 0x20; // espaces insécables → espace
    else if (c < 256 && !(c >= 0x80 && c <= 0x9f)) b = c;
    else b = 0x3f; // « ? »
    if (b === 0x28 || b === 0x29 || b === 0x5c) out.push(0x5c); // échapper ( ) \
    out.push(b);
  }
  return out;
}

// Largeur approximative d'un caractère Helvetica (en millièmes d'em)
function largeurCar(ch: string, gras: boolean): number {
  if (" .,;:'!|ijlIf()[]-".includes(ch)) return gras ? 300 : 278;
  if ("mwMW".includes(ch)) return 860;
  if ("rt".includes(ch)) return 360;
  if (/[A-ZÀ-Þ]/.test(ch)) return gras ? 722 : 680;
  if (/[0-9]/.test(ch)) return 556;
  return gras ? 600 : 556;
}

export function largeurTexte(s: string, taille: number, gras = false): number {
  let t = 0;
  for (const ch of s) t += largeurCar(ch, gras);
  return (t / 1000) * taille / MM; // en mm
}

export function couperTexte(s: string, taille: number, largeurMax: number, gras = false): string[] {
  const lignes: string[] = [];
  for (const para of s.split("\n")) {
    let ligne = "";
    for (const mot of para.split(" ")) {
      const essai = ligne ? ligne + " " + mot : mot;
      if (largeurTexte(essai, taille, gras) > largeurMax && ligne) {
        lignes.push(ligne);
        ligne = mot;
      } else ligne = essai;
    }
    lignes.push(ligne);
  }
  return lignes;
}

type Image = { nom: string; octets: Uint8Array; largeur: number; hauteur: number };

export class MiniPdf {
  private pages: number[][] = [[]];
  private images: Image[] = [];

  get largeurPage() { return PAGE_W; }
  get hauteurPage() { return PAGE_H; }

  private ajouter(s: string | number[]) {
    const page = this.pages[this.pages.length - 1];
    if (typeof s === "string") for (let i = 0; i < s.length; i++) page.push(s.charCodeAt(i) & 0xff);
    else page.push(...s);
  }

  nouvellePage() { this.pages.push([]); }

  private couleur(hex: string, remplissage: boolean) {
    const n = parseInt(hex.replace("#", ""), 16);
    const r = ((n >> 16) & 255) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
    return `${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} ${remplissage ? "rg" : "RG"}\n`;
  }

  texte(x: number, y: number, s: string, opts: { taille?: number; gras?: boolean; couleur?: string } = {}) {
    const taille = opts.taille ?? 10;
    this.ajouter(`BT\n${this.couleur(opts.couleur ?? "#1E293B", true)}/${opts.gras ? "F2" : "F1"} ${taille} Tf\n`);
    this.ajouter(`${(x * MM).toFixed(2)} ${((PAGE_H - y) * MM).toFixed(2)} Td\n(`);
    this.ajouter(encodeTexte(s));
    this.ajouter(") Tj\nET\n");
  }

  // Paragraphe avec retour à la ligne automatique ; renvoie la position y suivante
  paragraphe(x: number, y: number, s: string, largeurMax: number, opts: { taille?: number; gras?: boolean; couleur?: string; interligne?: number } = {}): number {
    const taille = opts.taille ?? 10;
    const pas = opts.interligne ?? taille * 0.45;
    for (const l of couperTexte(s, taille, largeurMax, opts.gras)) {
      this.texte(x, y, l, opts);
      y += pas;
    }
    return y;
  }

  rect(x: number, y: number, l: number, h: number, couleur: string, plein = true) {
    this.ajouter(`${this.couleur(couleur, plein)}${(x * MM).toFixed(2)} ${((PAGE_H - y - h) * MM).toFixed(2)} ${(l * MM).toFixed(2)} ${(h * MM).toFixed(2)} re ${plein ? "f" : "S"}\n`);
  }

  trait(x1: number, y1: number, x2: number, y2: number, couleur = "#94A3B8", epaisseur = 0.3) {
    this.ajouter(`${this.couleur(couleur, false)}${(epaisseur * MM).toFixed(2)} w ${(x1 * MM).toFixed(2)} ${((PAGE_H - y1) * MM).toFixed(2)} m ${(x2 * MM).toFixed(2)} ${((PAGE_H - y2) * MM).toFixed(2)} l S\n`);
  }

  // Image JPEG (data URL « data:image/jpeg;base64,... »)
  imageJpeg(dataUrl: string, largeurPx: number, hauteurPx: number, x: number, y: number, l: number, h: number) {
    const b64 = dataUrl.split(",")[1] ?? "";
    const bin = atob(b64);
    const octets = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) octets[i] = bin.charCodeAt(i);
    const nom = `Im${this.images.length + 1}`;
    this.images.push({ nom, octets, largeur: largeurPx, hauteur: hauteurPx });
    this.ajouter(`q ${(l * MM).toFixed(2)} 0 0 ${(h * MM).toFixed(2)} ${(x * MM).toFixed(2)} ${((PAGE_H - y - h) * MM).toFixed(2)} cm /${nom} Do Q\n`);
  }

  // Assemble le fichier PDF
  octets(): Uint8Array {
    const morceaux: number[] = [];
    const offsets: number[] = [];
    const ecrire = (s: string | number[] | Uint8Array) => {
      if (typeof s === "string") for (let i = 0; i < s.length; i++) morceaux.push(s.charCodeAt(i) & 0xff);
      else for (let i = 0; i < s.length; i++) morceaux.push(s[i]);
    };
    const objet = (num: number, corps: () => void) => {
      offsets[num] = morceaux.length;
      ecrire(`${num} 0 obj\n`);
      corps();
      ecrire("\nendobj\n");
    };

    // Numérotation : 1 catalogue, 2 pages, 3-4 polices, puis images, puis (page + contenu)
    const nImg = this.images.length;
    const premierImg = 5;
    const premierePage = premierImg + nImg;
    const numsPages = this.pages.map((_, i) => premierePage + i * 2);
    const total = premierePage + this.pages.length * 2;

    ecrire("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n");
    objet(1, () => ecrire("<< /Type /Catalog /Pages 2 0 R >>"));
    objet(2, () => ecrire(`<< /Type /Pages /Kids [${numsPages.map(n => `${n} 0 R`).join(" ")}] /Count ${this.pages.length} >>`));
    objet(3, () => ecrire("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>"));
    objet(4, () => ecrire("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>"));
    this.images.forEach((im, i) => objet(premierImg + i, () => {
      ecrire(`<< /Type /XObject /Subtype /Image /Width ${im.largeur} /Height ${im.hauteur} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${im.octets.length} >>\nstream\n`);
      ecrire(im.octets);
      ecrire("\nendstream");
    }));
    const xobjets = this.images.map((im, i) => `/${im.nom} ${premierImg + i} 0 R`).join(" ");
    this.pages.forEach((contenu, i) => {
      const nPage = numsPages[i];
      objet(nPage, () => ecrire(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${(PAGE_W * MM).toFixed(2)} ${(PAGE_H * MM).toFixed(2)}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> /XObject << ${xobjets} >> >> /Contents ${nPage + 1} 0 R >>`));
      objet(nPage + 1, () => {
        ecrire(`<< /Length ${contenu.length} >>\nstream\n`);
        ecrire(contenu);
        ecrire("\nendstream");
      });
    });
    const debutXref = morceaux.length;
    ecrire(`xref\n0 ${total}\n0000000000 65535 f \n`);
    for (let n = 1; n < total; n++) ecrire(`${String(offsets[n]).padStart(10, "0")} 00000 n \n`);
    ecrire(`trailer\n<< /Size ${total} /Root 1 0 R >>\nstartxref\n${debutXref}\n%%EOF`);
    return new Uint8Array(morceaux);
  }

  blob(): Blob {
    const o = this.octets();
    const tampon = o.buffer.slice(o.byteOffset, o.byteOffset + o.byteLength) as ArrayBuffer;
    return new Blob([tampon], { type: "application/pdf" });
  }
}
