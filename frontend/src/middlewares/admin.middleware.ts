import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function adminMiddleware(request: NextRequest, role: string | null) {
  if (role !== "ADMIN") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
