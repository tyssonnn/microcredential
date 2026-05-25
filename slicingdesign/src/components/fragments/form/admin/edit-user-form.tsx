"use client";
import Button from "@/components/ui/button/button";

export default function EditUserForm() {
  return (
    <form className="bg-white space-y-2">
      <div>
        <label className="text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          className="w-full mt-1 p-1 border rounded"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Email</label>
        <input
          type="text"
          name="email"
          className="w-full mt-1 p-1 border rounded"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Password</label>
        <input
          type="password"
          name="password"
          className="w-full mt-1 p-1 border rounded"
        />
      </div>
      <div>
        <label className="text-sm font-medium">Phone</label>
        <input
          type="text"
          name="phone"
          className="w-full mt-1 p-1 border rounded"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Role</label>
        <select name="role" className="w-full mt-1 p-1.5 border rounded">
          <option key="1" value="ADMIN">
            Admin
          </option>
          <option key="2" value="CUSTOMER">
            Customer
          </option>
          <option key="3" value="DRIVER">
            Driver
          </option>
        </select>
      </div>

      <div className="flex justify-end gap-2">
        <Button type="submit">Update</Button>
      </div>
    </form>
  );
}
