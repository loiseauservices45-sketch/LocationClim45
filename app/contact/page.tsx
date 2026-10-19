import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import FloatCTA from "@/components/FloatCTA";
import FormulaireDevis from "@/components/FormulaireDevis";

export default function Contact() {
  return (
    <>
      <Banner text="Ouvert 7j/7 de 8h à 20h — Devis gratuit · Installation incluse" />
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
              Remplissez le formulaire ou appelez directement : c'est le plus rapide. On répond vite, on livre vite.
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
              <FormulaireDevis />
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

              {/* Caution & paiement */}
              <div style={{background:"linear-gradient(160deg,#0d1e3d,#1a2e55)",borderRadius:20,padding:28,border:"1px solid rgba(56,189,248,0.15)",position:"relative",overflow:"hidden"}}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
                  <div style={{width:38,height:38,background:"rgba(56,189,248,0.15)",border:"1px solid rgba(56,189,248,0.3)",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>📄</div>
                  <div style={{fontSize:15,fontWeight:700,color:"#F0F6FF"}}>Réservation, paiement & caution</div>
                </div>
                <ol style={{listStyle:"none",display:"flex",flexDirection:"column" as const,gap:10,marginBottom:16}}>
                  {["Vous confirmez votre réservation par téléphone","Nous livrons, installons et mettons en service l'appareil","Paiement à la livraison et caution de 150 € par appareil (chèque non encaissé ou virement)","Caution restituée après récupération de l'appareil en bon état"].map((t,i)=>(
                    <li key={i} style={{display:"flex",alignItems:"flex-start",gap:10,fontSize:13,color:"rgba(200,220,255,0.85)",lineHeight:1.5}}>
                      <span style={{width:22,height:22,background:"rgba(37,99,235,0.35)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:"#BAE6FD",flexShrink:0}}>{i+1}</span>
                      {t}
                    </li>
                  ))}
                </ol>
                <p style={{fontSize:12,color:"rgba(200,220,255,0.7)",paddingTop:12,borderTop:"1px solid rgba(255,255,255,0.08)",lineHeight:1.5}}>📄 Un contrat de location écrit est signé pour chaque location.</p>
              </div>
            </div>
          </div>
        </section>

        {/* REASSURANCE */}
        <section style={{padding:"56px 24px",background:"#fff"}}>
          <div style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
            {[
              {icon:"⚡",title:"Réponse sous 1h",desc:"On vous rappelle rapidement pour confirmer votre devis."},
              {icon:"🚚",title:"Livraison sous 24h",desc:"Orléans et tout le Loiret. Installation comprise, livraison sur devis."},
              {icon:"📄",title:"Contrat clair",desc:"Contrat de location écrit. Caution restituée après récupération sans dommage."},
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
          <p style={{color:"rgba(255,255,255,0.75)",fontSize:16,marginBottom:36,position:"relative",zIndex:1}}>Un appel suffit — devis gratuit, installation incluse.</p>
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
