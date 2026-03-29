import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

const Education = () => (
  <section className="bg-white dark:bg-slate-800 border dark:border-slate-700 p-6 rounded-2xl shadow-sm transition-colors">
    <h2 className="text-blue-600 dark:text-blue-400 font-bold uppercase text-xs mb-3">Education</h2>
    <h3 className="font-bold text-slate-900 dark:text-white">Lviv Polytechnic National University</h3>
    <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">2023 – 2027</p>
    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Cybersecurity</p>
  </section>
);

const Experience = () => (
  <section className="bg-white dark:bg-slate-800 border dark:border-slate-700 p-6 rounded-2xl shadow-sm transition-colors">
    <h2 className="text-blue-600 dark:text-blue-400 font-bold uppercase text-xs mb-4">Expirience</h2>
    <div className="space-y-4">
      <div>
        <h3 className="font-bold text-slate-900 dark:text-white">Database Architect</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">Relational Database Design.</p>
      </div>
      <div>
        <h3 className="font-bold text-slate-900 dark:text-white">Secure Network Design</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">Computer Network Architecture Design.</p>
      </div>
    </div>
  </section>
);

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (

    <div className={`${theme === 'dark' ? 'dark bg-slate-900' : 'bg-gray-50'} min-h-screen p-6 md:p-12 transition-colors duration-500`}>
      <div className="max-w-5xl mx-auto space-y-6">
 
        <header className={`${theme === 'dark' ? 'bg-slate-800' : 'bg-blue-600'} text-white p-8 rounded-3xl text-center shadow-lg relative transition-colors`}>
          <button 
            onClick={toggleTheme}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20 transition-all"
          >
            {theme === 'light' ? '☀️ Day Mode' : '🌙 Night Mode'}
          </button>

          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            Larysa Misiura
          </h1>
          <p className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-100'} mt-2 font-bold uppercase tracking-widest text-xs`}>
           Cybersecurity specialist
          </p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="md:col-span-1 space-y-6">

            <section className="bg-white dark:bg-slate-800 border dark:border-slate-700 p-6 rounded-2xl shadow-sm transition-colors">
              <h2 className="text-blue-600 dark:text-blue-400 font-bold uppercase text-xs mb-4">Contacts</h2>
              <div className="space-y-3 text-sm">
                <p className="flex justify-between border-b dark:border-slate-700 pb-1">
                  <span className="text-slate-500 dark:text-slate-400">Location:</span> 
                  <span className="font-bold text-slate-900 dark:text-white">Lviv, UA</span>
                </p>
                <div className="border-b dark:border-slate-700 pb-1">
                  <span className="text-slate-500 dark:text-slate-400 block">Email:</span>
                  <span className="font-bold text-slate-900 dark:text-white text-xs break-all">larysa.misiura.kb.2023@lpnu.ua</span>
                </div>
                <a 
                  href="https://linkedin.com/in/larysa-misiura" 
                  target="_blank" 
                  className="block w-full mt-2 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-center rounded-xl font-bold hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </section>

            <section className="bg-white dark:bg-slate-800 border dark:border-slate-700 p-6 rounded-2xl shadow-sm italic transition-colors">
              <h2 className="text-slate-400 font-bold uppercase text-xs mb-2">About me</h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Responsible and determined. I am committed to growing my expertise in the field of data protection.
              </p>
            </section>

            <Education />
          </div>

          <div className="md:col-span-2 space-y-6">

            <section className="bg-white dark:bg-slate-800 border dark:border-slate-700 p-6 rounded-2xl shadow-sm transition-colors">
              <h2 className="text-blue-600 dark:text-blue-400 font-bold uppercase text-xs mb-4">Hard Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['C#, Python', 'Cybersecurity & Encryption', 'Cisco Packet Tracer', 'MySQL', 'English (Intermediate)'].map(skill => (
                  <span key={skill} className="bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-lg text-xs font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="bg-white dark:bg-slate-800 border dark:border-slate-700 p-6 rounded-2xl shadow-sm transition-colors">
              <h2 className="text-blue-600 dark:text-blue-400 font-bold uppercase text-xs mb-4">Soft Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['Team-oriented', 'Time management', 'Creative', 'Discipline'].map(skill => (
                  <span key={skill} className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <Experience />
            <Reviews theme={theme} />
          </div>
        </main>

        <Footer theme={theme} />
        <ContactForm theme={theme} />
      </div>
    </div>
  );
}

export default App;