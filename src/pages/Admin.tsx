import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Lock, Loader2, LogOut, RefreshCw } from 'lucide-react';

interface Lead {
  id: string;
  created_at: string;
  name: string;
  email: string;
  message: string;
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Abc12345') {
      setIsAuthenticated(true);
      setError('');
      fetchLeads();
    } else {
      setError('Contraseña incorrecta');
    }
  };

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setLeads(data || []);
    } catch (err) {
      console.error(err);
      setError('Error al cargar los leads.');
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl w-full max-w-md shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
              <Lock className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white text-center mb-6">Acceso Administrativo</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Contraseña</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-indigo-600 text-white font-bold py-2 rounded-lg transition-colors"
            >
              Ingresar
            </button>
          </form>
          <div className="mt-4 text-center">
             <a href="/" className="text-sm text-slate-500 hover:text-white">← Volver al inicio</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <div>
             <h1 className="text-3xl font-bold">Panel de Leads</h1>
             <p className="text-slate-400">Visualiza las solicitudes de contacto recibidas.</p>
          </div>
          <div className="flex gap-4">
             <button 
               onClick={fetchLeads} 
               className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
               title="Recargar"
             >
               <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
             </button>
             <button 
               onClick={() => setIsAuthenticated(false)} 
               className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors"
             >
               <LogOut className="w-4 h-4" /> Salir
             </button>
          </div>
        </div>

        {loading && leads.length === 0 ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-800/50 border-b border-slate-700">
                    <th className="p-4 font-semibold text-slate-300">Fecha</th>
                    <th className="p-4 font-semibold text-slate-300">Nombre</th>
                    <th className="p-4 font-semibold text-slate-300">Email</th>
                    <th className="p-4 font-semibold text-slate-300">Mensaje</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 text-slate-400 whitespace-nowrap">
                        {new Date(lead.created_at).toLocaleDateString()} <span className="text-xs opacity-50">{new Date(lead.created_at).toLocaleTimeString()}</span>
                      </td>
                      <td className="p-4 font-medium text-white">{lead.name}</td>
                      <td className="p-4 text-primary hover:underline">
                        <a href={`mailto:${lead.email}`}>{lead.email}</a>
                      </td>
                      <td className="p-4 text-slate-400 max-w-md truncate" title={lead.message}>
                        {lead.message || <span className="italic text-slate-600">Sin mensaje</span>}
                      </td>
                    </tr>
                  ))}
                  {leads.length === 0 && (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-slate-500">
                        No hay registros disponibles aún.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}