import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddTaskForm } from "./addTaskForm";

export function TodoCreateDialog({ userId }: { userId: string }) {
  return (
    <div className="mb-auto mt-7">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
          </DialogHeader>
          <AddTaskForm userId={userId} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
