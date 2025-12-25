import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Loader2, Send } from 'lucide-react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: dbError } = await supabase
        .from('leads')
        .insert([{ ...formData }]);

      if (dbError) throw dbError;

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setError('Hubo un error al enviar tu mensaje. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Empieza tu transformación digital hoy</h2>
              <p className="text-slate-400 mb-8">
                Déjanos tus datos y un especialista te contactará para mostrarte cómo Nexwil ERP puede optimizar tu negocio.
              </p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Demo personalizada de 30 min
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  Acceso completo al trial por 14 días
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Sin compromiso de compra
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              {success ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-slate-400">Gracias por tu interés. Nos pondremos en contacto contigo pronto.</p>
                  <button 
                    onClick={() => setSuccess(false)} 
                    className="mt-6 text-primary hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Nombre Completo</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                      placeholder="Juan Pérez"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Correo Electrónico</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                      placeholder="juan@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Mensaje (Opcional)</label>
                    <textarea 
                      rows={3}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                      placeholder="Me gustaría saber más sobre el módulo de inventarios..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  
                  {error && <p className="text-red-400 text-sm">{error}</p>}

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Solicitar Acceso'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}