export type UserRole = "buyer" | "seller" | "admin";
export const ROLE_HIERARCHY: Record<UserRole, number> = {
  buyer: 1,
  seller: 2,
  admin: 3,
};
export const hasRole = (userRole: UserRole, required: UserRole) =>
  ROLE_HIERARCHY[userRole] >= ROLE_HIERARCHY[required];
