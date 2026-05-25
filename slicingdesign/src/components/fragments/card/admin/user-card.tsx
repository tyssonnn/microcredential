import Button from "@/components/ui/button/button";
import Link from "next/link";

export default function UserCard() {
  return (
    <div className="border p-4 rounded-lg flex justify-between items-start w-full">
{/* List */}
      <div>
        <p className="font-semibold">(User Name)</p>
        <p className="text-sm">Phone: (User Phone)</p>
        <p className="text-sm">Email: (User Email)</p>
        <p className="text-sm">Role: (User Role)</p>
      </div>

      <div className="flex gap-2">
        <Link href={`/admin/user/1`}>
          <Button className="bg-orange-500 text-xs">Detail</Button>
        </Link>
        <Link href={`/admin/edit/1`}>
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
  );
}
