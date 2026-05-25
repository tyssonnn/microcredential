"use client";
import EditOrderForm from "@/components/fragments/form/customer/edit-order-form";
import BackButton from "@/components/ui/button/back-button";

export default function EditOrderPage() {
  return (
    <div className="space-y-4 w-full">
      <h2 className="font-bold text-lg">Edit Order</h2>

      <BackButton />

      <EditOrderForm />
    </div>
  );
}
