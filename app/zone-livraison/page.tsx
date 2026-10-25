import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import FloatCTA from "@/components/FloatCTA";
import ZoneLivraison from "@/components/ZoneLivraison";

export const metadata: Metadata = {
  title: "Zone de Livraison Climatiseur — Orléans, La Ferté-Saint-Aubin & Loiret",
  description: "Livraison climatiseur mobile à Orléans, La Ferté-Saint-Aubin, Meung-sur-Loire, Saint-Ay, Ardon, La Source et tout le Loiret. Installation incluse, livraison selon la distance.",
};


export default function PageZoneLivraison() {
  return (
    <>
      <Banner text="Basé à La Ferté-Saint-Aubin — Livraison sur Orléans et tout le Loiret · Installation incluse" />
      <Header />
      <main>
        {/* HERO */}
        <section className="hero-bg" style={{padding:"72px 24px 80px"}}>
          <div className="hero-grid"/><div className="hero-glow-1"/><div className="hero-glow-2"/><div className="hero-streak"/>
          <div style={{maxWidth:680,margin:"0 auto",textAlign:"center",position:"relative",zIndex:1}}>
            <div className="hero-badge" style={{marginBottom:24,display:"inline-flex"}}><span className="badge-dot"/> Basé à La Ferté-Saint-Aubin — Loiret (45)</div>
            <h1 style={{fontSize:"clamp(32px,5vw,52px)",fontWeight:800,color:"#F0F6FF",lineHeight:1.08,letterSpacing:"-2px",marginBottom:18}}>
              On livre la fraîcheur<br/>
              <em style={{fontStyle:"normal",background:"linear-gradient(135deg,#7DD3FC,#38BDF8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>jusqu'à votre porte.</em>
            </h1>
            <p style={{fontSize:17,color:"rgba(200,220,255,0.6)",lineHeight:1.75,maxWidth:560,margin:"0 auto 32px"}}>
              L'installation est toujours incluse. La livraison et la récupération sont facturées selon la distance et la durée de location : le montant exact figure dans votre devis, sans surprise.
            </p>
            <div style={{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center",marginBottom:36}}>
              <a href="#zones" className="btn-primary">Voir ma zone ↓</a>
              <a href="tel:0783800070" className="btn-ghost">📞 Vérifier la disponibilité</a>
            </div>
            <div style={{display:"flex",gap:0,justifyContent:"center",flexWrap:"wrap",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.09)",borderRadius:18,padding:4,maxWidth:520,margin:"0 auto"}}>
              {[{num:"24h",label:"Délai de livraison"},{num:"Inclus",label:"Installation & mise en service"},{num:"7j/7",label:"Disponibilité"}].map(({num,label})=>(
                <div key={num} style={{flex:1,minWidth:130,textAlign:"center" as const,padding:"16px 12px",borderRight:"1px solid rgba(255,255,255,0.07)"}}>
                  <div style={{fontSize:24,fontWeight:800,color:"#F0F6FF",letterSpacing:"-1px",lineHeight:1}}>{num}</div>
                  <div style={{fontSize:12,color:"rgba(180,210,255,0.5)",marginTop:4}}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CARTE + VÉRIFICATEUR */}
        <div id="zones"><ZoneLivraison /></div>

        {/* ENGAGEMENTS */}
        <section style={{padding:"72px 24px",background:"linear-gradient(180deg,#EFF6FF,#F8FAFC)"}}>
          <p className="section-label">Nos engagements</p>
          <h2 style={{textAlign:"center",fontSize:"clamp(26px,4vw,38px)",fontWeight:800,color:"#1E293B",letterSpacing:"-1.2px",marginBottom:52}}>La ponctualité, c'est notre réputation.</h2>
          <div style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
            {[
              {icon:"⏰",title:"Livraison au créneau choisi",desc:"On s'engage sur un créneau précis et on le respecte. Pas de fenêtre de 10h — on vous donne une heure."},
              {icon:"📞",title:"Prévenu 30 min avant",desc:"On vous appelle 30 minutes avant d'arriver. Vous êtes toujours informé, jamais pris par surprise."},
              {icon:"🔧",title:"Installation soignée",desc:"On installe proprement, sans abîmer, et on repart en laissant tout en ordre. Respect total de votre espace."},
            ].map(({icon,title,desc})=>(
              <div key={title} className="dark-card" style={{padding:"30px 24px"}}>
                <div style={{width:48,height:48,background:"rgba(56,189,248,0.12)",border:"1px solid rgba(56,189,248,0.2)",borderRadius:13,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,marginBottom:16}}>{icon}</div>
                <div style={{fontSize:16,fontWeight:700,color:"#F0F6FF",marginBottom:8}}>{title}</div>
                <p style={{fontSize:14,color:"rgba(180,210,255,0.52)",lineHeight:1.65}}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA STRIP */}
        <div className="cta-strip">
          <div style={{maxWidth:860,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",gap:20,flexWrap:"wrap"}}>
            <div>
              <div style={{fontSize:17,fontWeight:700,color:"#fff"}}>Vous n'êtes pas sûr d'être dans notre zone ?</div>
              <div style={{fontSize:13,color:"rgba(255,255,255,0.7)",marginTop:3}}>Appelez-nous — on vous répond en 2 minutes.</div>
            </div>
            <a href="tel:0783800070" style={{background:"#fff",color:"#1D4ED8",padding:"12px 26px",borderRadius:50,fontWeight:800,fontSize:14,whiteSpace:"nowrap" as const}}>📞 07 83 80 00 70</a>
          </div>
        </div>

        {/* CTA FINAL */}
        <section style={{background:"#0D1117",padding:"72px 24px",textAlign:"center" as const,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(37,99,235,0.18),transparent 65%)",pointerEvents:"none"}}/>
          <h2 style={{color:"#F0F6FF",fontSize:"clamp(26px,4vw,38px)",fontWeight:800,letterSpacing:"-1.2px",marginBottom:12,position:"relative",zIndex:1}}>Votre commune est dans notre zone ?</h2>
          <p style={{color:"rgba(255,255,255,0.45)",fontSize:16,marginBottom:36,position:"relative",zIndex:1,fontStyle:"italic"}}>Réservez maintenant — installation comprise, tarif de livraison dans votre devis.</p>
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
