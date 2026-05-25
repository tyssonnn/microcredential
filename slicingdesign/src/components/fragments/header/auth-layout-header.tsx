export default function AuthLayoutHeader() {
  return (
    <header
      className="flex justify-start gap-2 items-center py-4 w-full rounded-lg"
    >
      <div className="w-full h-50 bg-blue-200 rounded-2xl flex justify-between drop-shadow">
        <div className="p-5">
        <img src="/logo/logo-hita-vidya-utama.png" 
            alt="" 
            className="w-32"/>
        </div>
      </div>
      
    </header>
  );
}
