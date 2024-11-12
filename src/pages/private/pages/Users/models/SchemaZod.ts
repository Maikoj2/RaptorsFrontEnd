import { z } from "zod";

export const NewUserSchema = z.object({
    Names: z.string().min(1, 'Name is required'),
    email: z.string().min(1, 'Email is required').email("Email is not valid"),
    password: z.string().min(8, 'password must be at least 8 characters'),
    repeatPassword: z.string().min(8, 'password must be at least 8 characters'),
    role: z.string().min(1, 'role is required'),
  }).refine(data => data.password === data.repeatPassword,
    { message: 'the passwords not match',path: ['repeatPassword']}
   )
  export  type FormUserValues = z.infer<typeof NewUserSchema>;
  