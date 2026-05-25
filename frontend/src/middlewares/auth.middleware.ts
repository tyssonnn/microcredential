import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function authMiddleware(request: NextRequest, role: string | null) {
  if (role) {
    if (role === "ADMIN") {
      return NextResponse.redirect(new URL("/admin", request.url));
    } else if (role === "CUSTOMER") {
      return NextResponse.redirect(new URL("/customer", request.url));
    } else if (role === "DRIVER") {
      return NextResponse.redirect(new URL("/driver", request.url));
    }
  }
  return NextResponse.next();
}
