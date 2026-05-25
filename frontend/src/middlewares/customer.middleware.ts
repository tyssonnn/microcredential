import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function customerMiddleware(request: NextRequest, role: string | null) {
  if (role !== "CUSTOMER") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
