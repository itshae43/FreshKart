import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  Sparkles, 
  CheckCircle2, 
  X, 
  Radio, 
  Menu, 
  ChevronRight,
  ShoppingBag,
  BellRing
} from 'lucide-react';

export default function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsWaitlistOpen(false);
      setIsSubmitted(false);
      setEmail('');
      showToast("🎉 You're on the early access priority list! We'll notify you first.");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#f8faf8] text-[#191c1e] flex flex-col relative selection:bg-[#c9ebd1] selection:text-[#09733e]">
      {/* Soft Ambient Radial Background Glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-0 overflow-hidden z-0"
      >
        <div className="absolute -top-32 right-[-5%] w-[650px] h-[650px] bg-gradient-to-bl from-[#d4f2dc]/60 via-[#e3f7e9]/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[25%] right-[10%] w-[500px] h-[500px] bg-gradient-to-tl from-[#cbf1d5]/40 via-[#eaf9ed]/25 to-transparent rounded-full blur-2xl" />
        <div className="absolute -bottom-24 left-[-10%] w-[550px] h-[550px] bg-[#eef8f1]/50 rounded-full blur-3xl" />
      </div>

      {/* Top Navigation Bar */}
      <header className="relative z-20 w-full px-6 sm:px-10 lg:px-16 py-6 max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: FreshKart Brand */}
        <div className="flex items-center gap-6 md:gap-8">
          <a 
            href="#" 
            id="brand-logo-link"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#09733e] rounded-lg"
          >
            {/* Organic Logo Icon */}
            <div className="w-8 h-8 rounded-lg bg-[#e5f5e8] flex items-center justify-center text-[#09733e] group-hover:scale-105 transition-transform duration-200 shadow-xs border border-[#c4e4ca]">
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 fill-none stroke-current stroke-2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="9" cy="20" r="1.5" fill="currentColor" />
                <circle cx="18" cy="20" r="1.5" fill="currentColor" />
                <path d="M2.5 3.5h3l2.4 11.2a1.5 1.5 0 0 0 1.5 1.2h8.8a1.5 1.5 0 0 0 1.5-1.1l1.8-7.3H7" />
                {/* Sprout leaves from the cart */}
                <path d="M12 6c0-2 1.5-3 3-3 0 1.5-1 3-3 3z" fill="#09733e" />
                <path d="M12 6c0-2-1.5-3-3-3 0 1.5 1 3 3 3z" fill="#09733e" />
              </svg>
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-[#09733e]">
              FreshKart
            </span>
          </a>
        </div>

        {/* Center / Right: Nav links */}
        <nav className="hidden lg:flex items-center gap-10">
          <a 
            href="#home" 
            id="nav-home-link"
            className="text-base font-semibold text-[#09733e] hover:text-[#065f46] transition-colors relative py-1"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#09733e] rounded-full" />
          </a>
          <button 
            type="button"
            id="nav-features-btn"
            onClick={() => showToast("🌱 Smart harvest tracking & instant cold-chain delivery features launching soon!")}
            className="text-base font-medium text-slate-600 hover:text-[#09733e] transition-colors cursor-pointer"
          >
            Features
          </button>
          <button 
            type="button"
            id="nav-coming-soon-btn"
            onClick={() => setIsWaitlistOpen(true)}
            className="text-base font-medium text-slate-600 hover:text-[#09733e] transition-colors cursor-pointer"
          >
            Coming Soon
          </button>
        </nav>

        {/* Far Right: Download CTA & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            id="header-download-cta"
            onClick={() => setIsWaitlistOpen(true)}
            className="hidden sm:inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#09733e] hover:bg-[#075c31] active:scale-[0.98] text-white font-medium text-sm transition-all duration-200 shadow-md shadow-[#09733e]/15 cursor-pointer"
          >
            <span>Download Now</span>
            <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center text-white">
              <Download className="w-3 h-3 stroke-[2.5]" />
            </div>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden relative z-30 bg-white border-b border-slate-100 px-6 py-5 shadow-lg mx-4 rounded-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Verdant: The Smarter Way to Shop
              </div>
              <a 
                href="#home" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#09733e]"
              >
                Home
              </a>
              <button 
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  showToast("🌱 Smart harvest tracking & farm-fresh sorting launching in Phase 1.");
                }}
                className="text-left text-base font-medium text-slate-700 hover:text-[#09733e]"
              >
                Features
              </button>
              <button 
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsWaitlistOpen(true);
                }}
                className="text-left text-base font-medium text-slate-700 hover:text-[#09733e]"
              >
                Coming Soon
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsWaitlistOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#09733e] text-white font-medium text-sm mt-2"
              >
                <span>Download Now</span>
                <Download className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Container */}
      <main className="relative z-10 flex-1 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex items-center py-6 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column: Headline, Subtitle, App Store Buttons, Social Proof */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Arriving Pill Badge */}
            <div 
              id="hero-announcement-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf7ef] border border-[#c4e4ca] text-[#09733e] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-7 shadow-xs"
            >
              <span className="flex items-center text-[#09733e]">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
              </span>
              <span>HEY, NEXA GROCERY IS ARRIVING</span>
            </div>

            {/* Main Display Headline */}
            <h1 
              id="hero-main-title"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-[-0.03em] leading-[1.08] text-[#191c1e]"
            >
              <span>Welcome to the</span> <br />
              <span className="text-[#09733e]">future of grocery</span> <br />
              <span>shopping.</span>
            </h1>

            {/* Subtitle Description */}
            <p 
              id="hero-subtitle"
              className="mt-6 text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed font-normal"
            >
              The smartest way to manage your groceries is almost here. Stay tuned for a revolution in your daily tasks.
            </p>

            {/* App Store & Google Play Download Badges */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              
              {/* Apple Store Button */}
              <button
                type="button"
                id="btn-apple-store"
                onClick={() => setIsWaitlistOpen(true)}
                className="group flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl bg-[#181d22] hover:bg-[#232930] active:scale-[0.98] text-white transition-all duration-200 shadow-sm min-w-[175px] cursor-pointer"
              >
                {/* Apple Logo */}
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.82 1.11-1.96.99-3.1-.96.04-2.12.64-2.8 1.44-.6.69-1.12 1.83-.98 2.94 1.07.08 2.14-.46 2.79-1.28z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[8.5px] uppercase tracking-wider text-slate-400 font-semibold leading-none mb-1">
                    DOWNLOAD ON THE
                  </span>
                  <span className="text-sm font-semibold tracking-tight text-white leading-tight">
                    App Store
                  </span>
                </div>
              </button>

              {/* Google Play Button */}
              <button
                type="button"
                id="btn-google-play"
                onClick={() => setIsWaitlistOpen(true)}
                className="group flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl bg-[#181d22] hover:bg-[#232930] active:scale-[0.98] text-white transition-all duration-200 shadow-sm min-w-[175px] cursor-pointer"
              >
                {/* Google Play Triangle Logo */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 0 1-.61-1.636V3.45c0-.623.23-1.206.609-1.636zm11.242 11.245L4.792 2.43 16.536 9.07l-1.685 3.989zm0 1.882l1.685 3.989-11.744 6.64 10.059-10.629zm2.083-1.026l3.52-1.99a1.64 1.64 0 0 0 0-2.85l-3.52-1.99-1.393 3.415 1.393 3.415z"/>
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[8.5px] uppercase tracking-wider text-slate-400 font-semibold leading-none mb-1">
                    GET IT ON
                  </span>
                  <span className="text-sm font-semibold tracking-tight text-white leading-tight">
                    Google Play
                  </span>
                </div>
              </button>
            </div>

            {/* Early Access Avatars & Social Proof */}
            <div 
              id="early-access-row"
              onClick={() => setIsWaitlistOpen(true)}
              className="mt-8 sm:mt-10 flex items-center gap-3.5 cursor-pointer group p-1 -ml-1 rounded-xl hover:bg-slate-100/60 transition-colors"
            >
              {/* Stacked 3 Avatars */}
              <div className="flex items-center -space-x-2">
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-[#f8faf8] object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Early access user 1"
                />
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-[#f8faf8] object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Early access user 2"
                />
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-[#f8faf8] object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
                  alt="Early access user 3"
                />
              </div>

              {/* Text Label */}
              <span className="text-xs sm:text-sm font-medium text-slate-700 group-hover:text-[#09733e] transition-colors flex items-center gap-1">
                <span>BE the early access users</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#09733e]" />
              </span>
            </div>

          </motion.div>

          {/* Right Column: Hero Visual Card Mockup with Botanical Line Art */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex items-center justify-center relative"
          >
            {/* Outer Rounded Container with soft 3D framing */}
            <div 
              id="hero-card-container"
              className="w-full max-w-[540px] aspect-[1.3/1] sm:aspect-[1.35/1] rounded-[36px] md:rounded-[44px] bg-[#edf3ed]/75 p-6 sm:p-10 md:p-12 flex items-center justify-center relative shadow-[0_20px_60px_-15px_rgba(10,120,60,0.06)] border border-[#e1ece2] overflow-hidden"
            >
              {/* Back Green Card Accent Layer */}
              <div 
                className="absolute w-[80%] h-[78%] rounded-2xl md:rounded-3xl bg-[#0e7a3e] transform translate-y-3 translate-x-1 rotate-[2deg] shadow-lg shadow-[#0e7a3e]/15"
                aria-hidden="true"
              />

              {/* Front White Tilted Card */}
              <div 
                id="hero-front-card"
                className="relative z-10 w-[84%] h-[82%] rounded-2xl md:rounded-3xl bg-white shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-slate-100/90 p-5 sm:p-8 flex flex-col items-center justify-center transform -rotate-[2.2deg] hover:rotate-0 transition-transform duration-500 ease-out select-none cursor-default overflow-hidden"
              >
                {/* Botanical & Grocery Line Art Vector Decorations */}
                {/* 1. Banana (Top Left) */}
                <div className="absolute top-3 left-4 opacity-50 text-[#6cb57f]" aria-hidden="true">
                  <svg className="w-9 h-9 sm:w-11 sm:h-11 fill-none stroke-current stroke-[1.4]" viewBox="0 0 24 24">
                    <path d="M4 15c2.5 4 8 5 13 3 3-1.2 4-4 4-4s-3.5 1-7.5.5-6.5-3-7.5-6c-.5 2.5-1 4.5-2 6.5z" strokeLinecap="round" />
                    <path d="M5 13c3 3 8 3.5 12 1.5" strokeLinecap="round" />
                  </svg>
                </div>

                {/* 2. Avocado (Top Center) */}
                <div className="absolute top-2.5 left-[48%] -translate-x-1/2 opacity-45 text-[#6cb57f]" aria-hidden="true">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-none stroke-current stroke-[1.4]" viewBox="0 0 24 24">
                    <path d="M12 2C9 2 6.5 5 6.5 9c0 4.5 2 11 5.5 11s5.5-6.5 5.5-11c0-4-2.5-7-5.5-7z" />
                    <circle cx="12" cy="13.5" r="3" strokeWidth="1.3" />
                  </svg>
                </div>

                {/* 3. Cabbage/Lettuce (Top Right) */}
                <div className="absolute top-3 right-4 opacity-50 text-[#6cb57f]" aria-hidden="true">
                  <svg className="w-9 h-9 sm:w-11 sm:h-11 fill-none stroke-current stroke-[1.4]" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="8" />
                    <path d="M7 10c2-1 5-1 7 1s2 5 1 7" strokeLinecap="round" />
                    <path d="M17 11c-2-2-5-2-7-1s-3 4-2 6" strokeLinecap="round" />
                    <path d="M10 7c2 2 3 5 2 8" strokeLinecap="round" />
                  </svg>
                </div>

                {/* 4. Cabbage (Bottom Left) */}
                <div className="absolute bottom-3 left-4 opacity-50 text-[#6cb57f]" aria-hidden="true">
                  <svg className="w-9 h-9 sm:w-11 sm:h-11 fill-none stroke-current stroke-[1.4]" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="8" />
                    <path d="M8 9c2-1.5 5.5-1.5 7.5.5s1.5 5.5-.5 7.5" strokeLinecap="round" />
                    <path d="M11 6c1 3 1 7-1 9" strokeLinecap="round" />
                  </svg>
                </div>

                {/* 5. Shopping Cart (Bottom Center) */}
                <div className="absolute bottom-2.5 left-[48%] -translate-x-1/2 opacity-45 text-[#6cb57f]" aria-hidden="true">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-none stroke-current stroke-[1.4]" viewBox="0 0 24 24">
                    <circle cx="9" cy="20" r="1.5" />
                    <circle cx="17" cy="20" r="1.5" />
                    <path d="M3 4h3l2.2 10.5a1 1 0 0 0 1 .8h8a1 1 0 0 0 1-.8L20 8H7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* 6. Tomato (Bottom Right) */}
                <div className="absolute bottom-3 right-4 opacity-50 text-[#6cb57f]" aria-hidden="true">
                  <svg className="w-9 h-9 sm:w-11 sm:h-11 fill-none stroke-current stroke-[1.4]" viewBox="0 0 24 24">
                    <ellipse cx="12" cy="13" rx="7.5" ry="6.5" />
                    <path d="M12 6.5V4M10 5l4 2M14 5l-4 2" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Center Content */}
                <div className="relative z-10 text-center flex flex-col items-center justify-center my-auto">
                  <h2 
                    id="card-coming-soon-heading"
                    className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0e7a3e] tracking-tight leading-tight"
                  >
                    Coming Soon
                  </h2>
                  <p 
                    id="card-preorder-subtext"
                    className="text-xs sm:text-sm md:text-base font-medium text-[#2c7849] mt-1 sm:mt-1.5"
                  >
                    Pre-order your first harvest today.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </main>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-[#181d22] text-white px-5 py-3.5 rounded-2xl shadow-xl border border-slate-700/50 flex items-center gap-3 text-sm font-medium max-w-md"
          >
            <Sparkles className="w-4 h-4 text-[#4ade80] shrink-0" />
            <span>{toastMessage}</span>
            <button 
              type="button"
              onClick={() => setToastMessage(null)}
              className="text-slate-400 hover:text-white ml-2 p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Early Access / Pre-Order Modal */}
      <AnimatePresence>
        {isWaitlistOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsWaitlistOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100"
            >
              {/* Close Button */}
              <button
                type="button"
                id="modal-close-btn"
                onClick={() => setIsWaitlistOpen(false)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-[#e5f5e8] text-[#09733e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">You're on the list!</h3>
                  <p className="text-sm text-slate-600 mt-2">
                    We'll notify you the moment FreshKart is ready for download in your area.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="w-11 h-11 bg-[#edf7ef] text-[#09733e] rounded-2xl flex items-center justify-center mb-4 border border-[#c4e4ca]">
                    <BellRing className="w-5 h-5" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    Get Early Access
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Be among the first to experience the smarter way to shop farm-fresh groceries with exclusive launch harvest discounts.
                  </p>

                  <form onSubmit={handleWaitlistSubmit} className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="email-input" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#09733e] focus:ring-2 focus:ring-[#09733e]/20 outline-none text-sm text-slate-900 placeholder:text-slate-400"
                      />
                    </div>

                    <button
                      type="submit"
                      id="submit-waitlist-btn"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#09733e] hover:bg-[#075c31] text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-[#09733e]/20 cursor-pointer"
                    >
                      Reserve Early Access
                    </button>

                    <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
                      <ShoppingBag className="w-3.5 h-3.5 text-[#09733e]" />
                      <span>Zero spam. First harvest launch perk guaranteed.</span>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

