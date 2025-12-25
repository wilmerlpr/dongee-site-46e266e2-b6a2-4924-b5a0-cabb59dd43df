import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Gestiona tu empresa <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              sin límites.
            </span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-lg">
            La solución integral para órdenes de trabajo, inventarios, cotizaciones y presupuestos. Todo en la nube, todo en tiempo real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="group bg-white text-slate-900 px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
              Solicitar Demo 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#features" className="border border-slate-600 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center hover:bg-slate-800 transition-colors">
              Ver Módulos
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary"/> Sin tarjeta requerida</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary"/> Setup instantáneo</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 bg-slate-800 rounded-xl p-2 shadow-2xl border border-slate-700 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
             <img 
               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Dashboard Preview" 
               className="rounded-lg w-full object-cover"
             />
             <div className="absolute -bottom-6 -left-6 bg-slate-900 p-4 rounded-lg border border-slate-700 shadow-xl">
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-sm font-mono">Sistema Operativo</span>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}