import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const GroupForm = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "✨ Solicitação registrada", description: "Equipe entrará em contato em breve." });
    setStep(1);
  };

  const labelClass = "text-xs text-muted-foreground mb-2 block font-medium";

  return (
    <div className="glass-panel p-8 md:p-12 glow-accent">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Frota Exclusiva</span>
      </div>
      <h3 className="text-xl text-foreground font-semibold mb-8" style={{ fontFamily: 'Sora, sans-serif' }}>
        Solicitar Frota
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label className={labelClass}>Veículo</label>
                <select className="glass-input">
                  <option value="">Selecione</option>
                  <option value="sedan">Sedan Premium</option>
                  <option value="suv">SUV Executivo</option>
                  <option value="van">Van VIP</option>
                  <option value="onibus">Micro-ônibus</option>
                </select>
              </div>
              <div><label className={labelClass}>Passageiros</label><input type="number" min={1} placeholder="Nº" required className="glass-input" /></div>
            </div>
            <div><label className={labelClass}>Embarque</label><input placeholder="Endereço" required className="glass-input" /></div>
            <div><label className={labelClass}>Destino</label><input placeholder="Endereço" required className="glass-input" /></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label className={labelClass}>Data/Hora Ida</label><input type="datetime-local" required className="glass-input" /></div>
              <div><label className={labelClass}>Data/Hora Retorno</label><input type="datetime-local" className="glass-input" /></div>
            </div>
            <div><label className={labelClass}>Detalhes</label><textarea placeholder="Detalhes do evento ou viagem" rows={3} className="glass-input resize-none" /></div>
            <div className="pt-2"><button type="button" onClick={() => setStep(2)} className="glass-btn w-full">Próximo →</button></div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label className={labelClass}>Nome</label><input placeholder="Nome" required className="glass-input" /></div>
              <div><label className={labelClass}>E-mail</label><input type="email" placeholder="email" required className="glass-input" /></div>
              <div><label className={labelClass}>WhatsApp</label><input placeholder="(00) 00000-0000" required className="glass-input" /></div>
              <div><label className={labelClass}>Empresa</label><input placeholder="Opcional" className="glass-input" /></div>
            </div>
            <div className="pt-2 flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="glass-btn-outline flex-1">← Voltar</button>
              <button type="submit" className="glass-btn flex-1">Solicitar</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
