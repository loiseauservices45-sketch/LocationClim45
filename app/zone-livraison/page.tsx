import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import FloatCTA from "@/components/FloatCTA";

export const metadata: Metadata = {
  title: "Zone de Livraison Climatiseur — Orléans, La Ferté-Saint-Aubin & Loiret",
  description: "Livraison climatiseur mobile à Orléans, La Ferté-Saint-Aubin, Meung-sur-Loire, Saint-Ay, Ardon, La Source et alentours. Zone centrale gratuite.",
};

const zones = [
  {
    color:"#10B981", dotClass:"green", name:"Zone centrale", badge:"Livraison gratuite", badgeBg:"rgba(16,185,129,0.1)", badgeColor:"#059669",
    desc:"Livraison, installation et récupération entièrement gratuites, comprises dans chaque forfait. Délai sous 24h.",
    cities:["📍 La Ferté-Saint-Aubin","Orléans","La Source","Saint-Jean-le-Blanc","Ardon","Marcilly-en-Villette"],
    cityStyle:{background:"rgba(16,185,129,0.08)",color:"#047857",border:"1px solid rgba(16,185,129,0.15)"},
  },
  {
    color:"#F59E0B", dotClass:"amber", name:"Zone étendue", badge:"Supplément possible", badgeBg:"rgba(245,158,11,0.1)", badgeColor:"#B45309",
    desc:"Livraison disponible avec un petit supplément selon la distance. Appelez-nous pour un devis rapide et précis.",
    cities:["Meung-sur-Loire","Saint-Ay","Saran","Olivet","Saint-Jean-de-la-Ruelle","Lamotte-Beuvron"],
    cityStyle:{background:"rgba(245,158,11,0.08)",color:"#92400E",border:"1px solid rgba(245,158,11,0.15)"},
  },
  {
    color:"#F97316", dotClass:"orange", name:"Hors zone", badge:"Sur devis", badgeBg:"rgba(249,115,22,0.1)", badgeColor:"#C2410C",
    desc:"Pour Montargis, Pithiviers, Blois et communes plus éloignées — intervention possible sur devis.",
    cities:["Montargis","Pithiviers","Blois","Autres communes du 45"],
    cityStyle:{background:"rgba(249,115,22,0.08)",color:"#9A3412",border:"1px solid rgba(249,115,22,0.15)"},
  },
];

