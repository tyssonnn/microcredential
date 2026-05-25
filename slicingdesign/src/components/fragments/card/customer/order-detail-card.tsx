
export default function OrderDetailCard() {
  return (
    <div className="w-full border rounded-lg p-6 bg-white shadow-sm space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">(Customer ID)</h3>
          <p className="text-sm text-gray-500">ID: (Order ID)</p>
        </div>

        <span
          className={`px-3 py-1 text-sm rounded-full font-medium bg-gray-100 text-gray-700}`}
        >
            (Order Status)
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Pickup</p>
          <p className="font-medium">(Pickup Location)</p>
        </div>

        <div>
          <p className="text-gray-500">Destination</p>
          <p className="font-medium">(Destination Location)</p>
        </div>

      </div>

      <div className="border-t pt-4 text-xs text-gray-500 space-y-1">
        <p>Created At: (Created At)</p>
      </div>
    </div>
  );
}
