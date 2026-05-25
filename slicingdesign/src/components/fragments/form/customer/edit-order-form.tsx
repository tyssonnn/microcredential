"use client";
import Button from "@/components/ui/button/button";

export default function EditOrderForm() {
  return (
    <form className="bg-white space-y-2">
      <div>
        <label className="text-sm font-medium">Role</label>
        <select name="status" className="w-full mt-1 p-1.5 border rounded">
          <option key="1" value="CREATED">
            CREATED
          </option>
          <option key="2" value="PROCESS">
            PROCESS
          </option>
          <option key="3" value="COMPLETED">
            COMPLETED
          </option>
        </select>
      </div>

      <div className="flex justify-end gap-2">
        <Button type="submit">Update</Button>
      </div>
    </form>
  );
}
