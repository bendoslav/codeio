import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Přidání event listeneru pro Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
      // Zavření pomocí ESC
      if (e.key === 'Escape') {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Search Dialog */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 text-center">
            {/* Overlay */}
            <div 
              className="fixed inset-0 bg-black/80 backdrop-blur-xl transition-opacity"
              onClick={() => setIsSearchOpen(false)}
            />

            {/* Dialog */}
            <div className="inline-block w-full max-w-3xl my-16 text-left align-middle transition-all transform">
              <div className="relative bg-gradient-to-b from-gray-900/90 to-black/90 rounded-2xl shadow-2xl border border-white/10">
                {/* Search Input */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 bg-white/5 rounded-xl p-4 border border-white/10 shadow-inner">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      className="w-full bg-transparent text-lg text-white placeholder-gray-400 focus:outline-none"
                      placeholder="Co hledáte?"
                      autoFocus
                    />
                    <div className="hidden sm:flex items-center">
                      <kbd className="hidden sm:inline-flex h-6 items-center gap-1 rounded border border-white/20 bg-white/5 px-2 text-xs text-gray-400 font-medium">
                        <span className="text-xs">⎋</span> ESC
                      </kbd>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="px-2 pb-3">
                  <div className="flex gap-2 px-4 mb-3">
                    <button className="px-3 py-1.5 text-sm text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg transition-colors">
                      Components
                    </button>
                    <button className="px-3 py-1.5 text-sm text-purple-400 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg transition-colors">
                      Templates
                    </button>
                    <button className="px-3 py-1.5 text-sm text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-lg transition-colors">
                      Documentation
                    </button>
                  </div>
                </div>

                {/* Search Results */}
                <div className="border-t border-white/5">
                  <div className="px-2 py-4">
                    <div className="text-xs font-medium text-gray-400 px-4 mb-2">NEDÁVNÉ VYHLEDÁVÁNÍ</div>
                    <div className="space-y-1">
                      {[
                        { icon: '🎨', text: 'Tailwind Components', category: 'Components' },
                        { icon: '⚡', text: 'Quick Start Guide', category: 'Docs' },
                        { icon: '📱', text: 'Responsive Design', category: 'Tutorial' }
                      ].map((item, i) => (
                        <div 
                          key={i}
                          className="flex items-center space-x-3 p-3 mx-2 rounded-lg hover:bg-white/5 cursor-pointer group transition-colors"
                        >
                          <span className="text-lg">{item.icon}</span>
                          <div className="flex-1">
                            <div className="text-gray-300 group-hover:text-white transition-colors">
                              {item.text}
                            </div>
                            <div className="text-xs text-gray-500">
                              {item.category}
                            </div>
                          </div>
                          <svg className="w-5 h-5 text-gray-500 group-hover:text-gray-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="px-2 pb-4">
                    <div className="text-xs font-medium text-gray-400 px-4 mb-2">RYCHLÉ AKCE</div>
                    <div className="grid grid-cols-2 gap-2 px-2">
                      {[
                        { icon: '⚡', text: 'Nový projekt', shortcut: '⌘ N' },
                        { icon: '📁', text: 'Otevřít projekt', shortcut: '⌘ O' },
                        { icon: '💾', text: 'Uložit změny', shortcut: '⌘ S' },
                        { icon: '⚙️', text: 'Nastavení', shortcut: '⌘ ,' }
                      ].map((action, i) => (
                        <div 
                          key={i}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer group transition-colors"
                        >
                          <span className="text-lg">{action.icon}</span>
                          <div className="flex-1 text-sm text-gray-300 group-hover:text-white transition-colors">
                            {action.text}
                          </div>
                          <kbd className="text-xs text-gray-500">{action.shortcut}</kbd>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-white/10 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600/80 to-purple-600/80 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <div className="w-5 h-5 rounded-lg bg-white/90"></div>
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                CodeIO
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {/* Features Dropdown */}
              <div className="group relative">
                <button className="flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all">
                  <span>Funkce</span>
                  <svg className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-transform group-hover:-rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 w-64 pt-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200">
                  <div className="bg-[#1A1A1A] border border-white/10 rounded-xl shadow-xl shadow-black/40 p-2">
                    {[
                      { icon: "⚡", title: "Rychlost", desc: "Bleskově rychlé načítání" },
                      { icon: "🛠️", title: "Nástroje", desc: "Pokročilé vývojářské nástroje" },
                      { icon: "🎨", title: "Design", desc: "Moderní šablony" }
                    ].map((item, i) => (
                      <a key={i} href="#" className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <div className="text-sm font-medium text-white">{item.title}</div>
                          <div className="text-xs text-gray-400">{item.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Regular Links */}
              <a href="#" className="px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all">
                Šablony
              </a>
              <a href="#" className="px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all">
                Ceník
              </a>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="px-4 py-2 text-sm text-gray-400 bg-white/5 hover:bg-white/10 rounded-lg flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Hledat</span>
                <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs bg-white/5 rounded">Ctrl K</kbd>
              </button>

              {/* Auth Buttons - skryto na mobilu */}
              <div className="hidden md:flex items-center space-x-3">
                <a href="#" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
                  Přihlásit
                </a>
                <a href="#" className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors">
                  Začít zdarma
                </a>
              </div>

              {/* Hamburger Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <svg 
                  className={`w-6 h-6 text-gray-300 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="py-4 space-y-4">
              {/* Mobile Navigation Links */}
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                Funkce
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                Šablony
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                Ceník
              </a>
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-white/10">
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
                  Přihlásit
                </a>
                <a href="#" className="block mt-2 px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors text-center">
                  Začít zdarma
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header - upraveno pro mobil */}
      <div className="pt-28 pb-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              Vytvářejte webové aplikace
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                rychleji než kdy předtím
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              CodeIO je moderní vývojové prostředí, které vám umožní vytvářet webové aplikace s využitím nejnovějších technologií. Vše, co potřebujete, na jednom místě.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="#" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors w-full sm:w-auto">
                Začít zdarma
              </a>
              <Link 
                to="/docs" 
                className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-medium transition-colors w-full sm:w-auto group"
              >
                Dokumentace
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="text-gray-500 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.9/5 hodnocení</span>
              </div>
              <div className="text-gray-500 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span>10k+ vývojářů</span>
              </div>
              <div className="text-gray-500 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>99.9% dostupnost</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 -mt-8">
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Main Grid */}
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Code Editor Preview */}
            <div className="lg:col-span-2 space-y-4">
              {/* Code Editor */}
              <div className="bg-[#1E1E1E] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                {/* Editor Header */}
                <div className="p-2.5 bg-[#2D2D2D] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400">App.tsx</div>
                </div>

                {/* Editor Content */}
                <div className="p-4 font-mono text-xs relative group">
                  {/* Code Content */}
                  <div className="space-y-1 whitespace-pre-wrap break-all sm:break-normal sm:whitespace-pre">
                    <div className="text-gray-400">
                      <span className="text-purple-400">import</span>
                      <span className="text-white mx-2">React</span>
                      <span className="text-purple-400">from</span>
                      <span className="text-orange-400 mx-2">'react'</span>
                    </div>
                    
                    <div className="text-gray-400">
                      <span className="text-purple-400">const</span>
                      <span className="text-blue-400 mx-2">Navigation</span>
                      <span className="text-white">=</span>
                      <span className="text-purple-400">{'=>'}</span>
                      <span className="text-white mx-2">{'{'}</span>
                    </div>

                    <div className="text-gray-400 pl-4">
                      <span className="text-purple-400">return</span>
                      <span className="text-white mx-2">(</span>
                    </div>

                    <div className="text-gray-400 pl-4">
                      <span className="text-blue-400">{'<div'}</span>
                      <span className="text-purple-400 mx-2">className</span>
                      <span className="text-white">=</span>
                      <span className="text-orange-400 break-all">"bg-white rounded-xl shadow-lg p-6"</span>
                      <span className="text-blue-400">{'>'}</span>
                    </div>

                    <div className="text-gray-400 pl-6">
                      <span className="text-blue-400">{'<h2'}</span>
                      <span className="text-purple-400 mx-2">className</span>
                      <span className="text-white">=</span>
                      <span className="text-orange-400 break-all">"text-2xl font-bold mb-4 text-gray-800"</span>
                      <span className="text-blue-400">{'>'}</span>
                      <span className="text-white">Navigation</span>
                      <span className="text-blue-400">{'</h2>'}</span>
                    </div>

                    <div className="text-gray-400 pl-6">
                      <span className="text-blue-400">{'<nav'}</span>
                      <span className="text-purple-400 mx-2">className</span>
                      <span className="text-white">=</span>
                      <span className="text-orange-400">"flex flex-wrap gap-4"</span>
                      <span className="text-blue-400">{'>'}</span>
                    </div>

                    <div className="text-gray-400 pl-8">
                      <span className="text-blue-400">{'<a'}</span>
                      <span className="text-purple-400 mx-2">href</span>
                      <span className="text-white">=</span>
                      <span className="text-orange-400">"#"</span>
                      <span className="text-purple-400 mx-2">className</span>
                      <span className="text-white">=</span>
                      <span className="text-orange-400 break-all">"text-blue-500 hover:text-blue-700"</span>
                      <span className="text-blue-400">{'>'}</span>
                      <span className="text-white">Home</span>
                      <span className="text-blue-400">{'</a>'}</span>
                    </div>

                    <div className="text-gray-400 pl-8">
                      <span className="text-blue-400">{'<a'}</span>
                      <span className="text-purple-400 mx-2">href</span>
                      <span className="text-white">=</span>
                      <span className="text-orange-400">"#"</span>
                      <span className="text-purple-400 mx-2">className</span>
                      <span className="text-white">=</span>
                      <span className="text-orange-400">"text-gray-600 hover:text-gray-800"</span>
                      <span className="text-blue-400">{'>'}</span>
                      <span className="text-white">About</span>
                      <span className="text-blue-400">{'</a>'}</span>
                    </div>

                    <div className="text-gray-400 pl-8">
                      <span className="text-blue-400">{'<a'}</span>
                      <span className="text-purple-400 mx-2">href</span>
                      <span className="text-white">=</span>
                      <span className="text-orange-400">"#"</span>
                      <span className="text-purple-400 mx-2">className</span>
                      <span className="text-white">=</span>
                      <span className="text-orange-400">"text-gray-600 hover:text-gray-800"</span>
                      <span className="text-blue-400">{'>'}</span>
                      <span className="text-white">Services</span>
                      <span className="text-blue-400">{'</a>'}</span>
                    </div>

                    <div className="text-gray-400 pl-8">
                      <span className="text-blue-400">{'<a'}</span>
                      <span className="text-purple-400 mx-2">href</span>
                      <span className="text-white">=</span>
                      <span className="text-orange-400">"#"</span>
                      <span className="text-purple-400 mx-2">className</span>
                      <span className="text-white">=</span>
                      <span className="text-orange-400">"text-gray-600 hover:text-gray-800"</span>
                      <span className="text-blue-400">{'>'}</span>
                      <span className="text-white">Contact</span>
                      <span className="text-blue-400">{'</a>'}</span>
                    </div>

                    <div className="text-gray-400 pl-6">
                      <span className="text-blue-400">{'</nav>'}</span>
                    </div>

                    <div className="text-gray-400 pl-4">
                      <span className="text-blue-400">{'</div>'}</span>
                    </div>

                    <div className="text-gray-400">
                      <span className="text-white">{'}'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preview Window */}
              <div className="bg-white rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="p-2.5 bg-gray-100 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-500">Preview</div>
                </div>
                
                {/* Preview Content */}
                <div className="p-4 sm:p-6">
                  <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Navigation</h2>
                    <nav className="flex flex-wrap gap-3 sm:gap-4">
                      <a href="#" className="text-blue-500 hover:text-blue-700">Home</a>
                      <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
                      <a href="#" className="text-gray-600 hover:text-gray-800">Services</a>
                      <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-8">
              {[
                {
                  icon: "⚡",
                  title: "Bleskově rychlé",
                  description: "Optimalizovaný výkon pro maximální rychlost vývoje"
                },
                {
                  icon: "🎨",
                  title: "Moderní design",
                  description: "Předpřipravené komponenty v nejnovějším designu"
                },
                {
                  icon: "🛠️",
                  title: "Výkonné nástroje",
                  description: "Pokročilé vývojářské nástroje pro profesionály"
                }
              ].map((feature, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors group">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{feature.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-all">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}

              {/* Action Card */}
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-medium text-white mb-2">
                  Připraveni začít?
                </h3>
                <p className="text-gray-400 mb-4">
                  Vyzkoušejte CodeIO zdarma a objevte nový způsob vývoje.
                </p>
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors">
                  Začít zdarma
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-32 bg-gradient-to-b from-[#0A0A0A] to-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Všechny funkce, které potřebujete
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Výkonné nástroje pro moderní vývoj webových aplikací
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Rychlý vývoj",
                description: "Automatické dokončování kódu a živý náhled změn"
              },
              {
                icon: "🎨",
                title: "Tailwind CSS",
                description: "Integrovaná podpora pro moderní CSS framework"
              },
              {
                icon: "📱",
                title: "Responzivní design",
                description: "Nástroje pro perfektní zobrazení na všech zařízeních"
              },
              {
                icon: "",
                title: "TypeScript",
                description: "Plná podpora pro typově bezpečný JavaScript"
              },
              {
                icon: "🚀",
                title: "Optimalizace",
                description: "Automatická optimalizace výkonu aplikace"
              },
              {
                icon: "🔒",
                title: "Bezpečnost",
                description: "Vestavěné bezpečnostní kontroly a best practices"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Templates Section */}
      <div className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Předpřipravené šablony
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Začněte rychle s profesionálně navrženými šablonami pro různé typy projektů
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce",
                description: "Moderní e-shop s košíkem a platební bránou",
                image: {
                  desktop: "https://placehold.co/1200x800/1a1a1a/ffffff?text=E-commerce+Template",
                  mobile: "https://placehold.co/400x800/1a1a1a/ffffff?text=E-commerce+Mobile"
                },
                features: [
                  "Produktový katalog",
                  "Košík a checkout",
                  "Stripe integrace",
                  "Admin dashboard"
                ],
                techStack: ["Next.js", "Tailwind CSS", "Prisma", "Stripe"],
                demoLink: "#",
                bgGradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20"
              },
              {
                title: "SaaS Platform",
                description: "Startovací šablona pro SaaS aplikace",
                image: {
                  desktop: "https://placehold.co/1200x800/1a1a1a/ffffff?text=SaaS+Template",
                  mobile: "https://placehold.co/400x800/1a1a1a/ffffff?text=SaaS+Mobile"
                },
                features: [
                  "Auth systém",
                  "Subscription plány",
                  "User dashboard",
                  "API endpoints"
                ],
                techStack: ["React", "Node.js", "MongoDB", "Auth0"],
                demoLink: "#",
                bgGradient: "from-blue-500/20 via-indigo-500/10 to-purple-500/20"
              },
              {
                title: "Blog/Portfolio",
                description: "Osobní web s blogem a portfoliem",
                image: {
                  desktop: "https://placehold.co/1200x800/1a1a1a/ffffff?text=Blog+Template",
                  mobile: "https://placehold.co/400x800/1a1a1a/ffffff?text=Blog+Mobile"
                },
                features: [
                  "MDX blog",
                  "Projektové portfolio",
                  "Kontaktní formulář",
                  "SEO optimalizace"
                ],
                techStack: ["Astro", "Vue.js", "TailwindCSS", "Netlify"],
                demoLink: "#",
                bgGradient: "from-pink-500/20 via-rose-500/10 to-red-500/20"
              }
            ].map((template, i) => (
              <div key={i} className="group relative">
                <div className={`
                  rounded-2xl overflow-hidden border border-white/10 transition-all duration-300
                  hover:border-white/20 hover:scale-[1.02]
                `}>
                  {/* Preview Images */}
                  <div className="relative aspect-[16/9] bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
                    {/* Desktop Preview */}
                    <div className="absolute inset-0 transform group-hover:scale-[1.02] transition-transform duration-300">
                      <img 
                        src={template.image.desktop} 
                        alt={`${template.title} desktop preview`}
                        className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    {/* Mobile Preview */}
                    <div className="absolute -right-8 bottom-0 w-1/3 shadow-2xl rounded-t-lg transform translate-y-8 group-hover:translate-y-6 transition-transform duration-300">
                      <img 
                        src={template.image.mobile} 
                        alt={`${template.title} mobile preview`}
                        className="w-full rounded-t-lg"
                      />
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] opacity-50"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white mb-1">{template.title}</h3>
                      <p className="text-gray-400 text-sm">{template.description}</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-4">
                      {template.features.map((feature, j) => (
                        <li key={j} className="flex items-center text-gray-300 text-sm">
                          <svg className="w-4 h-4 mr-2 text-blue-400" viewBox="0 0 24 24" fill="none">
                            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-400 mb-2">Tech Stack:</div>
                      <div className="flex flex-wrap gap-2">
                        {template.techStack.map((tech, k) => (
                          <span key={k} className="px-2 py-1 text-xs rounded-md bg-white/10 text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Demo Link */}
                    <a href={template.demoLink} 
                      className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                      Zobrazit demo
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-32 bg-gradient-to-b from-[#0A0A0A] to-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Jednoduchý ceník
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Vyberte si plán, který nejlépe vyhovuje vašim potřebám
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {[
              {
                name: "Hobby",
                description: "Pro jednotlivce a malé projekty",
                price: "Zdarma",
                period: "navždy",
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z" 
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.5 9.5V5.5C13.5 4.94772 13.9477 4.5 14.5 4.5H18.5C19.0523 4.5 19.5 4.94772 19.5 5.5V9.5C19.5 10.0523 19.0523 10.5 18.5 10.5H14.5C13.9477 10.5 13.5 10.0523 13.5 9.5Z" 
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.5 18.5V14.5C4.5 13.9477 4.94772 13.5 5.5 13.5H9.5C10.0523 13.5 10.5 13.9477 10.5 14.5V18.5C10.5 19.0523 10.0523 19.5 9.5 19.5H5.5C4.94772 19.5 4.5 19.0523 4.5 18.5Z" 
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z" 
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                features: [
                  { title: "1 projekt", included: true },
                  { title: "Základní šablony", included: true },
                  { title: "Komunitní podpora", included: true },
                  { title: "Automatické aktualizace", included: true },
                  { title: "Vlastní domény", included: false },
                  { title: "Prioritní podpora", included: false },
                  { title: "Týmová spolupráce", included: false },
                  { title: "API přístup", included: false }
                ],
                cta: "Začít zdarma",
                popular: false
              },
              {
                name: "Pro",
                description: "Pro profesionální vývojáře",
                price: "299 Kč",
                period: "měsíčně",
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 12C13 11.4477 13.4477 11 14 11H19C19.5523 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H14C13.4477 20 13 19.5523 13 19V12Z" 
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M4 5C4 4.44772 4.44772 4 5 4H10C10.5523 4 11 4.44772 11 5V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V5Z" 
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M11 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M11 16H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
                features: [
                  { title: "Neomezené projekty", included: true },
                  { title: "Všechny šablony", included: true },
                  { title: "Prioritní podpora", included: true },
                  { title: "Automatické aktualizace", included: true },
                  { title: "Vlastní domény", included: true },
                  { title: "API přístup", included: true },
                  { title: "Týmová spolupráce", included: false },
                  { title: "SLA podpora", included: false }
                ],
                cta: "Vyzkoušet Pro",
                popular: true
              },
              {
                name: "Team",
                description: "Pro týmy a větší organizace",
                price: "999 Kč",
                period: "měsíčně",
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 15H8C5.79086 15 4 16.7909 4 19V21H20V19C20 16.7909 18.2091 15 16 15Z" 
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" 
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                features: [
                  { title: "Vše z Pro plánu", included: true },
                  { title: "Týmová spolupráce", included: true },
                  { title: "Neomezený počet členů", included: true },
                  { title: "SLA podpora", included: true },
                  { title: "Vlastní branding", included: true },
                  { title: "Pokročilé statistiky", included: true },
                  { title: "Dedikovaný manažer", included: true },
                  { title: "On-premise možnost", included: true }
                ],
                cta: "Kontaktujte nás",
                popular: false
              }
            ].map((plan, i) => (
              <div key={i} 
                className={`
                  relative rounded-2xl p-8 h-full
                  ${plan.popular 
                    ? 'bg-gradient-to-br from-blue-600/20 via-blue-600/10 to-purple-600/20 border-2 border-blue-500/50 scale-105' 
                    : 'bg-white/5 border border-white/10'
                  }
                `}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                      Nejoblíbenější
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`
                      p-3.5 rounded-2xl
                      ${plan.popular 
                        ? 'bg-gradient-to-br from-blue-500/25 to-purple-500/25 border border-blue-500/25' 
                        : 'bg-gradient-to-br from-white/10 to-white/5 border border-white/10'
                      }
                    `}>
                      <div className={`
                        ${plan.popular ? 'text-blue-400' : 'text-gray-400'}
                      `}>
                        {plan.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                      <p className="text-gray-400">{plan.description}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-end mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <div className={`
                        mt-1 mr-3 rounded-full p-1
                        ${feature.included 
                          ? 'text-blue-400 bg-blue-500/10' 
                          : 'text-gray-600 bg-gray-500/10'
                        }
                      `}>
                        {feature.included ? (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </div>
                      <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>
                        {feature.title}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`
                  w-full py-4 rounded-xl font-medium transition-all
                  ${plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                  }
                `}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage