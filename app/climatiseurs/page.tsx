import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import FloatCTA from "@/components/FloatCTA";
import { CLIMATISEURS, type Modele } from "@/lib/catalogue";
import { SITE, TEXTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nos Climatiseurs Mobiles à Louer — Orléans & Loiret",
  description: "Climatiseurs mobiles à louer à Orléans et dans le Loiret : 7 000 BTU et 9 000 BTU. Installation et mise en service incluses, livraison sur devis.",
};

function ACSvg1({ label, uid }: { label: string; uid: string }) {
  return (
    <svg viewBox="0 0 280 420" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"auto",display:"block"}}>
      <defs>
        <linearGradient id={`b1-${uid}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#F0F4FF"/><stop offset="100%" stopColor="#D6E0FF"/></linearGradient>
        <linearGradient id={`s1-${uid}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1a3a8a"/><stop offset="100%" stopColor="#0d1f5c"/></linearGradient>
        <filter id={`sh1-${uid}`}><feDropShadow dx="0" dy="12" stdDeviation="20" floodColor="rgba(0,0,0,0.4)"/></filter>
      </defs>
      <ellipse cx="140" cy="410" rx="80" ry="10" fill="rgba(0,0,0,0.3)"/>
      <g filter={`url(#sh1-${uid})`}>
        <rect x="55" y="60" width="170" height="310" rx="18" fill={`url(#b1-${uid})`}/>
        <rect x="55" y="60" width="24" height="310" rx="12" fill="#B8C8F0" opacity="0.6"/>
        <rect x="55" y="60" width="170" height="50" rx="18" fill="#E8EEFF"/>
        <rect x="75" y="68" width="130" height="12" rx="4" fill="rgba(100,120,200,0.25)"/>
        <rect x="80" y="122" width="120" height="52" rx="8" fill={`url(#s1-${uid})`}/>
        <text x="140" y="148" textAnchor="middle" fontFamily="monospace" fontSize="20" fontWeight="bold" fill="#38BDF8">18°C</text>
        <text x="140" y="163" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(56,189,248,0.6)">COOLING</text>
        <circle cx="100" cy="198" r="9" fill="rgba(37,99,235,0.15)" stroke="rgba(37,99,235,0.3)" strokeWidth="1.5"/>
        <circle cx="140" cy="198" r="9" fill="rgba(37,99,235,0.15)" stroke="rgba(37,99,235,0.3)" strokeWidth="1.5"/>
        <circle cx="180" cy="198" r="9" fill="rgba(37,99,235,0.15)" stroke="rgba(37,99,235,0.3)" strokeWidth="1.5"/>
        <circle cx="140" cy="198" r="3" fill="#38BDF8"/>
        <rect x="70" y="220" width="140" height="120" rx="8" fill="rgba(180,200,240,0.3)" stroke="rgba(37,99,235,0.1)" strokeWidth="1"/>
        {[234,248,262,276,290,304,318].map(y=><line key={y} x1="70" y1={y} x2="210" y2={y} stroke="rgba(100,130,200,0.25)" strokeWidth="1.5"/>)}
        <rect x="100" y="348" width="80" height="20" rx="6" fill="rgba(160,180,220,0.5)" stroke="rgba(100,130,200,0.4)" strokeWidth="1.5"/>
        <rect x="108" y="90" width="64" height="18" rx="4" fill="rgba(37,99,235,0.12)"/>
        <text x="140" y="103" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="rgba(37,99,235,0.7)" letterSpacing="1">{label}</text>
      </g>
      <ellipse cx="100" cy="378" rx="14" ry="8" fill="#909090"/><ellipse cx="100" cy="378" rx="8" ry="5" fill="#404050"/>
      <ellipse cx="180" cy="378" rx="14" ry="8" fill="#909090"/><ellipse cx="180" cy="378" rx="8" ry="5" fill="#404050"/>
      <rect x="58" y="65" width="6" height="280" rx="3" fill="rgba(255,255,255,0.45)"/>
      <circle cx="230" cy="240" r="3" fill="rgba(56,189,248,0.6)"><animate attributeName="cy" values="240;200;240" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite"/></circle>
      <circle cx="240" cy="260" r="2" fill="rgba(56,189,248,0.4)"><animate attributeName="cy" values="260;210;260" dur="3.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.4;0;0.4" dur="3.5s" repeatCount="indefinite"/></circle>
    </svg>
  );
}

