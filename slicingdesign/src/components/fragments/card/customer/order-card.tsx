import Button from "@/components/ui/button/button";
import Link from "next/link";



export default function OrderCard() {
    return (
        <div className="border p-4 rounded-lg flex justify-between items-start w-full">
      <div>
        <p className="font-semibold">(Customer ID)</p>
        <p className="text-sm">Pickup: (Pickup Location)</p>
        <p className="text-sm">Destination: (Destination Location)</p>
        <p className="text-sm">Status: (Order Status)</p>
      </div>

      <div className="flex gap-2">
        <Link href={`/customer/order/1`}>
          <Button className="bg-orange-500 text-xs">Detail</Button>
        </Link>
        <Link href={`/customer/edit/1`}>
          <Button className="bg-green-600 text-xs">Edit</Button>
        </Link>
        <Button
          className="bg-red-500 text-xs"
          onClick={() => confirm("Are you sure?")}
        >
          Delete
        </Button>
      </div>
    </div>
    )
}