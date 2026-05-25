import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeJwt, isTokenExpired, getUserRole } from "./middlewares/helper";
import { adminMiddleware } from "./middlewares/admin.middleware";
import { customerMiddleware } from "./middlewares/customer.middleware";
import { driverMiddleware } from "./middlewares/driver.middleware";
import { authMiddleware } from "./middlewares/auth.middleware";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Retrieve token from cookie
  const tokenCookie = request.cookies.get("token");
  const token = tokenCookie?.value;

  // Extract role if token is valid and not expired
  const payload = token ? decodeJwt(token) : null;
  const isExpired = isTokenExpired(payload);
  const role = !isExpired ? getUserRole(payload) : null;

  // Route protection by actor
  if (pathname.startsWith("/admin")) {
    return adminMiddleware(request, role);
  }

  if (pathname.startsWith("/customer")) {
    return customerMiddleware(request, role);
  }

  if (pathname.startsWith("/driver")) {
    return driverMiddleware(request, role);
  }

  // Redirect authenticated users away from auth pages
  if (pathname === "/login" || pathname === "/register") {
    return authMiddleware(request, role);
  }

  return NextResponse.next();
}

// Config to specify matching routes
export const config = {
  matcher: [
    "/admin/:path*",
    "/customer/:path*",
    "/driver/:path*",
    "/login",
    "/register",
  ],
};
