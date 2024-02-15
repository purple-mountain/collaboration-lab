import {
  TTodo,
  TTodoFormSchema,
  TTodoSchema,
  todoFormDefaultValues,
  todoFormSchema,
} from "@/types/todoFormSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DialogFooter } from "./ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { addTask } from "@/services/todo";

export function AddTaskForm({ userId }: { userId: string }) {
  const form = useForm<TTodoFormSchema>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: todoFormDefaultValues,
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (newTodo: TTodoSchema) => addTask(newTodo),
    onSuccess: (todo: TTodo) => {
      queryClient.setQueryData(["todos", todo.id], todo);
      queryClient.invalidateQueries({queryKey: ["todos"]});
    },
  });

  function handleAddTask(data: TTodoFormSchema) {
    mutate({ ...data, authorId: userId });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleAddTask)}
        className="w-[100%] p-6 space-y-8 rounded-lg border-border border"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Task Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit">Submit</Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </Form>
  );
}