function ACSvg2({ label, uid }: { label: string; uid: string }) {
  return (
    <svg viewBox="0 0 280 420" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"auto",display:"block"}}>
      <defs>
        <linearGradient id={`b2-${uid}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#E8EEF8"/><stop offset="100%" stopColor="#C8D4EC"/></linearGradient>
        <linearGradient id={`s2-${uid}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0a2468"/><stop offset="100%" stopColor="#041240"/></linearGradient>
        <linearGradient id={`ac2-${uid}`} x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#0EA5E9"/><stop offset="100%" stopColor="#38BDF8"/></linearGradient>
        <filter id={`sh2-${uid}`}><feDropShadow dx="0" dy="14" stdDeviation="22" floodColor="rgba(0,0,0,0.5)"/></filter>
      </defs>
      <ellipse cx="140" cy="410" rx="80" ry="10" fill="rgba(0,0,0,0.35)"/>
      <g filter={`url(#sh2-${uid})`}>
        <rect x="60" y="50" width="164" height="325" rx="20" fill={`url(#b2-${uid})`}/>
        <rect x="60" y="50" width="5" height="325" rx="3" fill={`url(#ac2-${uid})`} opacity="0.7"/>
        <rect x="60" y="50" width="164" height="56" rx="20" fill="#F0F4FF"/>
        <rect x="80" y="60" width="124" height="16" rx="5" fill="rgba(56,189,248,0.12)" stroke="rgba(56,189,248,0.2)" strokeWidth="1"/>
        {[88,98,108,118,128,138,148,158,168,178,188].map(x=><line key={x} x1={x} y1="62" x2={x} y2="74" stroke="rgba(56,189,248,0.3)" strokeWidth="1.5"/>)}
        <rect x="78" y="120" width="128" height="60" rx="10" fill={`url(#s2-${uid})`} stroke="rgba(56,189,248,0.3)" strokeWidth="1.5"/>
        <text x="142" y="148" textAnchor="middle" fontFamily="monospace" fontSize="22" fontWeight="bold" fill="#38BDF8">16°C</text>
        <text x="142" y="165" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(56,189,248,0.5)" letterSpacing="1">AUTO-EVAP</text>
        <rect x="78" y="184" width="128" height="3" rx="1.5" fill={`url(#ac2-${uid})`} opacity="0.6"/>
        <rect x="78" y="196" width="128" height="36" rx="8" fill="rgba(56,189,248,0.07)" stroke="rgba(56,189,248,0.12)" strokeWidth="1"/>
        <circle cx="108" cy="214" r="10" fill="rgba(56,189,248,0.1)" stroke="rgba(56,189,248,0.25)" strokeWidth="1.5"/>
        <circle cx="142" cy="214" r="10" fill="rgba(56,189,248,0.1)" stroke="rgba(56,189,248,0.25)" strokeWidth="1.5"/>
        <circle cx="176" cy="214" r="10" fill="rgba(56,189,248,0.1)" stroke="rgba(56,189,248,0.25)" strokeWidth="1.5"/>
        <circle cx="108" cy="214" r="4" fill="#38BDF8"/>
        <rect x="72" y="244" width="140" height="110" rx="10" fill="rgba(56,189,248,0.07)" stroke="rgba(56,189,248,0.1)" strokeWidth="1"/>
        {[258,272,286,300,314,328,342].map(y=><line key={y} x1="72" y1={y} x2="212" y2={y} stroke="rgba(56,189,248,0.2)" strokeWidth="1.5"/>)}
        <rect x="95" y="358" width="94" height="18" rx="7" fill="rgba(56,189,248,0.12)" stroke="rgba(56,189,248,0.25)" strokeWidth="1.5"/>
        <rect x="105" y="92" width="74" height="18" rx="5" fill="rgba(56,189,248,0.12)" stroke="rgba(56,189,248,0.2)" strokeWidth="1"/>
        <text x="142" y="105" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="rgba(56,189,248,0.8)" letterSpacing="1.5">{label}</text>
      </g>
      <ellipse cx="98" cy="382" rx="15" ry="9" fill="#505060"/><ellipse cx="98" cy="382" rx="9" ry="5" fill="#303040"/>
      <ellipse cx="182" cy="382" rx="15" ry="9" fill="#505060"/><ellipse cx="182" cy="382" rx="9" ry="5" fill="#303040"/>
      <rect x="63" y="55" width="5" height="295" rx="2.5" fill="rgba(255,255,255,0.4)"/>
      <circle cx="228" cy="280" r="3.5" fill="rgba(56,189,248,0.7)"><animate attributeName="cy" values="280;230;280" dur="2.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.7;0;0.7" dur="2.5s" repeatCount="indefinite"/></circle>
      <circle cx="238" cy="295" r="2.5" fill="rgba(56,189,248,0.5)"><animate attributeName="cy" values="295;238;295" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite"/></circle>
    </svg>
  );
}

