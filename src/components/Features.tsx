import { ClipboardList, Package, FileText, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: <ClipboardList className="w-8 h-8 text-blue-400" />,
    title: "Órdenes de Trabajo",
    description: "Asigna, rastrea y completa órdenes de servicio con flujos de trabajo personalizables."
  },
  {
    icon: <Package className="w-8 h-8 text-purple-400" />,
    title: "Inventarios",
    description: "Control de stock en tiempo real, múltiples almacenes y alertas de reabastecimiento."
  },
  {
    icon: <FileText className="w-8 h-8 text-pink-400" />,
    title: "Cotizaciones",
    description: "Crea cotizaciones profesionales en segundos y conviértelas en facturas con un clic."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-400" />,
    title: "Presupuestos y Finanzas",
    description: "Proyecta gastos, visualiza márgenes de ganancia y mantén tus finanzas saludables."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-yellow-400" />,
    title: "Seguridad Total",
    description: "Tus datos están encriptados y respaldados diariamente en la nube."
  },
  {
    icon: <Zap className="w-8 h-8 text-cyan-400" />,
    title: "Automatización",
    description: "Reduce tareas manuales conectando módulos y disparando acciones automáticas."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Todo lo que necesitas</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Una suite completa de herramientas diseñadas para escalar tu operación sin complicaciones.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-panel p-8 rounded-2xl hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-slate-800/80 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}