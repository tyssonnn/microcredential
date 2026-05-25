import ReactQueryProvider from "./provider/react-query-provider";

export default function RootLayoutComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className="antialiased relative min-h-screen">
          {/* Animated Premium Background Blobs */}
          <div className="fixed inset-0 -z-50 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-slate-100/60 to-slate-200/40">
            {/* Blob 1 - Indigo */}
            <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-indigo-200/30 blur-[120px] animate-blob" />
            {/* Blob 2 - Cyan */}
            <div className="absolute -bottom-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-cyan-200/30 blur-[130px] animate-blob [animation-delay:2s]" />
            {/* Blob 3 - Fuchsia */}
            <div className="absolute top-[35%] right-[15%] w-[450px] h-[450px] rounded-full bg-fuchsia-200/20 blur-[110px] animate-blob [animation-delay:4s]" />
          </div>

          {/* Main App Container */}
          <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
            <main className="w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-200/40 relative border border-white/50 flex flex-col gap-6">
              {children}
            </main>
          </div>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
