import { z } from 'zod';

export const todoSchema = z.object({
  name: z
    .string()
    .max(255, { message: 'Name cannot be more than 255 characters long' }),
  authorId: z.number(),
  isCompleted: z.boolean().optional(),
});

export type todoDto = z.infer<typeof todoSchema>;
