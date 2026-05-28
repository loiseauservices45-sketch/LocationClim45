"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import FloatCTA from "@/components/FloatCTA";

export default function Contact() {
  const [dur, setDur] = useState("1 semaine");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const nom = (f.querySelector("#nom") as HTMLInputElement).value.trim();
    const phone = (f.querySelector("#phone") as HTMLInputElement).value.trim();
    const commune = (f.querySelector("#commune") as HTMLInputElement).value.trim();
    const profil = (f.querySelector("#profil") as HTMLSelectElement).value;
    const email = (f.querySelector("#email") as HTMLInputElement).value;
    const msg = (f.querySelector("#message") as HTMLTextAreaElement).value;
    if (!nom || !phone || !commune || !profil) { alert("Merci de remplir les champs obligatoires (*)"); return; }
    const body = `Nom : ${nom}%0ATéléphone : ${phone}%0AEmail : ${email}%0ACommune : ${commune}%0AProfil : ${profil}%0ADurée : ${dur}%0AMessage : ${msg}`;
    window.location.href = `mailto:loiseau.services45@gmail.com?subject=Devis LocationClim45 — ${nom}&body=${body}`;
    setTimeout(() => setSent(true), 400);
  }

  const inp: React.CSSProperties = { width:"100%", padding:"13px 16px", border:"1.5px solid rgba(37,99,235,0.15)", borderRadius:12, fontFamily:"Plus Jakarta Sans, sans-serif", fontSize:15, color:"#1E293B", background:"#fff", outline:"none", transition:"all .2s" };
  const lbl: React.CSSProperties = { fontSize:13, fontWeight:700, color:"#1E293B", display:"block", marginBottom:6 };

  return (
    <>
      <Banner text="Ouvert 7j/7 de 8h à 20h — Réponse sous 1h · Livraison sous 24h" />
      <Header />
      <main>
        {/* HERO */}
        <section className="hero-bg" style={{padding:"72px 24px 80px"}}>
          <div className="hero-grid"/><div className="hero-glow-1"/><div className="hero-glow-2"/><div className="hero-streak"/>
          <div style={{maxWidth:680,margin:"0 auto",textAlign:"center",position:"relative",zIndex:1}}>
            <div className="hero-badge" style={{marginBottom:24,display:"inline-flex"}}><span className="badge-dot"/> Devis gratuit — Réponse sous 1h</div>
            <h1 style={{fontSize:"clamp(32px,5vw,52px)",fontWeight:800,color:"#F0F6FF",lineHeight:1.08,letterSpacing:"-2px",marginBottom:18}}>
              Obtenez votre devis<br/>
              <em style={{fontStyle:"normal",background:"linear-gradient(135deg,#7DD3FC,#38BDF8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>en quelques minutes.</em>
            </h1>
            <p style={{fontSize:17,color:"rgba(200,220,255,0.6)",lineHeight:1.75,maxWidth:520,margin:"0 auto 32px"}}>
              Remplissez le formulaire ou appelez directement. On répond vite, on livre vite.
            </p>
            <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
              <a href="tel:0783800070" style={{display:"flex",alignItems:"center",gap:8,background:"rgba(16,185,129,0.15)",border:"1px solid rgba(16,185,129,0.3)",color:"#34D399",padding:"10px 18px",borderRadius:50,fontSize:14,fontWeight:600,transition:"all .2s"}}>📞 07 83 80 00 70 — Appel direct</a>
              <a href="https://wa.me/33783800070" target="_blank" rel="noopener" style={{display:"flex",alignItems:"center",gap:8,background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.12)",color:"rgba(200,220,255,0.85)",padding:"10px 18px",borderRadius:50,fontSize:14,fontWeight:600}}>💬 WhatsApp</a>
              <a href="mailto:loiseau.services45@gmail.com" style={{display:"flex",alignItems:"center",gap:8,background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.12)",color:"rgba(200,220,255,0.85)",padding:"10px 18px",borderRadius:50,fontSize:14,fontWeight:600}}>✉️ loiseau.services45@gmail.com</a>
            </div>
          </div>
        </section>

        {/* MAIN */}
        <section id="form" style={{padding:"80px 24px",background:"linear-gradient(180deg,#EFF6FF,#F8FAFC)"}}>
          <div style={{maxWidth:1080,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 400px",gap:48,alignItems:"start"}}>

            {/* FORM */}
            <div style={{background:"#fff",borderRadius:24,padding:"44px 40px",boxShadow:"0 12px 48px rgba(37,99,235,0.10)",border:"1px solid rgba(37,99,235,0.08)"}}>
              {!sent ? (
                <>
                  <div style={{fontSize:22,fontWeight:800,color:"#1E293B",letterSpacing:"-0.7px",marginBottom:6}}>Demande de devis gratuit</div>
                  <p style={{fontSize:14,color:"#64748B",marginBottom:32,lineHeight:1.6}}>Remplissez ce formulaire en 60 secondes. On vous rappelle sous 1h.</p>
                  <form onSubmit={handleSubmit} noValidate>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
                      <div><label style={lbl} htmlFor="nom">Nom complet *</label><input style={inp} type="text" id="nom" placeholder="Jean Dupont" required/></div>
                      <div><label style={lbl} htmlFor="phone">Téléphone *</label><input style={inp} type="tel" id="phone" placeholder="06 00 00 00 00" required/></div>
                    </div>
                    <div style={{marginBottom:16}}><label style={lbl} htmlFor="email">Email</label><input style={inp} type="email" id="email" placeholder="votre@email.fr"/></div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:20}}>
                      <div><label style={lbl} htmlFor="commune">Commune *</label><input style={inp} type="text" id="commune" placeholder="Ex : Orléans" required/></div>
                      <div>
                        <label style={lbl} htmlFor="profil">Vous êtes *</label>
                        <select style={{...inp,backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2394A3B8' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")",backgroundRepeat:"no-repeat",backgroundPosition:"right 16px center",paddingRight:40,appearance:"none" as const}} id="profil" required>
                          <option value="" disabled>Choisir…</option>
                          <option>Particulier</option>
                          <option>Professionnel</option>
                        </select>
                      </div>
                    </div>
                    <div style={{marginBottom:20}}>
                      <label style={lbl}>Durée souhaitée</label>
                      <div style={{display:"flex",gap:10,flexWrap:"wrap" as const}}>
                        {["Week-end (3j)","1 semaine","1 mois","Sur devis"].map(d=>(
                          <span key={d} onClick={()=>setDur(d)} style={{padding:"9px 18px",border:d===dur?"2px solid #2563EB":"1.5px solid rgba(37,99,235,0.15)",borderRadius:50,fontSize:14,fontWeight:600,color:d===dur?"#fff":"#64748B",background:d===dur?"#2563EB":"#fff",cursor:"pointer",transition:"all .2s"}}>{d}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{marginBottom:20}}><label style={lbl} htmlFor="message">Message (optionnel)</label><textarea style={{...inp,resize:"vertical" as const,minHeight:100}} id="message" placeholder="Taille de la pièce, date souhaitée..."/></div>
                    <button type="submit" style={{width:"100%",padding:17,background:"linear-gradient(135deg,#2563EB,#1E40AF)",color:"#fff",border:"none",borderRadius:50,fontFamily:"Plus Jakarta Sans, sans-serif",fontSize:16,fontWeight:800,cursor:"pointer",boxShadow:"0 4px 24px rgba(37,99,235,0.4)",transition:"all .2s",display:"flex",alignItems:"center",justifyContent:"center",gap:10}}>
                      <span>Envoyer ma demande</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                    <p style={{fontSize:12,color:"#94A3B8",textAlign:"center" as const,marginTop:14,lineHeight:1.6}}>🔒 Vos données sont confidentielles et ne sont jamais partagées.</p>
                  </form>
                </>
              ) : (
                <div style={{textAlign:"center" as const,padding:"48px 24px"}}>
                  <div style={{fontSize:56,marginBottom:20}}>✅</div>
                  <div style={{fontSize:22,fontWeight:800,color:"#1E293B",marginBottom:10}}>Demande envoyée !</div>
                  <p style={{fontSize:15,color:"#64748B",lineHeight:1.7,marginBottom:24}}>On vous rappelle <strong>sous 1h</strong> pour confirmer votre devis.<br/>Besoin d'une réponse encore plus rapide ?</p>
                  <a href="tel:0783800070" style={{display:"inline-flex",alignItems:"center",gap:8,background:"linear-gradient(135deg,#2563EB,#1E40AF)",color:"#fff",padding:"14px 28px",borderRadius:50,fontWeight:700,fontSize:15,boxShadow:"0 4px 20px rgba(37,99,235,0.4)"}}>📞 07 83 80 00 70</a>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <div style={{display:"flex",flexDirection:"column" as const,gap:20}}>
              {/* Contact */}
              <div style={{background:"linear-gradient(160deg,#1a2744,#1e3055)",borderRadius:20,padding:"32px 28px",border:"1px solid rgba(37,99,235,0.2)"}}>
                <div style={{fontSize:13,fontWeight:700,color:"#7DD3FC",textTransform:"uppercase" as const,letterSpacing:"1.5px",marginBottom:20}}>Nous contacter</div>
                {[
                  {icon:"📞",label:"Téléphone",value:"07 83 80 00 70",href:"tel:0783800070",sub:"Réponse immédiate · 7j/7"},
                  {icon:"💬",label:"WhatsApp",value:"Écrire sur WhatsApp",href:"https://wa.me/33783800070",sub:"Devis écrit · Réponse rapide"},
                  {icon:"✉️",label:"Email",value:"loiseau.services45@gmail.com",href:"mailto:loiseau.services45@gmail.com",sub:"Réponse sous quelques heures"},
                  {icon:"📍",label:"Zone d'intervention",value:"Orléans & Loiret (45)",href:null,sub:"Basé à La Ferté-Saint-Aubin"},
                ].map(({icon,label,value,href,sub})=>(
                  <div key={label} style={{display:"flex",alignItems:"flex-start",gap:14,marginBottom:20}}>
                    <div style={{width:42,height:42,background:"rgba(56,189,248,0.12)",border:"1px solid rgba(56,189,248,0.2)",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>{icon}</div>
                    <div>
                      <div style={{fontSize:12,fontWeight:600,color:"rgba(180,210,255,0.5)",textTransform:"uppercase" as const,letterSpacing:"1px",marginBottom:4}}>{label}</div>
                      {href ? <a href={href} style={{fontSize:15,fontWeight:700,color:"#F0F6FF"}}>{value}</a> : <div style={{fontSize:15,fontWeight:700,color:"#F0F6FF"}}>{value}</div>}
                      <div style={{fontSize:12,color:"rgba(180,210,255,0.45)",marginTop:3}}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Horaires */}
              <div style={{background:"#fff",borderRadius:20,padding:28,border:"1px solid rgba(37,99,235,0.08)",boxShadow:"0 2px 12px rgba(37,99,235,0.05)"}}>
                <div style={{display:"inline-flex",alignItems:"center",gap:6,background:"rgba(16,185,129,0.1)",color:"#059669",padding:"4px 12px",borderRadius:50,fontSize:12,fontWeight:700,marginBottom:14}}>
                  <span style={{width:6,height:6,borderRadius:"50%",background:"#10B981",display:"inline-block"}}/>
                  Ouvert maintenant
                </div>
                <div style={{fontSize:13,fontWeight:700,color:"#2563EB",textTransform:"uppercase" as const,letterSpacing:"1.5px",marginBottom:16}}>Horaires d'ouverture</div>
                {[["Lundi — Vendredi","8h – 20h"],["Samedi","8h – 20h"],["Dimanche","8h – 20h"]].map(([day,time])=>(
                  <div key={day} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:"1px solid rgba(37,99,235,0.07)"}}>
                    <span style={{fontSize:14,fontWeight:600,color:"#1E293B"}}>{day}</span>
                    <span style={{fontSize:14,fontWeight:700,color:"#2563EB"}}>{time}</span>
                  </div>
                ))}
              </div>

              {/* Stripe */}
              <div style={{background:"linear-gradient(160deg,#0d1e3d,#1a2e55)",borderRadius:20,padding:28,border:"1px solid rgba(56,189,248,0.15)",position:"relative",overflow:"hidden"}}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
                  <div style={{width:38,height:38,background:"rgba(99,91,255,0.2)",border:"1px solid rgba(99,91,255,0.3)",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>🔒</div>
                  <div style={{fontSize:15,fontWeight:700,color:"#F0F6FF"}}>Caution sécurisée via Stripe</div>
                </div>
                <ul style={{listStyle:"none",display:"flex",flexDirection:"column" as const,gap:10,marginBottom:16}}>
                  {["Vous confirmez votre réservation par téléphone","Vous recevez un lien de paiement Stripe sécurisé","La caution de 150€ est retenue sur votre carte","Remboursée intégralement sous 48h après récupération"].map((s,i)=>(
                    <li key={i} style={{display:"flex",alignItems:"flex-start",gap:10,fontSize:13,color:"rgba(180,210,255,0.65)",lineHeight:1.5}}>
                      <span style={{width:22,height:22,background:"rgba(37,99,235,0.3)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:"#7DD3FC",flexShrink:0}}>{i+1}</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <p style={{fontSize:12,color:"rgba(180,210,255,0.4)",paddingTop:12,borderTop:"1px solid rgba(255,255,255,0.06)",lineHeight:1.5}}>🛡️ Paiement 100% sécurisé par Stripe — aucune donnée bancaire stockée de notre côté.</p>
              </div>
            </div>
          </div>
        </section>

        {/* REASSURANCE */}
        <section style={{padding:"56px 24px",background:"#fff"}}>
          <div style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
            {[
              {icon:"⚡",title:"Réponse sous 1h",desc:"On vous rappelle rapidement pour confirmer votre devis."},
              {icon:"🚚",title:"Livraison sous 24h",desc:"Orléans et alentours. Installation comprise dans chaque forfait."},
              {icon:"🔒",title:"Paiement sécurisé",desc:"Caution via Stripe. Remboursée après récupération sans dommage."},
              {icon:"📍",title:"Prestataire local",desc:"Basé à La Ferté-Saint-Aubin. Vous parlez directement au responsable."},
            ].map(({icon,title,desc})=>(
              <div key={title} className="dark-card" style={{padding:"24px 20px",textAlign:"center" as const}}>
                <div style={{fontSize:28,marginBottom:12}}>{icon}</div>
                <div style={{fontSize:14,fontWeight:700,color:"#F0F6FF",marginBottom:6}}>{title}</div>
                <p style={{fontSize:12,color:"rgba(180,210,255,0.5)",lineHeight:1.6}}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{background:"#0D1117",padding:"72px 24px",textAlign:"center" as const,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(37,99,235,0.18),transparent 65%)",pointerEvents:"none"}}/>
          <h2 style={{color:"#F0F6FF",fontSize:"clamp(26px,4vw,38px)",fontWeight:800,letterSpacing:"-1.2px",marginBottom:12,position:"relative",zIndex:1}}>Prêt à retrouver la fraîcheur ?</h2>
          <p style={{color:"rgba(255,255,255,0.45)",fontSize:16,marginBottom:36,position:"relative",zIndex:1,fontStyle:"italic"}}>Un appel suffit — devis gratuit, livraison sous 24h.</p>
          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap",position:"relative",zIndex:1}}>
            <a href="tel:0783800070" className="btn-cta-main">📞 07 83 80 00 70</a>
            <a href="https://wa.me/33783800070" className="btn-cta-wa" target="_blank" rel="noopener">💬 WhatsApp</a>
          </div>
        </section>
      </main>
      <Footer/>
      <FloatCTA/>
    </>
  );
}
