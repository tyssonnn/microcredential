export default function CustomerLayoutHeader() {
  return (
    <header className="w-full">
      <div className="w-full glass-card rounded-2xl p-4 px-5 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="bg-white/80 p-2 rounded-xl border border-indigo-50/50 shadow-inner">
            <img 
              src="/logo/logo-hita-vidya-utama.png" 
              alt="Hita Vidya Utama" 
              className="w-24 sm:w-28 h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="hidden sm:block text-sm font-semibold text-slate-500 font-display">
            Order Management
          </h1>
          <span className="bg-indigo-50 border border-indigo-100 text-indigo-700 font-display font-extrabold text-xs tracking-wider px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            CUSTOMER PORTAL
          </span>
        </div>
      </div>
    </header>
  );
}
