import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import FloatCTA from "@/components/FloatCTA";

export const metadata: Metadata = {
  title: "Location Climatiseur Particuliers — Orléans & Loiret",
  description: "Location climatiseur mobile pour particuliers à Orléans. Livraison à domicile sous 24h, installation incluse, sans travaux. Idéal canicule.",
};

const S = {
  darkCard: { background: "linear-gradient(160deg,#1a2744,#1e3055)", border: "1px solid rgba(37,99,235,0.2)", borderRadius: 20, padding: "28px 24px", transition: "all .25s" } as React.CSSProperties,
  icon: { width:52,height:52,background:"rgba(56,189,248,0.12)",border:"1px solid rgba(56,189,248,0.2)",borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,marginBottom:18 } as React.CSSProperties,
};

const prices = [
  { name:"Week-end", price:"74€", period:"3 jours minimum", feats:["Livraison incluse","Installation incluse","Récupération incluse","Climatiseur 2000W"], featured:false },
  { name:"Semaine Fraîcheur", price:"134€", period:"7 jours", feats:["Livraison incluse","Installation incluse","Récupération incluse","Climatiseur 2000W","Support 7j/7"], featured:true },
  { name:"Mois Sérénité", price:"384€", period:"30 jours", feats:["Livraison incluse","Installation incluse","Récupération incluse","Climatiseur 2000W","Support 7j/7"], featured:false },
];