export default function ZoneLivraison() {
  return (
    <>
      <Banner text="Basé à La Ferté-Saint-Aubin — Livraison gratuite zone centrale · Supplément zone étendue" />
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
              Zone centrale gratuite, zone étendue avec supplément selon la distance. Transparent et sans surprise.
            </p>
            <div style={{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center",marginBottom:36}}>
              <a href="#zones" className="btn-primary">Voir ma zone ↓</a>
              <a href="tel:0783800070" className="btn-ghost">📞 Vérifier la disponibilité</a>
            </div>
            <div style={{display:"flex",gap:0,justifyContent:"center",flexWrap:"wrap",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.09)",borderRadius:18,padding:4,maxWidth:520,margin:"0 auto"}}>
              {[{num:"24h",label:"Délai de livraison"},{num:"0€",label:"Livraison zone centrale"},{num:"7j/7",label:"Disponibilité"}].map(({num,label})=>(
                <div key={num} style={{flex:1,minWidth:130,textAlign:"center" as const,padding:"16px 12px",borderRight:"1px solid rgba(255,255,255,0.07)"}}>
                  <div style={{fontSize:24,fontWeight:800,color:"#F0F6FF",letterSpacing:"-1px",lineHeight:1}}>{num}</div>
                  <div style={{fontSize:12,color:"rgba(180,210,255,0.5)",marginTop:4}}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAP + ZONES */}
        <section id="zones" style={{padding:"80px 24px",background:"linear-gradient(180deg,#EFF6FF,#F8FAFC)"}}>
          <p className="section-label">Zones de livraison</p>
          <h2 style={{textAlign:"center",fontSize:"clamp(26px,4vw,38px)",fontWeight:800,color:"#1E293B",letterSpacing:"-1.2px",marginBottom:16}}>Où livrons-nous ?</h2>
          <p style={{textAlign:"center",fontSize:16,color:"#64748B",maxWidth:520,margin:"0 auto 52px",lineHeight:1.7}}>Trois zones clairement définies pour une totale transparence sur les conditions de livraison.</p>
          <div style={{maxWidth:1080,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 400px",gap:48,alignItems:"start"}}>
            {/* SVG MAP */}
            <div style={{background:"linear-gradient(160deg,#1a2744,#1e3055)",borderRadius:24,padding:32,border:"1px solid rgba(37,99,235,0.2)",boxShadow:"0 12px 48px rgba(37,99,235,0.12)",position:"relative",overflow:"hidden"}}>
              <div style={{fontSize:13,fontWeight:700,color:"#7DD3FC",textTransform:"uppercase" as const,letterSpacing:"1.5px",marginBottom:20,display:"flex",alignItems:"center",gap:8}}>
                <span style={{width:8,height:8,borderRadius:"50%",background:"#38BDF8",display:"inline-block"}}/>
                Carte de livraison — Loiret (45)
              </div>
              <svg viewBox="0 0 460 420" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"auto"}}>
                <rect x="0" y="0" width="460" height="420" fill="rgba(255,255,255,0.02)" rx="16"/>
                <circle cx="230" cy="210" r="185" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.18)" strokeWidth="1.5" strokeDasharray="6 4"/>
                <circle cx="230" cy="210" r="120" fill="rgba(245,158,11,0.10)" stroke="rgba(245,158,11,0.28)" strokeWidth="1.5" strokeDasharray="4 3"/>
                <circle cx="230" cy="210" r="62" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.45)" strokeWidth="2"/>
                <path d="M 30 180 Q 80 165 130 175 Q 180 185 230 178 Q 290 168 350 180 Q 400 188 440 175" fill="none" stroke="rgba(56,189,248,0.35)" strokeWidth="3" strokeLinecap="round"/>
                <text x="100" y="163" fontFamily="sans-serif" fontSize="9" fill="rgba(56,189,248,0.5)" fontStyle="italic">Loire</text>
                <circle cx="230" cy="148" r="10" fill="#2563EB" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                <circle cx="230" cy="148" r="4" fill="white"/>
                <text x="244" y="152" fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="white">Orléans</text>
                <circle cx="238" cy="168" r="6" fill="#10B981" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                <text x="248" y="172" fontFamily="sans-serif" fontSize="10" fill="rgba(200,230,200,0.85)">La Source</text>
                <circle cx="252" cy="158" r="6" fill="#10B981" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                <text x="262" y="163" fontFamily="sans-serif" fontSize="10" fill="rgba(200,230,200,0.85)">St-Jean-le-Blanc</text>
                <circle cx="222" cy="184" r="6" fill="#10B981" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                <text x="170" y="188" fontFamily="sans-serif" fontSize="10" fill="rgba(200,230,200,0.85)">Ardon</text>
                <circle cx="230" cy="225" r="11" fill="#10B981" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5"/>
                <circle cx="230" cy="225" r="5" fill="white"/>
                <circle cx="230" cy="225" r="18" fill="none" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5"><animate attributeName="r" values="14;22;14" dur="2.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite"/></circle>
                <text x="244" y="222" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#34D399">La Ferté-St-Aubin</text>
                <text x="244" y="234" fontFamily="sans-serif" fontSize="9" fill="rgba(52,211,153,0.7)">📍 Notre base</text>
                <circle cx="268" cy="240" r="6" fill="#10B981" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                <text x="278" y="244" fontFamily="sans-serif" fontSize="10" fill="rgba(200,230,200,0.85)">Marcilly-en-Villette</text>
                <circle cx="148" cy="172" r="7" fill="#F59E0B" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                <text x="90" y="167" fontFamily="sans-serif" fontSize="10" fill="rgba(253,230,138,0.85)">Meung-sur-Loire</text>
                <circle cx="168" cy="162" r="7" fill="#F59E0B" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                <text x="110" y="155" fontFamily="sans-serif" fontSize="10" fill="rgba(253,230,138,0.85)">Saint-Ay</text>
                <circle cx="218" cy="120" r="7" fill="#F59E0B" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                <text x="228" y="118" fontFamily="sans-serif" fontSize="10" fill="rgba(253,230,138,0.85)">Saran</text>
                <circle cx="244" cy="132" r="7" fill="#F59E0B" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                <text x="254" y="130" fontFamily="sans-serif" fontSize="10" fill="rgba(253,230,138,0.85)">Olivet</text>
                <circle cx="390" cy="220" r="7" fill="#F97316" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
                <text x="340" y="218" fontFamily="sans-serif" fontSize="10" fill="rgba(253,186,116,0.8)">Montargis</text>
                <circle cx="290" cy="72" r="7" fill="#F97316" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
                <text x="300" y="70" fontFamily="sans-serif" fontSize="10" fill="rgba(253,186,116,0.8)">Pithiviers</text>
                <circle cx="72" cy="270" r="7" fill="#F97316" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
                <text x="82" y="268" fontFamily="sans-serif" fontSize="10" fill="rgba(253,186,116,0.8)">Blois</text>
                <rect x="12" y="360" width="436" height="52" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                <circle cx="36" cy="386" r="6" fill="#10B981"/><text x="48" y="390" fontFamily="sans-serif" fontSize="11" fill="rgba(255,255,255,0.7)">Zone gratuite</text>
                <circle cx="150" cy="386" r="6" fill="#F59E0B"/><text x="162" y="390" fontFamily="sans-serif" fontSize="11" fill="rgba(255,255,255,0.7)">Zone étendue</text>
                <circle cx="268" cy="386" r="6" fill="#F97316"/><text x="280" y="390" fontFamily="sans-serif" fontSize="11" fill="rgba(255,255,255,0.7)">Sur devis</text>
                <circle cx="368" cy="386" r="5" fill="#2563EB"/><circle cx="368" cy="386" r="2" fill="white"/><text x="380" y="390" fontFamily="sans-serif" fontSize="11" fill="rgba(255,255,255,0.7)">Notre base</text>
              </svg>
            </div>

            {/* ZONES PANEL */}
            <div style={{display:"flex",flexDirection:"column" as const,gap:20}}>
              {zones.map(({color,name,badge,badgeBg,badgeColor,desc,cities,cityStyle})=>(
                <div key={name} style={{background:"#fff",borderRadius:20,padding:"28px 24px",border:"1px solid rgba(0,0,0,0.07)",boxShadow:"0 2px 12px rgba(37,99,235,0.05)",transition:"all .2s"}}>
                  <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
                    <div style={{width:14,height:14,borderRadius:"50%",background:color,flexShrink:0}}/>
                    <div style={{fontSize:16,fontWeight:800,color:"#1E293B"}}>{name}</div>
                    <span style={{marginLeft:"auto",padding:"4px 12px",borderRadius:50,fontSize:12,fontWeight:700,background:badgeBg,color:badgeColor}}>{badge}</span>
                  </div>
                  <p style={{fontSize:14,color:"#64748B",marginBottom:14,lineHeight:1.6}}>{desc}</p>
                  <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                    {cities.map(c=><span key={c} style={{padding:"5px 12px",borderRadius:50,fontSize:13,fontWeight:600,...cityStyle}}>{c}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
          <p style={{color:"rgba(255,255,255,0.45)",fontSize:16,marginBottom:36,position:"relative",zIndex:1,fontStyle:"italic"}}>Réservez maintenant — livraison sous 24h, installation comprise.</p>
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
