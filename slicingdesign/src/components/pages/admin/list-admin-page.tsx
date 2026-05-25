"use client";
import UserCard from "@/components/fragments/card/admin/user-card";
import Button from "@/components/ui/button/button";
import LogoutButton from "@/components/ui/button/logout-button";
import Link from "next/link";

export default function ListUserPage() {

  return (
    <div className="space-y-4 w-full">
      <h2 className="font-bold text-lg">List User</h2>

      <LogoutButton />

      <div className="flex justify-end items-center gap-2">
        <Link href="/admin/create">
          <Button className="bg-blue-500 w-fit h-fit text-end">
            Create User
          </Button>
        </Link>
      </div>

        <div className="space-y-2 w-full">
            <UserCard  />
        </div>
    </div>
  );
}
