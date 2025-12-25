import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ContactForm from '../components/ContactForm';

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        
        {/* Pricing Teaser */}
        <section id="pricing" className="py-20 border-t border-slate-800">
          <div className="container mx-auto px-6 text-center">
             <h2 className="text-3xl font-bold mb-12">Planes Flexibles</h2>
             <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary transition-all">
                   <h3 className="text-xl font-bold mb-2">Startup</h3>
                   <p className="text-4xl font-bold mb-4">$29<span className="text-sm text-slate-500 font-normal">/mes</span></p>
                   <p className="text-slate-400 text-sm mb-6">Para pequeños negocios</p>
                   <ul className="text-left space-y-2 text-sm text-slate-300 mb-8">
                     <li>✓ 2 Usuarios</li>
                     <li>✓ Órdenes de trabajo</li>
                     <li>✓ Inventario básico</li>
                   </ul>
                   <a href="#contact" className="block w-full py-2 rounded-lg border border-slate-600 hover:bg-slate-800 transition-colors">Elegir</a>
                </div>
                <div className="p-8 rounded-2xl bg-slate-800 border-2 border-primary relative transform md:-translate-y-4">
                   <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Más Popular</span>
                   <h3 className="text-xl font-bold mb-2">Growth</h3>
                   <p className="text-4xl font-bold mb-4">$79<span className="text-sm text-slate-500 font-normal">/mes</span></p>
                   <p className="text-slate-400 text-sm mb-6">Para empresas en crecimiento</p>
                   <ul className="text-left space-y-2 text-sm text-slate-300 mb-8">
                     <li>✓ 10 Usuarios</li>
                     <li>✓ Todos los módulos</li>
                     <li>✓ API Access</li>
                   </ul>
                   <a href="#contact" className="block w-full py-2 rounded-lg bg-primary hover:bg-indigo-600 transition-colors">Elegir</a>
                </div>
                <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary transition-all">
                   <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                   <p className="text-4xl font-bold mb-4">Custom</p>
                   <p className="text-slate-400 text-sm mb-6">Para grandes operaciones</p>
                   <ul className="text-left space-y-2 text-sm text-slate-300 mb-8">
                     <li>✓ Usuarios Ilimitados</li>
                     <li>✓ Soporte Dedicado 24/7</li>
                     <li>✓ On-premise opción</li>
                   </ul>
                   <a href="#contact" className="block w-full py-2 rounded-lg border border-slate-600 hover:bg-slate-800 transition-colors">Contactar</a>
                </div>
             </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <footer className="py-8 border-t border-slate-800 bg-slate-950 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Nexwil ERP. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}