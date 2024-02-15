import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../services/todo";
import { TTodo } from "../types/todo";

export function Todos({ userId }: { userId: string | undefined | null }) {
  const todos = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchTodos(userId),
  });

  if (todos.isPending) return <p>Loading todos...</p>;

  if (todos.isError) return <p>Something went wrong. Try again</p>;

  const data: TTodo[] = todos.data;

  console.log(data);

  if (data.length === 0) {
    console.log(123);
    return <p className="">No Todos</p>;
  }

  return (
    <div className="">
      <ul>
        {data.map((todo) => (
          <p>{todo.name}</p>
        ))}
      </ul>
    </div>
  );
}
