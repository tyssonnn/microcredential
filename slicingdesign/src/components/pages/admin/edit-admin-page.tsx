"use client";
import EditUserForm from "@/components/fragments/form/admin/edit-user-form";
import BackButton from "@/components/ui/button/back-button";

export default function EditUserPage() {
  return (
    <div className="space-y-4 w-full">
      <h2 className="font-bold text-lg">Edit User</h2>

      <BackButton />

      <EditUserForm />
    </div>
  );
}
