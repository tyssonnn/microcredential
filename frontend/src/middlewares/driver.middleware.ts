import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function driverMiddleware(request: NextRequest, role: string | null) {
  if (role !== "DRIVER") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
