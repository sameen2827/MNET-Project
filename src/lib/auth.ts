import type { User, UserRole } from "@/types";

/**
 * Placeholder auth layer — replace with NextAuth, Clerk, or custom JWT.
 */
export async function getCurrentUser(): Promise<User | null> {
  // TODO: Implement session lookup from cookies/JWT
  return null;
}

export function hasRole(user: User | null, role: UserRole): boolean {
  return user?.role === role;
}

export function canAccess(user: User | null, permission: string): boolean {
  if (!user) return false;
  // TODO: Check against rolePermissions from config/roles.ts
  return true;
}
