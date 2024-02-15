import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../services/todo";
import { columns } from "../types/todo";
import { TodoTable } from "./todoTable";
import { TTodo } from "@/types/todoFormSchema";
import { formatDate } from "@/utils/formatDate";

export function Todos({ userId }: { userId: string | undefined | null }) {
  const todos = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchTodos(userId),
  });

  if (todos.isPending) return <p>Loading todos...</p>;

  if (todos.isError) return <p>Something went wrong. Try again</p>;

  const data: TTodo[] = todos.data.map((todo: TTodo) => ({...todo, createdAt: formatDate(new Date(todo.createdAt))}));

  if (data.length === 0) {
    return <p className="">No Todos</p>;
  }

  return (
    <div className="">
      <ul>
        <TodoTable columns={columns} data={data} />
      </ul>
    </div>
  );
}
