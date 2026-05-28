import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import FloatCTA from "@/components/FloatCTA";

export const metadata: Metadata = {
  title: "Location Climatiseur Professionnel — Bureaux, Commerces, Événements Orléans",
  description: "Location climatiseur mobile pour professionnels à Orléans. Bureaux, commerces, restaurants, événements. Livraison 24h, facture pro, tarifs dès 18€/j.",
};

const prices = [
  { name:"Courts séjours", price:"74€", period:"3 jours minimum", feats:["Livraison incluse","Installation incluse","Récupération incluse","Facture professionnelle"], featured:false },
  { name:"Semaine pro", price:"134€", period:"7 jours", feats:["Livraison incluse","Installation incluse","Récupération incluse","Facture professionnelle","Support 7j/7"], featured:true },
  { name:"Sur devis", price:"18€", period:"par jour — longue durée", feats:["À partir de 5 jours","Livraison incluse","Multi-appareils possible","Facture professionnelle","Tarif dégressif"], featured:false },
];

export default function Professionnels() {
  return (
    <>
      <Banner text="Solutions pro disponibles sous 24h — Devis gratuit · Orléans & Loiret" />
      <Header />
      <main>
        {/* HERO */}
        <section className="hero-bg" style={{padding:"80px 24px 88px"}}>
          <div className="hero-grid"/><div className="hero-glow-1"/><div className="hero-glow-2"/><div className="hero-streak"/>
          <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 420px",gap:72,alignItems:"center",position:"relative",zIndex:1}}>
            <div>
              <div className="hero-badge" style={{marginBottom:24,display:"inline-flex"}}><span className="badge-dot"/> Solution professionnelle — Orléans &amp; Loiret</div>
              <h1 style={{fontSize:"clamp(32px,4.2vw,52px)",fontWeight:800,color:"#F0F6FF",lineHeight:1.08,letterSpacing:"-2px",marginBottom:22}}>
                La chaleur coûte de l'argent<br/>à{" "}
                <em style={{fontStyle:"normal",background:"linear-gradient(135deg,#7DD3FC,#38BDF8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>votre business.</em>
              </h1>
              <p style={{fontSize:17,color:"rgba(200,220,255,0.6)",marginBottom:32,lineHeight:1.75,maxWidth:520}}>
                Gardez vos équipes productives, vos clients confortables et votre activité sereine — même en pleine canicule. Livraison 24h, installation comprise.
              </p>
              <div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:36}}>
                <a href="tel:0783800070" className="btn-primary">📞 Demander un devis pro</a>
                <a href="#tarifs" className="btn-ghost">Voir les tarifs →</a>
              </div>
              <div style={{display:"flex",gap:24,flexWrap:"wrap"}}>
                {["💼 Bureaux & commerces","🎪 Événements","🚚 Livraison 24h","📄 Facture pro"].map(t=>(
                  <span key={t} style={{fontSize:13,fontWeight:600,color:"rgba(180,210,255,0.55)"}}>{t}</span>
                ))}
              </div>
            </div>
            {/* Stats */}
            <div style={{display:"flex",flexDirection:"column" as const,gap:16}}>
              <span style={{display:"inline-flex",alignItems:"center",gap:6,background:"linear-gradient(135deg,#059669,#10B981)",color:"#fff",padding:"5px 14px",borderRadius:50,fontSize:12,fontWeight:700,boxShadow:"0 4px 12px rgba(5,150,105,0.3)"}}>● Disponible maintenant sur Orléans</span>
              {[
                {icon:"⏱️",num:"24h",label:"Délai d'intervention maximum"},
                {icon:"💶",num:"18€/j",label:"Tarif pro à partir de"},
                {icon:"🔧",num:"0€",label:"Installation & récupération incluses"},
                {icon:"📄",num:"100%",label:"Facturation professionnelle fournie"},
              ].map(({icon,num,label})=>(
                <div key={num} style={{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.10)",borderRadius:18,padding:"22px 26px",backdropFilter:"blur(12px)",display:"flex",alignItems:"center",gap:20}}>
                  <div style={{width:48,height:48,borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",font:"22px",background:"rgba(255,255,255,0.08)",flexShrink:0,fontSize:22}}>{icon}</div>
                  <div>
                    <div style={{fontSize:26,fontWeight:800,color:"#F0F6FF",letterSpacing:"-1px",lineHeight:1}}>{num}</div>
                    <div style={{fontSize:13,color:"rgba(180,210,255,0.6)",marginTop:3}}>{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section style={{padding:"80px 24px",background:"linear-gradient(180deg,#EFF6FF,#F8FAFC)"}}>
          <p className="section-label">Nos clients professionnels</p>
          <h2 style={{textAlign:"center",fontSize:"clamp(26px,4vw,38px)",fontWeight:800,color:"#1E293B",letterSpacing:"-1.2px",marginBottom:16}}>Un besoin de fraîcheur ? On a la solution.</h2>
          <p style={{textAlign:"center",fontSize:16,color:"#64748B",maxWidth:540,margin:"0 auto 52px",lineHeight:1.7}}>Quelle que soit votre activité, on s'adapte à vos contraintes et à votre planning.</p>
          <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
            {[
              {icon:"🏢",title:"Bureaux & open-spaces",desc:"Des équipes qui transpirent, c'est de la productivité en moins. On installe rapidement, sans perturber votre activité."},
              {icon:"🍽️",title:"Restaurants & commerces",desc:"Vos clients restent plus longtemps dans un espace frais. Gardez votre réputation et votre chiffre d'affaires."},
              {icon:"🎪",title:"Événements & salons",desc:"Chapiteau, salle de réception, stand pro — on livre et récupère selon votre planning exact."},
              {icon:"🏗️",title:"Chantiers & entrepôts",desc:"Postes de travail, locaux de chantier, ateliers — on s'adapte à des environnements exigeants."},
              {icon:"🏫",title:"Écoles & collectivités",desc:"Salles de classe, réfectoires, bureaux administratifs — des solutions temporaires sans engagement long terme."},
              {icon:"🏥",title:"Santé & bien-être",desc:"Cabinets médicaux, salons, studios — le confort thermique de vos patients n'est pas négociable."},
            ].map(({icon,title,desc})=>(
              <div key={title} style={{background:"linear-gradient(160deg,#1a2744,#1e3055)",border:"1px solid rgba(37,99,235,0.2)",borderRadius:20,padding:"32px 26px",transition:"all .25s"}}>
                <div style={{width:52,height:52,background:"rgba(56,189,248,0.12)",border:"1px solid rgba(56,189,248,0.2)",borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,marginBottom:18}}>{icon}</div>
                <div style={{fontSize:17,fontWeight:700,color:"#F0F6FF",marginBottom:10}}>{title}</div>
                <p style={{fontSize:14,color:"rgba(180,210,255,0.55)",lineHeight:1.65}}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA STRIP */}
        <div className="cta-strip">
          <div style={{maxWidth:860,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",gap:20,flexWrap:"wrap"}}>
            <div>
              <div style={{fontSize:17,fontWeight:700,color:"#fff"}}>Besoin d'une solution rapide pour votre activité ?</div>
              <div style={{fontSize:13,color:"rgba(255,255,255,0.7)",marginTop:3}}>Réponse sous 1h · Devis gratuit sans engagement · Livraison sous 24h</div>
            </div>
            <a href="tel:0783800070" style={{background:"#fff",color:"#1D4ED8",padding:"12px 26px",borderRadius:50,fontWeight:800,fontSize:14,whiteSpace:"nowrap" as const}}>📞 07 83 80 00 70</a>
          </div>
        </div>

        {/* AVANTAGES LOUER VS ACHETER */}
        <section style={{padding:"80px 24px",background:"#fff"}}>
          <p className="section-label">Louer plutôt qu'acheter</p>
          <h2 style={{textAlign:"center",fontSize:"clamp(26px,4vw,38px)",fontWeight:800,color:"#1E293B",letterSpacing:"-1.2px",marginBottom:52}}>Un choix évident pour les pros</h2>
          <div style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,alignItems:"start"}}>
            <div style={{background:"linear-gradient(160deg,#1a2744,#1e3055)",border:"1px solid rgba(37,99,235,0.25)",borderRadius:20,padding:"36px 32px"}}>
              <span style={{display:"inline-flex",alignItems:"center",gap:6,background:"rgba(56,189,248,0.15)",color:"#7DD3FC",border:"1px solid rgba(56,189,248,0.2)",padding:"6px 14px",borderRadius:50,fontSize:12,fontWeight:700,marginBottom:20}}>✓ Location LocationClim45</span>
              <h3 style={{fontSize:20,fontWeight:800,color:"#F0F6FF",marginBottom:20}}>Flexible, simple, rentable</h3>
              <ul style={{listStyle:"none",display:"flex",flexDirection:"column" as const,gap:12}}>
                {["Aucun investissement initial","Installation et récupération incluses","Durée sur mesure : 3 jours à plusieurs mois","Appareil entretenu et garanti","Charge déductible en frais pro","Aucun souci de stockage hors saison","Facturation professionnelle fournie"].map(f=>(
                  <li key={f} style={{display:"flex",alignItems:"flex-start",gap:10,fontSize:14,color:"rgba(180,210,255,0.75)",lineHeight:1.5}}><span style={{color:"#38BDF8",fontWeight:800,flexShrink:0}}>✓</span>{f}</li>
                ))}
              </ul>
            </div>
            <div style={{background:"#F8FAFC",border:"1px solid #E2E8F0",borderRadius:20,padding:"36px 32px"}}>
              <span style={{display:"inline-flex",alignItems:"center",gap:6,background:"#F1F5F9",color:"#94A3B8",padding:"6px 14px",borderRadius:50,fontSize:12,fontWeight:700,marginBottom:20}}>✗ Achat en propre</span>
              <h3 style={{fontSize:20,fontWeight:800,color:"#94A3B8",marginBottom:20}}>Contraignant et coûteux</h3>
              <ul style={{listStyle:"none",display:"flex",flexDirection:"column" as const,gap:12}}>
                {["Investissement de 600€ à 2000€+","Installation à votre charge","Maintenance et pannes à gérer","Appareil inutilisé 9 mois sur 12","Stockage encombrant hors saison","Revente difficile","Amortissement long et incertain"].map(f=>(
                  <li key={f} style={{display:"flex",alignItems:"flex-start",gap:10,fontSize:14,color:"#94A3B8",lineHeight:1.5}}><span style={{fontWeight:800,flexShrink:0}}>✗</span>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="tarifs" style={{background:"linear-gradient(160deg,#07111F,#0F1F4A 60%,#1E3A8A 100%)",padding:"80px 24px"}}>
          <p className="section-label section-label-light">Tarifs professionnels</p>
          <h2 style={{textAlign:"center",fontSize:"clamp(26px,4vw,38px)",fontWeight:800,color:"#F0F6FF",letterSpacing:"-1.2px",marginBottom:52}}>Des forfaits taillés pour les pros</h2>
          <div style={{maxWidth:980,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
            {prices.map(({name,price,period,feats,featured})=>(
              <div key={name} className="price-card" style={featured?{background:"#fff",border:"none",boxShadow:"0 12px 48px rgba(0,0,0,0.4)"}:{}}>
                {featured&&<span style={{position:"absolute",top:-13,left:"50%",transform:"translateX(-50%)",background:"linear-gradient(135deg,#0EA5E9,#38BDF8)",color:"#0F172A",padding:"5px 16px",borderRadius:50,fontSize:11,fontWeight:800,whiteSpace:"nowrap" as const}}>⭐ Le plus demandé</span>}
                <div style={{fontSize:12,fontWeight:700,textTransform:"uppercase" as const,letterSpacing:"1.5px",color:featured?"#2563EB":"rgba(255,255,255,0.45)",marginBottom:10}}>{name}</div>
                <div style={{fontSize:44,fontWeight:800,lineHeight:1,color:featured?"#1E293B":"#F0F6FF",marginBottom:4,letterSpacing:"-2px"}}>{price}</div>
                <div style={{fontSize:14,color:featured?"#94A3B8":"rgba(255,255,255,0.4)",marginBottom:24}}>{period}</div>
                <ul style={{listStyle:"none"}}>{feats.map(f=><li key={f} style={{fontSize:14,padding:"8px 0",borderBottom:featured?"1px solid rgba(0,0,0,0.07)":"1px solid rgba(255,255,255,0.07)",display:"flex",alignItems:"center",gap:9,color:featured?"#475569":"rgba(255,255,255,0.7)"}}><span style={{color:featured?"#2563EB":"#38BDF8",fontWeight:800}}>✓</span> {f}</li>)}</ul>
                <a href="tel:0783800070" style={{display:"block",width:"100%",textAlign:"center" as const,marginTop:24,padding:"14px",borderRadius:50,fontWeight:700,fontSize:15,background:featured?"#1E293B":"rgba(255,255,255,0.08)",color:"#fff",border:featured?"none":"1px solid rgba(255,255,255,0.15)"}}>Nous appeler</a>
              </div>
            ))}
          </div>
          <p style={{textAlign:"center",marginTop:28,fontSize:14,color:"rgba(255,255,255,0.4)"}}>💼 Caution 150€ remboursable · Paiement sécurisé par Stripe · Plusieurs appareils sur devis</p>
        </section>

        {/* CTA FINAL */}
        <section style={{background:"#0D1117",padding:"80px 24px",textAlign:"center" as const,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,rgba(37,99,235,0.18),transparent 65%)",pointerEvents:"none"}}/>
          <h2 style={{color:"#F0F6FF",fontSize:"clamp(26px,4vw,38px)",fontWeight:800,letterSpacing:"-1.2px",marginBottom:12,position:"relative",zIndex:1}}>Votre activité mérite un air frais.</h2>
          <p style={{color:"rgba(255,255,255,0.45)",fontSize:17,marginBottom:40,position:"relative",zIndex:1,fontStyle:"italic"}}>Devis gratuit sous 1h — livraison sous 24h sur Orléans et ses alentours.</p>
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
