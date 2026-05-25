export interface IJwtPayload {
  groups?: string[];
  exp?: number;
  [key: string]: any;
}

/**
 * Decodes a JWT token payload on the server-side without external dependencies.
 */
export function decodeJwt(token: string): IJwtPayload | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const payload = parts[1];
    // Replace characters that are different in Base64Url
    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    const decoded = atob(base64);
    return JSON.parse(decoded);
  } catch (error) {
    return null;
  }
}

/**
 * Checks if a JWT token has expired.
 */
export function isTokenExpired(payload: IJwtPayload | null): boolean {
  if (!payload || !payload.exp) return true;
  const currentTime = Math.floor(Date.now() / 1000);
  return payload.exp < currentTime;
}

/**
 * Extracts the user's role from the JWT payload groups.
 */
export function getUserRole(payload: IJwtPayload | null): string | null {
  if (!payload || !payload.groups || !Array.isArray(payload.groups)) return null;
  return payload.groups[0] || null;
}
