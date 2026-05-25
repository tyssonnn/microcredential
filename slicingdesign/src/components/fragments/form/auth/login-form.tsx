"use client";

import Link from "next/link";
import Button from "@/components/ui/button/button";

export default function LoginForm() {
  return (
    <div className="w-full flex justify-center">
      <div className="space-y-4 w-100">
        <form>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="text"
              name="email"
              className="w-full mt-1 p-1 border rounded"
              placeholder="Enter email..."
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="w-full mt-1 p-1 border rounded"
              placeholder="Enter password..."
            />
          </div>

          <div className="flex justify-center gap-2 m-5">
            <Link href={"/admin"}>
            
            <Button type="submit">Login</Button>
            </Link>
          </div>
        </form>
        <div className="py-2 text-end">
          <Link
            href="/register"
            className="text-sm text-blue-500 hover:underline"
          >
            Don't have an account? Register here
          </Link>
        </div>
      </div>
    </div>
  );
}
