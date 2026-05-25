export default function UserDetailCard() {
  return (
    <div className="w-full border rounded-lg p-6 bg-white shadow-sm space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">(User Name)</h3>
          <p className="text-sm text-gray-500">ID: (User ID)</p>
        </div>

        <span
          className={`px-3 py-1 text-sm rounded-full font-medium  bg-gray-100 text-gray-700`}
        >
          (Admin)
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Phone Number</p>
          <p className="font-medium">(User Phone)</p>
        </div>

        <div>
          <p className="text-gray-500">Email:</p>
          <p className="font-medium">(User Email)</p>
        </div>
      </div>

      <div className="border-t pt-4 text-xs text-gray-500 space-y-1">
        <p>Created At: (User Created At)</p>
      </div>
    </div>
  );
}