function CarteModele({ m, inverse }: { m: Modele; inverse: boolean }) {
  const sombre = m.style === "sombre";
  const visuel = m.photo ? (
    <div style={{background:"#ECE9E6",position:"relative",overflow:"hidden",minHeight:460}}>
      <img src={m.photo.src} alt={m.photo.alt} width={m.photo.largeur} height={m.photo.hauteur} loading="lazy" decoding="async" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 80%"}}/>
      <span style={{position:"absolute",top:20,right:20,zIndex:2,background:"rgba(9,14,26,0.75)",color:"#fff",padding:"5px 13px",borderRadius:50,fontSize:11,fontWeight:700}}>{m.gamme}</span>
    </div>
  ) : (
    <div style={{background:sombre?"linear-gradient(160deg,#0d1e3d,#0f2550)":"linear-gradient(160deg,#1a2744,#1e3a6e)",display:"flex",alignItems:"center",justifyContent:"center",padding:"48px 32px",minHeight:460,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(circle at 60% 40%,rgba(56,189,248,0.13),transparent 60%)"}}/>
      <span style={{position:"absolute",top:20,right:20,zIndex:2,background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.18)",color:"rgba(255,255,255,0.9)",padding:"5px 13px",borderRadius:50,fontSize:11,fontWeight:700}}>{m.gamme}</span>
      <div style={{position:"relative",zIndex:1,width:"100%",maxWidth:260}} role="img" aria-label={`Illustration du climatiseur ${m.nom}`}>
        {sombre ? <ACSvg2 label={m.etiquetteVisuel} uid={m.id}/> : <ACSvg1 label={m.etiquetteVisuel} uid={m.id}/>}
      </div>
    </div>
  );
  const c = sombre
    ? { fond:"linear-gradient(160deg,#1a2744,#1e3055)", sur:"#7DD3FC", titre:"#F0F6FF", texte:"rgba(200,220,255,0.82)", pastFond:"rgba(56,189,248,0.1)", pastBord:"1px solid rgba(56,189,248,0.2)", pastTxt:"#7DD3FC", prixFond:"rgba(255,255,255,0.05)", prixBord:"1px solid rgba(255,255,255,0.1)", petit:"rgba(200,220,255,0.7)", lien:"#7DD3FC", lienBord:"2px solid rgba(56,189,248,0.3)" }
    : { fond:"#fff", sur:"#2563EB", titre:"#1E293B", texte:"#475569", pastFond:"rgba(37,99,235,0.07)", pastBord:"1px solid rgba(37,99,235,0.12)", pastTxt:"#1D4ED8", prixFond:"linear-gradient(135deg,#EFF6FF,#F0F9FF)", prixBord:"1px solid rgba(37,99,235,0.09)", petit:"#64748B", lien:"#1D4ED8", lienBord:"2px solid rgba(37,99,235,0.18)" };
  const fiche = (
    <div style={{background:c.fond,padding:"48px 44px",display:"flex",flexDirection:"column" as const,justifyContent:"center"}}>
      <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase" as const,letterSpacing:"2px",color:c.sur,marginBottom:10}}>{m.gamme} — Location</div>
      <h3 style={{fontSize:"clamp(22px,3vw,30px)",fontWeight:800,color:c.titre,letterSpacing:"-1px",marginBottom:8,lineHeight:1.15}}>{m.nom}<br/>{m.puissance}</h3>
      <p style={{fontSize:15,color:c.texte,marginBottom:24,lineHeight:1.6}}>{m.accroche}</p>
      <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:24}}>
        {m.points.map(s=>(
          <span key={s} style={{background:c.pastFond,border:c.pastBord,color:c.pastTxt,padding:"6px 14px",borderRadius:50,fontSize:13,fontWeight:700}}>{s}</span>
        ))}
      </div>
      <ul style={{listStyle:"none",marginBottom:28,display:"flex",flexDirection:"column" as const,gap:10}}>
        {m.atouts.map(f=>(
          <li key={f} style={{display:"flex",alignItems:"flex-start",gap:10,fontSize:14,color:c.texte,lineHeight:1.5}}>
            <span aria-hidden="true" style={{width:20,height:20,background:"linear-gradient(135deg,#2563EB,#1E40AF)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:11,fontWeight:800,flexShrink:0,marginTop:2}}>✓</span>{f}
          </li>
        ))}
      </ul>
      <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:24,padding:"18px 22px",background:c.prixFond,borderRadius:14,border:c.prixBord,flexWrap:"wrap"}}>
        <div><div style={{fontSize:11,fontWeight:600,color:c.petit,textTransform:"uppercase" as const,letterSpacing:"1px"}}>À partir de</div><div style={{fontSize:38,fontWeight:800,color:c.titre,letterSpacing:"-2px",lineHeight:1}}>{m.prixAPartirDe}</div><div style={{fontSize:13,color:c.petit}}>{m.prixPeriode}</div></div>
        <div style={{fontSize:13,color:c.texte,lineHeight:1.6}}>✓ {TEXTES.installation}<br/>✓ {TEXTES.livraisonCourt}</div>
      </div>
      <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
        <a href={SITE.telephoneLien} style={{background:"linear-gradient(135deg,#2563EB,#1E40AF)",color:"#fff",padding:"13px 24px",borderRadius:50,fontSize:14,fontWeight:700,display:"inline-flex",alignItems:"center",gap:7,boxShadow:"0 4px 16px rgba(37,99,235,0.35)"}}>📞 Réserver ce modèle</a>
        <a href="/contact" style={{border:c.lienBord,color:c.lien,padding:"11px 20px",borderRadius:50,fontSize:14,fontWeight:700}}>Demander un devis →</a>
      </div>
    </div>
  );
  return (
    <article id={m.id} style={{maxWidth:1080,margin:"0 auto 48px",borderRadius:24,overflow:"hidden",boxShadow:"0 12px 48px rgba(37,99,235,0.10)",border:"1px solid rgba(37,99,235,0.09)",display:"grid",gridTemplateColumns:"1fr 1fr"}}>
      {inverse ? <>{fiche}{visuel}</> : <>{visuel}{fiche}</>}
    </article>
  );
}

export default function Climatiseurs() {
  const n = CLIMATISEURS.length;
  return (
    <>
      <Banner text={`${n} modèles disponibles — Orléans & Loiret · Installation incluse`} />
      <Header />
      <main>
        {/* HERO */}
        <section className="hero-bg" style={{padding:"72px 24px 80px"}}>
          <div className="hero-grid"/><div className="hero-glow-1"/><div className="hero-glow-2"/><div className="hero-streak"/>
          <div style={{maxWidth:680,margin:"0 auto",textAlign:"center",position:"relative",zIndex:1}}>
            <div className="hero-badge" style={{marginBottom:24,display:"inline-flex"}}><span className="badge-dot"/> Catalogue — {n} modèles</div>
            <h1 style={{fontSize:"clamp(32px,5vw,54px)",fontWeight:800,color:"#F0F6FF",lineHeight:1.08,letterSpacing:"-2px",marginBottom:20}}>
              Des climatiseurs choisis<br/>pour{" "}
              <em style={{fontStyle:"normal",background:"linear-gradient(135deg,#7DD3FC,#38BDF8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>votre confort.</em>
            </h1>
            <p style={{fontSize:17,color:"rgba(200,220,255,0.8)",marginBottom:32,lineHeight:1.75}}>
              Du 7 000 BTU pour une chambre au 9 000 BTU pour les pièces plus grandes : nous vous proposons le modèle adapté à votre pièce et l'installons chez vous, sur Orléans et le Loiret.
            </p>
            <div style={{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center",marginBottom:32}}>
              <a href="#catalogue" className="btn-primary">Voir les modèles ↓</a>
              <a href={SITE.telephoneLien} className="btn-ghost">📞 Être conseillé</a>
            </div>
            <div style={{display:"flex",gap:20,justifyContent:"center",flexWrap:"wrap"}}>
              {["🔧 Installation comprise","🚚 Livraison sur devis","🧼 Nettoyé entre chaque location"].map(t=>(
                <span key={t} style={{fontSize:13,fontWeight:600,color:"rgba(200,220,255,0.75)"}}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CATALOGUE */}
        <section id="catalogue" style={{padding:"80px 24px 32px",background:"linear-gradient(180deg,#EFF6FF,#F8FAFC)"}}>
          <p className="section-label">Notre catalogue</p>
          <h2 style={{textAlign:"center",fontSize:"clamp(26px,4vw,38px)",fontWeight:800,color:"#1E293B",letterSpacing:"-1.2px",marginBottom:16}}>Un modèle pour chaque pièce.</h2>
          <p style={{textAlign:"center",fontSize:16,color:"#475569",maxWidth:600,margin:"0 auto 56px",lineHeight:1.7}}>Sélectionnés pour leur fiabilité et leur installation sans travaux. Le modèle vous est attribué selon votre pièce et les disponibilités au moment de la réservation : nous vous proposons toujours le plus adapté parmi les appareils disponibles.</p>
          {CLIMATISEURS.map((m,i)=><CarteModele key={m.id} m={m} inverse={i%2===1}/>)}
        </section>

        {/* BENEFITS */}
        <section style={{padding:"72px 24px",background:"#fff"}}>
          <p className="section-label">Pourquoi LocationClim45</p>
          <h2 style={{textAlign:"center",fontSize:"clamp(26px,4vw,38px)",fontWeight:800,color:"#1E293B",letterSpacing:"-1.2px",marginBottom:52}}>La fraîcheur sans les contraintes.</h2>
          <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:18}}>
            {[
              {icon:"🔧",title:"Installation incluse",desc:"On installe, on règle et on vous explique le fonctionnement. Aucun effort."},
              {icon:"🚚",title:"Livraison sur devis",desc:"Orléans, Olivet, Saran et tout le Loiret. Tarif selon la distance et la durée."},
              {icon:"🔒",title:"Caution simple",desc:"150 € par appareil, par chèque non encaissé ou virement, restituée en fin de location."},
              {icon:"📞",title:"Disponible 7j/7",desc:"Un problème ? On répond rapidement, même le week-end."},
            ].map(({icon,title,desc})=>(
              <div key={title} className="dark-card" style={{padding:"28px 22px",textAlign:"center" as const}}>
                <div style={{fontSize:28,marginBottom:16}}>{icon}</div>
                <div style={{fontSize:15,fontWeight:700,color:"#F0F6FF",marginBottom:8}}>{title}</div>
                <p style={{fontSize:13,color:"rgba(200,220,255,0.75)",lineHeight:1.65}}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA STRIP */}
        <div className="cta-strip">
          <div style={{maxWidth:860,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",gap:20,flexWrap:"wrap"}}>
            <div>
              <div style={{fontSize:17,fontWeight:700,color:"#fff"}}>Vous ne savez pas quel modèle choisir ?</div>
              <div style={{fontSize:13,color:"rgba(255,255,255,0.85)",marginTop:3}}>On vous conseille gratuitement selon votre surface et votre usage.</div>
            </div>
            <a href={SITE.telephoneLien} style={{background:"#fff",color:"#1D4ED8",padding:"12px 26px",borderRadius:50,fontWeight:800,fontSize:14,whiteSpace:"nowrap" as const}}>📞 {SITE.telephoneAffiche}</a>
          </div>
        </div>

        {/* CTA FINAL */}
        <section style={{background:"#0D1117",padding:"72px 24px",textAlign:"center" as const,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(37,99,235,0.18),transparent 65%)",pointerEvents:"none"}}/>
          <h2 style={{color:"#F0F6FF",fontSize:"clamp(26px,4vw,38px)",fontWeight:800,letterSpacing:"-1.2px",marginBottom:12,position:"relative",zIndex:1}}>Prêt à profiter de la fraîcheur ?</h2>
          <p style={{color:"rgba(255,255,255,0.7)",fontSize:16,marginBottom:36,position:"relative",zIndex:1}}>Réservez en un appel — nous vous confirmons le créneau et le tarif de livraison.</p>
          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap",position:"relative",zIndex:1}}>
            <a href={SITE.telephoneLien} className="btn-cta-main">📞 {SITE.telephoneAffiche}</a>
            <a href={SITE.whatsappLien} className="btn-cta-wa" target="_blank" rel="noopener">💬 WhatsApp</a>
          </div>
        </section>
      </main>
      <Footer/>
      <FloatCTA/>
    </>
  );
}
