import { z } from "zod";

export const todoFormSchema = z.object({
  name: z
    .string()
    .max(255, { message: "Name cannot be more than 255 characters long" }),
});

export type TTodoFormSchema = z.infer<typeof todoFormSchema>;

export type TTodoSchema = TTodoFormSchema | {
  authorId: string;
};

export const todoFormDefaultValues = {
  name: "",
};

export type TTodo = {
  id: number;
  name: string;
  isCompleted: boolean;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
};
