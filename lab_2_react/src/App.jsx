import React from 'react';

const Education = () => (
  <section className="bg-white border p-6 rounded-2xl shadow-sm">
    <h2 className="text-blue-600 font-bold uppercase text-xs mb-3">Education</h2>
    <h3 className="font-bold text-slate-900">Lviv Polytechnic National University</h3>
    <p className="text-sm text-blue-600 font-semibold">2023 – 2027</p>
    <p className="text-sm text-slate-600 mt-1">Cybersecurity</p>
  </section>
);

const Experience = () => (
  <section className="bg-white border p-6 rounded-2xl shadow-sm">
    <h2 className="text-blue-600 font-bold uppercase text-xs mb-4">Expirience</h2>
    <div className="space-y-4">
      <div>
        <h3 className="font-bold text-slate-900">Database Architect</h3>
        <p className="text-sm text-slate-600">Relational Database Design.</p>
      </div>
      <div>
        <h3 className="font-bold text-slate-900">Secure Network Design</h3>
        <p className="text-sm text-slate-600">Computer Network Architecture Design.</p>
      </div>
    </div>
  </section>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-6">
 
        <header className="bg-blue-600 text-white p-8 rounded-3xl text-center shadow-lg">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Larysa Misiura
          </h1>
          <p className="mt-2 text-blue-100 font-bold uppercase tracking-widest text-xs">
           Cybersecurity specialist
          </p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="md:col-span-1 space-y-6">

            <section className="bg-white border p-6 rounded-2xl shadow-sm">
              <h2 className="text-blue-600 font-bold uppercase text-xs mb-4">Contacts</h2>
              <div className="space-y-3 text-sm">
                <p className="flex justify-between border-b pb-1">
                  <span className="text-slate-500">Location:</span> 
                  <span className="font-bold text-slate-900">Lviv, UA</span>
                </p>
                <div className="border-b pb-1">
                  <span className="text-slate-500 block">Email:</span>
                  <span className="font-bold text-slate-900 text-xs break-all">larysa.misiura.kb.2023@lpnu.ua</span>
                </div>
                <a 
                  href="https://linkedin.com/in/larysa-misiura" 
                  target="_blank" 
                  className="block w-full mt-2 py-2 bg-blue-50 text-blue-600 text-center rounded-xl font-bold hover:bg-blue-100 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </section>

            <section className="bg-white border p-6 rounded-2xl shadow-sm italic">
              <h2 className="text-slate-400 font-bold uppercase text-xs mb-2">About me</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Responsible and determined. I am committed to growing my expertise in the field of data protection.
              </p>
            </section>

            <Education />
          </div>

          <div className="md:col-span-2 space-y-6">

            <section className="bg-white border p-6 rounded-2xl shadow-sm">
              <h2 className="text-blue-600 font-bold uppercase text-xs mb-4">Hard Skills</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-semibold">C#, Python</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-semibold">Cybersecurity & Encryption</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-semibold">Cisco Packet Tracer</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-semibold">MySQL</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-semibold">English (Intermediate)</span>
              </div>
            </section>

            <section className="bg-white border p-6 rounded-2xl shadow-sm">
              <h2 className="text-blue-600 font-bold uppercase text-xs mb-4">Soft Skills</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold">Team-oriented</span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold">Time management</span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold">Creative</span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold">Discipline</span>
              </div>
            </section>

            <Experience />
          </div>
        </main>

        <footer className="py-8 text-center border-t border-gray-200">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            • 2026 • Larysa Misiura •
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;