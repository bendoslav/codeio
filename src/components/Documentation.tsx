import React, { useState } from 'react';
import { 
  Squares2X2Icon,
  SparklesIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  CloudIcon,
  RocketLaunchIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <div className="bg-[#0A0A0A] min-h-screen relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-3 group">
              <div className="relative p-2 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10
                            border border-white/10 group-hover:border-blue-500/30 transition-all duration-300">
                <Squares2X2Icon className="w-5 h-5 text-blue-400 group-hover:rotate-180 transition-transform duration-500" />
                <div className="absolute inset-0 bg-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 
                              blur transition-opacity duration-300" />
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                CodeIO | Dokumentace
              </span>
            </div>
            
            <div className="flex items-center gap-1 bg-white/5 rounded-xl p-1 border border-white/10">
              {['intro', 'quick-start', 'features', 'news'].map((section) => (
                <button 
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`relative px-4 py-1.5 text-sm rounded-lg transition-all duration-300
                            ${activeSection === section 
                              ? 'text-white bg-white/10' 
                              : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                  <div className="flex items-center gap-2">
                    {activeSection === section && (
                      <SparklesIcon className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                    )}
                    <span>{section.replace('-', ' ')}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="relative pt-24 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="mb-16 space-y-6">
            <div className="flex items-center gap-3 mb-6 animate-fade-in" style={{ '--delay': '0s' } as any}>
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <RocketLaunchIcon className="w-6 h-6 text-blue-400 animate-hover" />
              </div>
              <span className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                           text-blue-400 text-sm rounded-full border border-blue-500/20">
                Verze 2.0 Beta
              </span>
              <span className="px-3 py-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 
                           text-green-400 text-sm rounded-full border border-green-500/20 animate-pulse">
                Online
              </span>
            </div>
            
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-white to-white/50 
                         bg-clip-text text-transparent animate-gradient">
              Úvod do světa CodeIO
            </h1>
            <p className="text-xl text-blue-400 mb-8 animate-fade-in" style={{ '--delay': '0.2s' } as any}>
              Nová generace vývojového prostředí s umělou inteligencí
            </p>
            <p className="text-gray-300 text-lg max-w-3xl animate-fade-in" style={{ '--delay': '0.3s' } as any}>
              CodeIO přináší revoluci ve způsobu, jakým píšete kód. S integrovanou AI asistencí, 
              real-time spoluprací a pokročilými nástroji pro debugging vám pomůže psát lepší kód rychleji 
              než kdy předtím.
            </p>

            <div className="flex gap-4 pt-8 animate-fade-in" style={{ '--delay': '0.4s' } as any}>
              <button className="group px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg 
                               transition-all duration-300 flex items-center gap-2">
                <BoltIcon className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                Začít zdarma
              </button>
              <button className="group px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg 
                               transition-all duration-300 flex items-center gap-2 border border-white/10
                               hover:border-white/20">
                <CodeBracketIcon className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                Prozkoumat kód
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-6 mb-16">
            <div className="group bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/30 
                          transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <CodeBracketIcon className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  AI Asistent
                </h3>
              </div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Inteligentní návrhy kódu, automatické dokončování a refaktoring v reálném čase.
              </p>
            </div>

            <div className="group bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/30 
                          transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <CommandLineIcon className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                  Live Coding
                </h3>
              </div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Spolupracujte v reálném čase s ostatními vývojáři na stejném projektu.
              </p>
            </div>

            <div className="group bg-white/5 rounded-xl p-6 border border-white/10 hover:border-amber-500/30 
                          transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <CpuChipIcon className="w-6 h-6 text-amber-400" />
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                  Smart Debug
                </h3>
              </div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Pokročilé debugování s AI analýzou a automatickou detekcí chyb.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-32">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400">Aktivních uživatelů</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-400">Podporovaných jazyků</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">AI podpora</div>
            </div>
          </div>

          {/* Quick Start Section */}
          <div className="mb-32">
            <div className="flex items-center gap-3 mb-8">
              <BoltIcon className="w-8 h-8 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">Rychlý start</h2>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="group bg-white/5 rounded-xl p-6 border border-white/10 
                            hover:border-yellow-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-yellow-500/10 
                                text-yellow-400 font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 
                               transition-colors">
                    Instalace
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Nainstalujte CodeIO pomocí npm nebo yarn:
                </p>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center justify-between text-gray-300">
                    <span>npm install @codeio/editor</span>
                    <button className="text-gray-500 hover:text-white transition-colors">
                      Kopírovat
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group bg-white/5 rounded-xl p-6 border border-white/10 
                            hover:border-yellow-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-yellow-500/10 
                                text-yellow-400 font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 
                               transition-colors">
                    Konfigurace
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Vytvořte konfigurační soubor codeio.config.js:
                </p>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                  <pre className="text-gray-300">
{`module.exports = {
  theme: 'dark',
  language: 'javascript',
  plugins: ['ai-assist', 'live-collab'],
  autosave: true
}`}
                  </pre>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group bg-white/5 rounded-xl p-6 border border-white/10 
                            hover:border-yellow-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-yellow-500/10 
                                text-yellow-400 font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 
                               transition-colors">
                    Implementace
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Přidejte CodeIO do vašeho projektu:
                </p>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                  <pre className="text-gray-300">
{`import { CodeIO } from '@codeio/editor';

function App() {
  return (
    <CodeIO
      theme="dark"
      language="javascript"
      value={code}
      onChange={handleChange}
    />
  );
}`}
                  </pre>
                </div>
              </div>

              {/* Tips */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 
                              rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Pro tip</h4>
                  <p className="text-gray-400">
                    Použijte příkaz <span className="text-yellow-400">codeio init</span> pro 
                    automatické nastavení projektu s předpřipravenými šablonami.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 
                              rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Dokumentace</h4>
                  <p className="text-gray-400">
                    Kompletní API dokumentaci najdete na{' '}
                    <a href="#" className="text-yellow-400 hover:underline">
                      docs.codeio.dev
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-32">
            <div className="flex items-center gap-3 mb-12">
              <SparklesIcon className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold text-white">Funkce a možnosti</h2>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* AI Features */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6">Umělá inteligence</h3>
                <div className="space-y-4">
                  <div className="group bg-white/5 rounded-xl p-5 border border-white/10 
                                hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <CodeBracketIcon className="w-5 h-5 text-purple-400" />
                      <h4 className="text-lg font-medium text-white">Inteligentní dokončování</h4>
                    </div>
                    <p className="text-gray-400">Prediktivní návrhy kódu založené na kontextu a best practices.</p>
                  </div>

                  <div className="group bg-white/5 rounded-xl p-5 border border-white/10 
                                hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <CloudIcon className="w-5 h-5 text-purple-400" />
                      <h4 className="text-lg font-medium text-white">AI Code Review</h4>
                    </div>
                    <p className="text-gray-400">Automatická kontrola kódu a návrhy na vylepšení v reálném čase.</p>
                  </div>

                  <div className="group bg-white/5 rounded-xl p-5 border border-white/10 
                                hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <BoltIcon className="w-5 h-5 text-purple-400" />
                      <h4 className="text-lg font-medium text-white">Smart Refactoring</h4>
                    </div>
                    <p className="text-gray-400">Inteligentní návrhy na přepisování a optimalizaci kódu.</p>
                  </div>
                </div>
              </div>

              {/* Collaboration Features */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6">Spolupráce</h3>
                <div className="space-y-4">
                  <div className="group bg-white/5 rounded-xl p-5 border border-white/10 
                                hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <CommandLineIcon className="w-5 h-5 text-blue-400" />
                      <h4 className="text-lg font-medium text-white">Real-time kolaborace</h4>
                    </div>
                    <p className="text-gray-400">Současná práce více vývojářů na jednom projektu.</p>
                  </div>

                  <div className="group bg-white/5 rounded-xl p-5 border border-white/10 
                                hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <CpuChipIcon className="w-5 h-5 text-blue-400" />
                      <h4 className="text-lg font-medium text-white">Verzování</h4>
                    </div>
                    <p className="text-gray-400">Integrované verzování s Git a automatické zálohy.</p>
                  </div>

                  <div className="group bg-white/5 rounded-xl p-5 border border-white/10 
                                hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <RocketLaunchIcon className="w-5 h-5 text-blue-400" />
                      <h4 className="text-lg font-medium text-white">Code Sharing</h4>
                    </div>
                    <p className="text-gray-400">Snadné sdílení kódu a projektů s týmem.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Comparison - vylepšený design */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-white mb-8">Srovnání verzí</h3>
              
              <div className="grid grid-cols-3 gap-6">
                {/* Free Plan */}
                <div className="group bg-white/5 rounded-xl border border-white/10 overflow-hidden
                              hover:border-blue-500/30 transition-all duration-300">
                  <div className="p-6 border-b border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                    <h4 className="text-xl font-semibold text-white mb-2">Free</h4>
                    <p className="text-gray-400">Pro jednotlivce a malé projekty</p>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-white">$0</span>
                      <span className="text-gray-400">/měsíc</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <SparklesIcon className="w-5 h-5 text-blue-400" />
                      <span>Základní AI asistent</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CodeBracketIcon className="w-5 h-5 text-blue-400" />
                      <span>Neomezené soukromé projekty</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CloudIcon className="w-5 h-5 text-blue-400" />
                      <span>500 MB úložiště</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 line-through">
                      <CommandLineIcon className="w-5 h-5" />
                      <span>Real-time kolaborace</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 line-through">
                      <CpuChipIcon className="w-5 h-5" />
                      <span>Smart Debug</span>
                    </div>
                  </div>
                  <div className="p-6 border-t border-white/10">
                    <button className="w-full py-2 px-4 rounded-lg bg-white/5 text-white 
                                     hover:bg-white/10 transition-colors">
                      Začít zdarma
                    </button>
                  </div>
                </div>

                {/* Pro Plan */}
                <div className="group bg-white/5 rounded-xl border border-purple-500/30 overflow-hidden
                              hover:border-purple-500/50 transition-all duration-300 relative">
                  <div className="absolute top-0 right-0 bg-purple-500 text-white text-sm px-3 py-1 
                                rounded-bl-lg font-medium">
                    Populární
                  </div>
                  <div className="p-6 border-b border-white/10 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                    <h4 className="text-xl font-semibold text-white mb-2">Pro</h4>
                    <p className="text-gray-400">Pro profesionální vývojáře</p>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-white">$19</span>
                      <span className="text-gray-400">/měsíc</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <SparklesIcon className="w-5 h-5 text-purple-400" />
                      <span>Pokročilý AI asistent</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CodeBracketIcon className="w-5 h-5 text-purple-400" />
                      <span>Neomezené projekty</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CloudIcon className="w-5 h-5 text-purple-400" />
                      <span>10 GB úložiště</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CommandLineIcon className="w-5 h-5 text-purple-400" />
                      <span>Real-time kolaborace</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CpuChipIcon className="w-5 h-5 text-purple-400" />
                      <span>Smart Debug</span>
                    </div>
                  </div>
                  <div className="p-6 border-t border-white/10">
                    <button className="w-full py-2 px-4 rounded-lg bg-purple-500 text-white 
                                     hover:bg-purple-600 transition-colors">
                      Vyzkoušet Pro
                    </button>
                  </div>
                </div>

                {/* Enterprise Plan */}
                <div className="group bg-white/5 rounded-xl border border-white/10 overflow-hidden
                              hover:border-amber-500/30 transition-all duration-300">
                  <div className="p-6 border-b border-white/10 bg-gradient-to-r from-amber-500/10 to-orange-500/10">
                    <h4 className="text-xl font-semibold text-white mb-2">Enterprise</h4>
                    <p className="text-gray-400">Pro velké týmy a organizace</p>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-white">Individuální</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <SparklesIcon className="w-5 h-5 text-amber-400" />
                      <span>Vlastní AI model</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CodeBracketIcon className="w-5 h-5 text-amber-400" />
                      <span>Neomezené vše</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CloudIcon className="w-5 h-5 text-amber-400" />
                      <span>Vlastní úložiště</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CommandLineIcon className="w-5 h-5 text-amber-400" />
                      <span>Prioritní podpora 24/7</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CpuChipIcon className="w-5 h-5 text-amber-400" />
                      <span>SLA garantované</span>
                    </div>
                  </div>
                  <div className="p-6 border-t border-white/10">
                    <button className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 
                                     text-white hover:from-amber-600 hover:to-orange-600 transition-colors">
                      Kontaktovat nás
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* News Section */}
          <div className="mt-32 mb-32">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <RocketLaunchIcon className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Novinky a aktualizace</h2>
              </div>
              <button className="px-4 py-2 bg-white/5 text-white rounded-lg hover:bg-white/10 
                                 transition-colors border border-white/10 flex items-center gap-2">
                <span>Všechny novinky</span>
                <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">12</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* Latest Update */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 
                            border border-green-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">Nové</span>
                  <span className="text-gray-400">21. března 2024</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Vydána verze 2.0 Beta
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Představujeme největší aktualizaci CodeIO v historii. Nová verze přináší kompletně 
                  přepracované AI jádro, vylepšenou real-time kolaboraci a mnoho dalších novinek.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-black/20 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Vylepšené AI</h4>
                    <p className="text-gray-400">Nový AI model s podporou více programovacích jazyků a kontextovým učením.</p>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Real-time kolaborace</h4>
                    <p className="text-gray-400">Vylepšená synchronizace a podpora pro více uživatelů současně.</p>
                  </div>
                </div>
                <a href="#" className="text-green-400 hover:text-green-300 transition-colors inline-flex items-center gap-2">
                  Přečíst více
                  <span className="text-lg">→</span>
                </a>
              </div>

              {/* Previous Updates */}
              <div className="grid grid-cols-2 gap-6">
                <div className="group bg-white/5 rounded-xl p-6 border border-white/10 
                              hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-gray-400">15. března 2024</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 
                               transition-colors">
                    Nové rozšíření pro VS Code
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Vydali jsme oficiální rozšíření pro Visual Studio Code, které přináší všechny 
                    funkce CodeIO přímo do vašeho oblíbeného editoru.
                  </p>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2">
                    Více informací
                    <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>

                <div className="group bg-white/5 rounded-xl p-6 border border-white/10 
                              hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-gray-400">1. března 2024</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 
                               transition-colors">
                    Vylepšení výkonu
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Optimalizovali jsme výkon editoru pro velké soubory a přidali podporu pro 
                    více současně otevřených projektů.
                  </p>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-2">
                    Více informací
                    <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>

              {/* Upcoming Features */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-6">Připravujeme</h3>
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Mobile App</h4>
                      <p className="text-gray-400 text-sm">Q2 2024</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Git Integration 2.0</h4>
                      <p className="text-gray-400 text-sm">Q2 2024</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-400 mt-2"></div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Team Dashboard</h4>
                      <p className="text-gray-400 text-sm">Q3 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Animations */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 8s linear infinite;
        }
        @keyframes hover {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-hover {
          animation: hover 3s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          opacity: 0;
          animation: fade-in 0.6s ease-out forwards;
          animation-delay: var(--delay, 0s);
        }
      `}</style>
    </div>
  );
};

export default Documentation;