export default function Particuliers() {
  return (
    <>
      <Banner text="Livraison à domicile sous 24h — Orléans et ses alentours · Particuliers" />
      <Header />
      <main>
        {/* HERO */}
        <section className="hero-bg" style={{padding:"80px 24px 88px"}}>
          <div className="hero-grid"/><div className="hero-glow-1"/><div className="hero-glow-2"/><div className="hero-streak"/>
          <div style={{maxWidth:780,margin:"0 auto",textAlign:"center",position:"relative",zIndex:1}}>
            <div className="hero-badge" style={{marginBottom:24,display:"inline-flex"}}><span className="badge-dot"/> Pour les particuliers — Orléans &amp; Loiret</div>
            <h1 style={{fontSize:"clamp(34px,5vw,54px)",fontWeight:800,color:"#F0F6FF",lineHeight:1.08,letterSpacing:"-2px",marginBottom:22}}>
              Retrouvez la fraîcheur<br/>
              <em style={{fontStyle:"normal",background:"linear-gradient(135deg,#7DD3FC,#38BDF8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>chez vous, dès demain.</em>
            </h1>
            <p style={{fontSize:17,color:"rgba(200,220,255,0.6)",lineHeight:1.75,maxWidth:560,margin:"0 auto 36px"}}>
              Pas d'achat, pas d'installation complexe. On livre, on installe, on récupère. Vous profitez de la fraîcheur, c'est tout.
            </p>
            <div style={{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center",marginBottom:40}}>
              <a href="tel:0783800070" className="btn-primary">📞 Appeler maintenant</a>
              <a href="#tarifs" className="btn-ghost">Voir les tarifs →</a>
            </div>
            <div style={{display:"flex",gap:20,flexWrap:"wrap",justifyContent:"center"}}>
              {["🏠 Maison & appartement","🚚 Livraison à domicile","🔧 Sans travaux","⏱️ Sous 24h"].map(t=>(
                <span key={t} style={{fontSize:13,fontWeight:600,color:"rgba(180,210,255,0.55)"}}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLÈMES */}
        <section style={{padding:"80px 24px",background:"linear-gradient(180deg,#EFF6FF,#F8FAFC)"}}>
          <p className="section-label">Vous vous reconnaissez ?</p>
          <h2 style={{textAlign:"center",fontSize:"clamp(26px,4vw,38px)",fontWeight:800,color:"#1E293B",letterSpacing:"-1.2px",marginBottom:52}}>La chaleur gâche votre quotidien.</h2>
          <div style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
            {[
              {icon:"🥵",title:"Appartement étouffant",desc:"Sous les toits ou exposé plein sud, dormir devient un défi dès que les 30°C sont dépassés."},
              {icon:"💻",title:"Télétravail inconfortable",desc:"Impossible de se concentrer quand il fait 35°C dans votre bureau à domicile."},
              {icon:"🛏️",title:"Nuits impossibles",desc:"Chambre qui accumule la chaleur, enfants agités, sommeil haché."},
              {icon:"👶",title:"Famille à protéger",desc:"Bébés, personnes âgées — certains membres de votre foyer supportent très mal la chaleur."},
              {icon:"🏠",title:"Maison sous les combles",desc:"La chaleur s'accumule toute la journée et reste la nuit. Sans solution, c'est invivable."},
              {icon:"⚕️",title:"Santé en jeu",desc:"Les canicules sont dangereuses. Un climatiseur peut faire la différence pour les personnes fragiles."},
            ].map(({icon,title,desc})=>(
              <div key={title} style={S.darkCard}>
                <div style={{fontSize:32,marginBottom:14}}>{icon}</div>
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
              <div style={{fontSize:17,fontWeight:700,color:"#fff"}}>Vous vous reconnaissez dans l'une de ces situations ?</div>
              <div style={{fontSize:13,color:"rgba(255,255,255,0.7)",marginTop:3}}>Devis gratuit, réponse sous 1h, livraison sous 24h.</div>
            </div>
            <a href="tel:0783800070" style={{background:"#fff",color:"#1D4ED8",padding:"12px 26px",borderRadius:50,fontWeight:800,fontSize:14,whiteSpace:"nowrap" as const}}>📞 07 83 80 00 70</a>
          </div>
        </div>

        {/* AVANTAGES */}
        <section style={{padding:"80px 24px",background:"#fff"}}>
          <p className="section-label">La solution</p>
          <h2 style={{textAlign:"center",fontSize:"clamp(26px,4vw,38px)",fontWeight:800,color:"#1E293B",letterSpacing:"-1.2px",marginBottom:52}}>Un appel. Le lendemain, vous êtes au frais.</h2>
          <div style={{maxWidth:900,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
            {[
              {icon:"⚡",title:"Rapidité",desc:"Disponible sous 24h. En période de canicule, chaque heure compte."},
              {icon:"🔧",title:"Simplicité",desc:"On installe, on vous explique, on repart. Vous n'avez rien à faire."},
              {icon:"💶",title:"Économie",desc:"Pas d'achat à 800€+. Vous payez uniquement la durée dont vous avez besoin."},
            ].map(({icon,title,desc})=>(
              <div key={title} style={{background:"linear-gradient(180deg,#EFF6FF,#F0F9FF)",border:"1px solid rgba(37,99,235,0.10)",borderRadius:20,padding:"32px 28px",textAlign:"center" as const}}>
                <div style={{fontSize:40,marginBottom:16}}>{icon}</div>
                <div style={{fontSize:18,fontWeight:800,color:"#1E293B",marginBottom:10}}>{title}</div>
                <p style={{fontSize:14,color:"#64748B",lineHeight:1.65}}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW */}
        <section style={{padding:"80px 24px",background:"linear-gradient(160deg,#1a2744,#1e3055 60%,#162240 100%)",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:-120,right:-120,width:360,height:360,background:"radial-gradient(circle,rgba(56,189,248,0.08),transparent 65%)",pointerEvents:"none"}}/>
          <p className="section-label section-label-light" style={{position:"relative",zIndex:1}}>En 4 étapes</p>
          <h2 style={{textAlign:"center",fontSize:"clamp(26px,4vw,38px)",fontWeight:800,color:"#F0F6FF",letterSpacing:"-1.2px",marginBottom:52,position:"relative",zIndex:1}}>Simple comme un appel.</h2>
          <div style={{maxWidth:980,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:4,position:"relative",zIndex:1}}>
            {[
              {n:1,title:"Vous appelez",desc:"On vérifie la dispo et on choisit ensemble votre forfait."},
              {n:2,title:"On confirme",desc:"Créneau fixé sous 1h, confirmation SMS avec le prix."},
              {n:3,title:"Livraison & install",desc:"On arrive sous 24h et installe l'appareil en quelques minutes."},
              {n:4,title:"Récupération",desc:"On vient reprendre l'appareil. Caution remboursée sous 48h."},
            ].map(({n,title,desc})=>(
              <div key={n} style={{textAlign:"center" as const,padding:"0 12px"}}>
                <div style={{width:68,height:68,background:"linear-gradient(135deg,#2563EB,#1E40AF)",color:"#fff",borderRadius:"50%",fontSize:22,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",boxShadow:"0 0 0 6px rgba(37,99,235,0.12),0 4px 20px rgba(37,99,235,0.4)"}}>{n}</div>
                <div style={{fontSize:15,fontWeight:700,color:"#F0F6FF",marginBottom:10}}>{title}</div>
                <p style={{fontSize:13,color:"rgba(180,210,255,0.45)",lineHeight:1.65}}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="tarifs" style={{background:"linear-gradient(160deg,#07111F,#0F1F4A 60%,#1E3A8A 100%)",padding:"80px 24px"}}>
          <p className="section-label section-label-light">Tarifs tout compris</p>
          <h2 style={{textAlign:"center",fontSize:"clamp(26px,4vw,38px)",fontWeight:800,color:"#F0F6FF",letterSpacing:"-1.2px",marginBottom:52}}>Des forfaits simples et transparents</h2>
          <div style={{maxWidth:980,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
            {prices.map(({name,price,period,feats,featured})=>(
              <div key={name} className="price-card" style={featured?{background:"#fff",border:"none",boxShadow:"0 12px 48px rgba(0,0,0,0.4)"}:{}}>
                {featured&&<span style={{position:"absolute",top:-13,left:"50%",transform:"translateX(-50%)",background:"linear-gradient(135deg,#0EA5E9,#38BDF8)",color:"#0F172A",padding:"5px 16px",borderRadius:50,fontSize:11,fontWeight:800,whiteSpace:"nowrap" as const}}>⭐ Le plus choisi</span>}
                <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase" as const,letterSpacing:"1.5px",color:featured?"#2563EB":"rgba(255,255,255,0.45)",marginBottom:10}}>{name}</div>
                <div style={{fontSize:48,fontWeight:800,lineHeight:1,color:featured?"#1E293B":"#F0F6FF",marginBottom:4,letterSpacing:"-2px"}}>{price}</div>
                <div style={{fontSize:14,color:featured?"#94A3B8":"rgba(255,255,255,0.4)",marginBottom:24}}>{period}</div>
                <ul style={{listStyle:"none"}}>{feats.map(f=><li key={f} style={{fontSize:14,padding:"8px 0",borderBottom:featured?"1px solid rgba(0,0,0,0.07)":"1px solid rgba(255,255,255,0.07)",display:"flex",alignItems:"center",gap:9,color:featured?"#475569":"rgba(255,255,255,0.7)"}}><span style={{color:featured?"#2563EB":"#38BDF8",fontWeight:800}}>✓</span> {f}</li>)}</ul>
                <a href="tel:0783800070" style={{display:"block",width:"100%",textAlign:"center" as const,marginTop:24,padding:"14px",borderRadius:50,fontWeight:700,fontSize:15,background:featured?"#1E293B":"rgba(255,255,255,0.08)",color:"#fff",border:featured?"none":"1px solid rgba(255,255,255,0.15)"}}>Réserver</a>
              </div>
            ))}
          </div>
          <p style={{textAlign:"center",marginTop:28,fontSize:14,color:"rgba(255,255,255,0.4)"}}>🔒 Caution 150€ remboursable · Paiement sécurisé par Stripe</p>
        </section>

        {/* CTA FINAL */}
        <section style={{background:"#0D1117",padding:"80px 24px",textAlign:"center" as const,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(37,99,235,0.18),transparent 65%)",pointerEvents:"none"}}/>
          <h2 style={{color:"#F0F6FF",fontSize:"clamp(26px,4vw,38px)",fontWeight:800,letterSpacing:"-1.2px",marginBottom:12,position:"relative",zIndex:1}}>Prêt à retrouver la fraîcheur chez vous ?</h2>
          <p style={{color:"rgba(255,255,255,0.45)",fontSize:17,marginBottom:40,position:"relative",zIndex:1,fontStyle:"italic"}}>Réponse immédiate — livraison sous 24h.</p>
          <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap",position:"relative",zIndex:1}}>
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
