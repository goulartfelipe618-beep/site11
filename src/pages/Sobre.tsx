import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Zap, Clock, Shield, Sparkles, Eye, Heart } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">Sobre Nós</span>
            <h1 className="text-4xl md:text-5xl text-foreground max-w-lg" style={{ fontFamily: 'Sora, sans-serif' }}>
              Redefinindo o <span className="text-primary">extraordinário</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel p-8 md:p-12 glow-accent">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-[1.8]">
                  A Aether Transfer nasceu da convicção de que mobilidade executiva pode ser uma experiência sensorial. Não apenas um deslocamento — uma extensão do seu estilo de vida.
                </p>
                <p className="text-muted-foreground leading-[1.8]">
                  Cada veículo é meticulosamente preparado. Cada motorista é selecionado pela excelência. Cada rota é planejada para oferecer fluidez e conforto absoluto.
                </p>
                <p className="text-muted-foreground leading-[1.8]">
                  De transfers aeroportuários a frotas para grandes eventos — a Aether entrega modernidade, exclusividade e a certeza de que cada detalhe foi pensado para você.
                </p>
              </div>

              <div className="lavender-line my-10 max-w-xs" />

              <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                {[
                  { icon: Zap, label: "Agilidade" },
                  { icon: Clock, label: "Pontualidade" },
                  { icon: Shield, label: "Segurança" },
                  { icon: Sparkles, label: "Exclusividade" },
                  { icon: Eye, label: "Atenção" },
                  { icon: Heart, label: "Cuidado" },
                ].map((d) => (
                  <div key={d.label} className="text-center">
                    <d.icon size={22} className="text-primary mx-auto mb-2" strokeWidth={1.5} />
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{d.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
