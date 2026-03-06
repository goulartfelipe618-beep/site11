import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TransferForm } from "@/components/TransferForm";
import { motion } from "framer-motion";
import { Zap, Clock, Shield, Sparkles } from "lucide-react";
import glassSedan from "@/assets/glass-sedan.jpg";
import glassInterior from "@/assets/glass-interior.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={glassSedan} alt="Sedan premium em ambiente luminoso" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, hsla(240,30%,96%,0.3) 0%, hsla(240,30%,96%,0.7) 50%, hsla(240,30%,96%,0.95) 100%)' }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative container mx-auto px-6"
        >
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-panel inline-flex items-center gap-2 px-4 py-2 mb-8"
            >
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs text-muted-foreground font-medium">Experiência Premium</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 text-foreground" style={{ fontFamily: 'Sora, sans-serif' }}>
              Exclusividade<br />
              em cada<br />
              <span className="text-primary">movimento</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-md">
              Agilidade, modernidade e sofisticação. Um transfer que transcende o ordinário.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#cotacao" className="glass-btn inline-block">
                Solicitar Cotação
              </a>
              <a href="#frota" className="glass-btn-outline inline-block">
                Conhecer Frota
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            {[
              { icon: Zap, title: "Agilidade", desc: "Resposta imediata a cada solicitação" },
              { icon: Clock, title: "Pontualidade", desc: "Compromisso absoluto com horários" },
              { icon: Shield, title: "Segurança", desc: "Veículos monitorados em tempo real" },
              { icon: Sparkles, title: "Exclusividade", desc: "Experiência personalizada e única" },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 text-center glow-accent"
              >
                <f.icon size={28} className="text-primary mx-auto mb-4" strokeWidth={1.5} />
                <p className="text-sm text-foreground font-semibold mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>{f.title}</p>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section id="frota" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">Nossa Frota</span>
            <h2 className="text-3xl md:text-4xl text-foreground mb-12" style={{ fontFamily: 'Sora, sans-serif' }}>
              Veículos que <span className="text-primary">encantam</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel overflow-hidden glow-accent">
              <img src={glassSedan} alt="Sedan premium" className="w-full aspect-[16/10] object-cover" />
              <div className="p-6">
                <h3 className="text-lg text-foreground font-semibold mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Sedan Premium</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Conforto e elegância em cada detalhe. Interior em couro, climatização perfeita e silêncio absoluto.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-panel overflow-hidden glow-accent">
              <img src={glassInterior} alt="Interior luxuoso" className="w-full aspect-[16/10] object-cover" />
              <div className="p-6">
                <h3 className="text-lg text-foreground font-semibold mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Interior de Exceção</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Iluminação ambiente, bancos aquecidos e conectividade total. Uma experiência sensorial completa.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="cotacao" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <TransferForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
