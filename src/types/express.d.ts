import { Role } from "../../generated/prisma";
declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        name: string;
        email?: string | null;
        phone?: string | null;
        role: Role;
        isBanned: boolean;
        strikeCount: number;
        purchaseCount: number;
        avatar?: string | null;
      } | null;
    }
  }
}
