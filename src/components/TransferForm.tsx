import { useState } from "react";
import { toast } from "@/hooks/use-toast";

type TripType = "ida" | "ida-volta" | "hora";

export const TransferForm = () => {
  const [step, setStep] = useState(1);
  const [tripType, setTripType] = useState<TripType>("ida");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "✨ Solicitação enviada", description: "Nossa equipe entrará em contato em instantes." });
    setStep(1);
  };

  const labelClass = "text-xs text-muted-foreground mb-2 block font-medium";

  return (
    <div className="glass-panel p-8 md:p-12 glow-accent">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Cotação Rápida</span>
      </div>
      <h3 className="text-xl text-foreground font-semibold mb-8" style={{ fontFamily: 'Sora, sans-serif' }}>
        Solicitar Transfer
      </h3>

      <div className="flex gap-1 mb-8 p-1 glass-input" style={{ padding: '4px' }}>
        {([["ida", "Ida"], ["ida-volta", "Ida/Volta"], ["hora", "Por Hora"]] as const).map(
          ([val, label]) => (
            <button
              key={val}
              type="button"
              onClick={() => setTripType(val)}
              className={`flex-1 py-2.5 text-xs font-medium rounded-lg transition-all ${
                tripType === val
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          )
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div><label className={labelClass}>Passageiros</label><input type="number" min={1} placeholder="Nº" required className="glass-input" /></div>
              <div><label className={labelClass}>Data</label><input type="date" required className="glass-input" /></div>
              <div><label className={labelClass}>Hora</label><input type="time" required className="glass-input" /></div>
            </div>
            {tripType === "hora" && (
              <div><label className={labelClass}>Horas</label><input type="number" min={1} placeholder="Qtd" required className="glass-input" /></div>
            )}
            <div><label className={labelClass}>Embarque</label><input placeholder="Endereço de origem" required className="glass-input" /></div>
            <div><label className={labelClass}>Destino</label><input placeholder="Endereço de destino" required className="glass-input" /></div>
            {tripType === "ida-volta" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className={labelClass}>Data Retorno</label><input type="date" className="glass-input" /></div>
                <div><label className={labelClass}>Hora Retorno</label><input type="time" className="glass-input" /></div>
              </div>
            )}
            <div><label className={labelClass}>Observações</label><textarea placeholder="Instruções especiais" rows={2} className="glass-input resize-none" /></div>
            <div className="pt-2"><button type="button" onClick={() => setStep(2)} className="glass-btn w-full">Próximo →</button></div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label className={labelClass}>Nome</label><input placeholder="Nome completo" required className="glass-input" /></div>
              <div><label className={labelClass}>E-mail</label><input type="email" placeholder="seu@email.com" required className="glass-input" /></div>
              <div><label className={labelClass}>WhatsApp</label><input placeholder="(00) 00000-0000" required className="glass-input" /></div>
              <div><label className={labelClass}>Empresa</label><input placeholder="Opcional" className="glass-input" /></div>
            </div>
            <div className="pt-2 flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="glass-btn-outline flex-1">← Voltar</button>
              <button type="submit" className="glass-btn flex-1">Confirmar</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
