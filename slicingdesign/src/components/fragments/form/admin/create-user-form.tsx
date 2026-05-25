"use client";
import Button from "@/components/ui/button/button";

export default function CreateUserForm() {
  return (
    <form className="bg-white space-y-2">
      <div>
        <label className="text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          className="w-full mt-1 p-1 border rounded"
          placeholder="Enter user name..."
        />
      </div>

      <div>
        <label className="text-sm font-medium">Email</label>
        <input
          type="text"
          name="email"
          className="w-full mt-1 p-1 border rounded"
          placeholder="Enter user email..."
        />
      </div>
      <div>
        <label className="text-sm font-medium">Password</label>
        <input
          type="password"
          name="password"
          className="w-full mt-1 p-1 border rounded"
          placeholder="Enter user password..."
        />
      </div>
      <div>
        <label className="text-sm font-medium">Phone Number</label>
        <input
          type="text"
          name="phone"
          className="w-full mt-1 p-1 border rounded"
          placeholder="Enter user phone number..."
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
        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
