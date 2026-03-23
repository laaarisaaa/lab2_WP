import React from 'react'

const Experience = () => (
  <section className="group bg-slate-900/60 backdrop-blur-xl border border-blue-500/20 p-8 rounded-[2.5rem] shadow-2xl hover:border-blue-400/50 transition-all duration-500 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
    <h2 className="text-xs font-black tracking-[0.3em] text-blue-400 mb-8 uppercase flex items-center gap-3">
      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> Work Experience
    </h2>
    <div className="space-y-8">
      {[
        { title: "Database Architect & Developer", desc: "Проектування реляційних баз даних." },
        { title: "Secure Network Design", desc: "Розробка архітектури комп'ютерних мереж." }
      ].map((item, i) => (
        <div key={i} className="relative pl-6 border-l-2 border-slate-700 group-hover:border-blue-500/50 transition-colors">
          <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#020617] border-2 border-blue-500 rounded-full"></div>
          <h3 className="font-bold text-xl text-white group-hover:text-blue-300 transition-colors">{item.title}</h3>
          <p className="text-slate-400 mt-2 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Education = () => (
  <section className="bg-gradient-to-br from-indigo-900/40 to-slate-900/60 backdrop-blur-xl border border-indigo-500/20 p-8 rounded-[2.5rem] hover:scale-[1.03] transition-all duration-500">
    <h2 className="text-xs font-black tracking-[0.3em] text-indigo-400 mb-6 uppercase">Освіта</h2>
    <div className="space-y-2">
      <h3 className="font-bold text-white text-xl">Львівська політехніка</h3>
      <p className="text-indigo-400 font-bold italic">2023 – 2027</p>
      <p className="text-slate-300 mt-2">Спеціальність: Кібербезпека</p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="mt-16 py-8 text-center border-t border-white/5">
    <p className="text-slate-500 text-[10px] tracking-[0.5em] font-black uppercase italic">
     • 2026 • Лариса Місюра
    </p>
  </footer>
);

function App() {
  const hardSkills = ['Python', 'C#', 'Cybersecurity', 'Encryption', 'Cisco Packet Tracer', 'MySQL'];
  const softSkills = ['Team-oriented', 'Time management', 'Creative', 'Discipline'];

  return (
    <div className="min-h-screen p-6 md:p-12 lg:p-20 selection:bg-blue-500/30">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* INTERACTIVE HEADER */}
        <header className="relative group cursor-default">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-slate-900/80 border border-white/10 p-10 rounded-[3rem] backdrop-blur-2xl shadow-2xl">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white transition-all group-hover:tracking-normal">
              Лариса <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Місюра</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-4 mt-6">
              <span className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase">
                Фахівець із кібербезпеки
              </span>
              <span className="text-slate-500 hidden md:block">|</span>
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-4 space-y-10">
            <section className="bg-linear-to-br from-blue-600 to-indigo-700 p-10 rounded-[3rem] shadow-2xl shadow-blue-900/20 text-white relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              {/* Виправлено заголовок та назву секції */}
              <h2 className="text-[10px] font-black tracking-[0.4em] uppercase mb-8 opacity-60">Contacts</h2>
              <div className="space-y-4 relative z-10">
                <p className="flex justify-between items-center border-b border-white/10 pb-2">
                   <span className="opacity-70">Location</span> <span className="font-bold">Lviv, UA</span>
                </p>
                {/* Додано пошту замість статусу */}
                <p className="flex flex-col border-b border-white/10 pb-2">
                   <span className="opacity-70 text-xs">Email</span> 
                   <span className="font-bold text-sm truncate">larysa.misiura.kb.2023@lpnu.ua</span>
                </p>
                {/* Робоча кнопка LinkedIn */}
                <a 
                  href="https://linkedin.com/in/larysa-misiura" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full mt-4 py-3 bg-white/10 hover:bg-white/20 rounded-2xl border border-white/20 transition-all font-bold text-sm text-center"
                >
                  View LinkedIn Profile
                </a>
              </div>
            </section>

            <section className="bg-slate-900/40 p-10 rounded-[3rem] border border-slate-800 hover:border-blue-500/30 transition-all group">
              <h2 className="text-xs font-black tracking-widest text-slate-500 uppercase mb-6 group-hover:text-blue-400 transition-colors italic">About me</h2>
              <p className="text-slate-400 leading-relaxed text-lg font-light">
                Відповідальна та наполеглива. Прагну розвиватися у сфері захисту даних.
              </p>
            </section>

            <Education />
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* HARD SKILLS WITH NEON EFFECT */}
            <section className="bg-slate-900/40 p-10 rounded-[3rem] border border-slate-800">
              <h2 className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-blue-500"></span> Hard Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {hardSkills.map(skill => (
                  <div key={skill} className="px-6 py-2 rounded-2xl bg-blue-950/30 text-blue-300 border border-blue-500/20 hover:bg-blue-600 hover:text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 cursor-pointer font-bold text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            {/* SOFT SKILLS */}
            <section className="bg-slate-900/40 p-10 rounded-[3rem] border border-slate-800">
              <h2 className="text-xs font-black tracking-[0.3em] text-indigo-500 uppercase mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-indigo-500"></span> Soft Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {softSkills.map(skill => (
                  <div key={skill} className="px-5 py-2 rounded-xl bg-slate-800/50 text-slate-400 border border-slate-700 hover:border-indigo-500 hover:text-indigo-300 transition-all text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            <Experience />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App