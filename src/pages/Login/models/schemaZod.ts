import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email("Email is not valid").min(1, 'Please enter a email'),
    password: z.string().min(1, 'Please enter a password')
  })
  export  type FormLoginValues = z.infer<typeof LoginSchema>;
  