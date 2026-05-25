export default function CustomerLayoutHeader() {
  return (
    <header
      className="flex justify-start gap-2 items-center py-4 w-full rounded-lg"
    >
      <div className="w-full h-50 bg-gray-200 rounded-2xl flex justify-between drop-shadow">
        <div className="p-5">
        <img src="/logo/logo-hita-vidya-utama.png" 
            alt="" 
            className="w-32"/>
        </div>
        <h1 className="text-2xl font-bold text-gray-500 p-6 font-[Sora]">Order Management</h1>
      </div>
      
    </header>
  );
}
