import { NextResponse, type NextRequest } from "next/server";

// Adresse officielle du site
const SITE_OFFICIEL = "https://www.locationclim45.fr";

// Adresse Vercel par défaut, indexée par erreur par Google.
// Les adresses de prévisualisation (branches de test) ne sont pas concernées.
const ADRESSE_VERCEL = "location-clim45.vercel.app";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") ?? "";

  if (host === ADRESSE_VERCEL) {
    const destination = new URL(
      req.nextUrl.pathname + req.nextUrl.search,
      SITE_OFFICIEL
    );
    // 308 = redirection permanente : Google transfère tout vers le vrai site
    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
