import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

export const InvitePopup = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 1.5 }}
        className="fixed inset-0 z-[60] flex items-center justify-center"
        style={{ background: 'hsla(240, 30%, 96%, 0.6)', backdropFilter: 'blur(8px)' }}
        onClick={() => setVisible(false)}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.7 }}
          className="glass-strong p-10 md:p-14 max-w-md mx-6 glow-accent relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles size={22} className="text-primary" />
            <span className="text-xs tracking-widest uppercase text-muted-foreground">Experiência Premium</span>
          </div>
          <h3 className="text-2xl text-foreground mb-3 font-semibold" style={{ fontFamily: 'Sora, sans-serif' }}>
            Aether Transfer
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            Exclusividade, agilidade e modernidade absoluta. Seu transfer redefinido em cada detalhe.
          </p>
          <button onClick={() => setVisible(false)} className="glass-btn w-full">
            Explorar
          </button>
          <button onClick={() => setVisible(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
            <X size={18} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
