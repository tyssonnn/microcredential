"use client";
import UserDetailCard from "@/components/fragments/card/admin/user-detail-card";
import BackButton from "@/components/ui/button/back-button";

export default function DetailUserPage() {
  return (
    <div className="space-y-4 w-full">
      <h2 className="font-bold text-lg">Detail User</h2>

      <BackButton />

      <UserDetailCard />
    </div>
  );
}
