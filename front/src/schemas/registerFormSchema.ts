import { z } from "zod";

export const clientRegisterSchema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(4),
  phone: z.string().min(6).max(12),
});
