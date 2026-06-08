
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Auditoría IA Ready | Chris Orea',
}

export default function IaReadyPage() {
  return (
    <>
      <style>
        {`
          body { font-family: 'Inter', sans-serif; scroll-behavior: smooth; }
          .glass { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); }
          .glow-blue:hover { box-shadow: 0 0 25px rgba(59, 130, 246, 0.3); }
          .form-container { border: 8px solid rgba(255, 255, 255, 0.05); }
          .sticky-nav { backdrop-filter: blur(15px); background: rgba(2, 6, 23, 0.8); }
        `}
      </style>
      <div className="bg-slate-950 text-slate-200 selection:bg-blue-500/30">

        <nav className="sticky top-0 z-50 sticky-nav border-b border-slate-900">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold tracking-tighter text-white">IA READY<span className="text-blue-500 text-2xl">.</span></div>
                <a href="#waitlist" className="hidden sm:block px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg transition-all">
                    Únete a la lista de espera
                </a>
            </div>
        </nav>

        <header className="container mx-auto px-6 pt-20 pb-24 text-center">
            <div className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-orange-400 uppercase bg-orange-500/10 rounded-full border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
                🔥 Solo 10 lugares disponibles para el piloto de Q2
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                Reduce un <span className="text-blue-500">40%</span> el ciclo de <br className="hidden md:block" /> despliegue de tus agentes.
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
                Diagnosticamos tu infraestructura <span className="text-white font-semibold italic">Model Context Protocol</span> (MCP) y entregamos un <span className="text-white font-semibold">Data Shield</span> funcional en 7 días. Innovación agéntica sin fricción legal.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#waitlist" className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20 text-lg">
                    Reservar Diagnóstico Express
                </a>
            </div>
        </header>

        <section className="container mx-auto px-6 py-16 border-y border-slate-900 bg-slate-900/20">
            <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-xs uppercase tracking-[0.3em] text-blue-500 font-black mb-4">Liderazgo Técnico</h2>
                        <p className="text-2xl font-bold text-white mb-6">Metodología de grado industrial validada globalmente.</p>
                        <ul className="space-y-4 text-slate-400">
                          <li className="flex items-start">
                              <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                              <span>Experiencia en despliegues críticos en <span className="text-white font-semibold">Japón, EE. UU. y LATAM</span>.</span>
                          </li>
                          <li className="flex items-start">
                              <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                              <span>Citado en <span className="text-white font-semibold">Springer Nature</span> por investigación en IA aplicada.</span>
                          </li>
                          <li className="flex items-start">
                              <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                              <span>Primer <span className="text-white font-semibold">Databricks Certified ML Professional</span> en el Sureste de México.</span>
                          </li>
                          <li className="flex items-start">
                              <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                              <span>Senior ML Engineer en <span className="text-white font-semibold">EY</span> y Fundador de Consultor-IA.</span>
                          </li>
                        </ul>
                    </div>
                    <div className="glass p-8 rounded-3xl border-blue-500/10">
                        <p className="text-blue-400 font-bold mb-2">Caso de Impacto:</p>
                        <p className="text-white text-lg font-medium leading-relaxed italic">
                            "El costo de un equipo de 3 desarrolladores bloqueado por accesos legales es de ~$12k USD/mes. El Data Shield elimina ese costo desde el día 1."
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="glass p-8 rounded-3xl glow-blue transition-all">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zM9 12l2 2 4-4"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Ontologías de Datos</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">Estructuramos el conocimiento de tu negocio para eliminar las alucinaciones en tus sistemas multi-agente.</p>
                    </div>
                    <div className="glass p-8 rounded-3xl glow-blue transition-all">
                        <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Infraestructura MCP</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">Implementación de servidores de contexto estandarizados para una conexión fluida entre LLMs y tus repositorios.</p>
                    </div>
                    <div className="glass p-8 rounded-3xl glow-blue transition-all">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04kM12 21a8.966 8.966 0 01-5.982-2.275"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Data Shield Prototipo</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">Gemelo sintético con preservación estadística. Prueba tus arquitecturas sin exponer datos sensibles (PII).</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="waitlist" className="container mx-auto px-6 py-24 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Solicita Acceso al Programa Piloto</h2>
                <p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto">
                    Para mantener la rigurosidad técnica, <span className="text-white font-bold underline decoration-blue-500">solo seleccionaremos 10 proyectos</span> este trimestre para una revisión manual de arquitectura.
                </p>
                
                <div className="form-container rounded-[2.5rem] overflow-hidden bg-white shadow-[0_0_50px_rgba(59,130,246,0.15)]">
                    <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfJe8N8SMLtL_ErUQlH1ZXwuwcrd9z1Qqudx6nib2CXyiD6Xw/viewform?embedded=true" 
                        width="100%" 
                        height="1000" 
                        frameBorder="0" 
                        marginHeight="0" 
                        marginWidth="0"
                        className="w-full">
                        Cargando…
                    </iframe>
                </div>
                
                <div className="mt-12 inline-flex items-center space-x-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span>Inscripciones abiertas hasta agotar cupos</span>
                </div>
            </div>
        </section>

        <footer className="container mx-auto px-6 py-12 border-t border-slate-900 text-center text-slate-500 text-sm">
            <p>&copy; 2026 Chris Orea. Auditoría IA Ready & Data Shield Strategy. Agentic MLOps.</p>
        </footer>

      </div>
    </>
  )
}
