"use client";
import Button from "@/components/ui/button/button";

export default function CreateOrderForm() {
  return (
    <form className="bg-white space-y-2">
      <div>
        <label className="text-sm font-medium">Customer ID</label>
        <input
          type="number"
          name="customerId"
          className="w-full mt-1 p-1 border rounded"
          placeholder="Enter customer ID..."
        />
      </div>

      <div>
        <label className="text-sm font-medium">Pickup</label>
        <input
          type="text"
          name="pickup"
          className="w-full mt-1 p-1 border rounded"
          placeholder="Enter pickup location..."
        />
      </div>
      <div>
        <label className="text-sm font-medium">Destination</label>
        <input
          type="text"
          name="destination"
          className="w-full mt-1 p-1 border rounded"
          placeholder="Enter destination location..."
        />
      </div>

      <div className="flex justify-end gap-2">
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
