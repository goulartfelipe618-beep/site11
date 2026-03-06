import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GroupForm } from "@/components/GroupForm";
import { motion } from "framer-motion";
import { Heart, Users, Calendar, Plane } from "lucide-react";
import glassFleet from "@/assets/glass-fleet.jpg";
import glassSedan from "@/assets/glass-sedan.jpg";
import glassInterior from "@/assets/glass-interior.jpg";

const wishlist = [
  { icon: Calendar, title: "Eventos Corporativos", desc: "Frotas coordenadas para convenções, congressos e encontros de grande porte.", img: glassFleet },
  { icon: Heart, title: "Casamentos & Celebrações", desc: "Veículos decorados e serviço discreto para o dia mais importante.", img: glassSedan },
  { icon: Plane, title: "Transfers Aeroporto", desc: "Logística impecável para chegadas e partidas de grupos.", img: glassInterior },
];

const Grupos = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">Frota Exclusiva</span>
            <h1 className="text-4xl md:text-5xl text-foreground max-w-lg" style={{ fontFamily: 'Sora, sans-serif' }}>
              Sua lista de <span className="text-primary">desejos</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-md">
              Escolha o cenário perfeito. Nós cuidamos de cada detalhe da sua frota.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wishlist cards */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl space-y-8">
            {wishlist.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-panel overflow-hidden flex flex-col md:flex-row glow-accent"
              >
                <div className="md:w-2/5 flex-shrink-0">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover aspect-[4/3] md:aspect-auto" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <item.icon size={18} className="text-primary" />
                    <span className="text-xs tracking-widest uppercase text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="text-xl text-foreground font-semibold mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">Opções</span>
            <h2 className="text-3xl text-foreground mb-10" style={{ fontFamily: 'Sora, sans-serif' }}>
              Veículos <span className="text-primary">disponíveis</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
            {[
              { name: "Sedan Premium", pax: "1-3" },
              { name: "SUV Executivo", pax: "1-5" },
              { name: "Van VIP", pax: "6-14" },
              { name: "Micro-ônibus", pax: "15-40" },
            ].map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-5 text-center"
              >
                <Users size={22} className="text-primary mx-auto mb-3" />
                <p className="text-sm text-foreground font-semibold mb-1">{v.name}</p>
                <p className="text-xs text-muted-foreground">{v.pax} passageiros</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="cotacao" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <GroupForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grupos;
