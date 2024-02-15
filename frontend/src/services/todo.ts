import { apiUrl } from "@/config/api";
import { TTodoSchema } from "@/types/todoFormSchema";

export async function fetchTodos(authorId: string | null | undefined) {
  if (!authorId) return;
  const response = await fetch(apiUrl + "/todo", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Author-Id": authorId,
    },
  });
  const todos = await response.json();
  return todos;
}

export async function deleteTodo(id: number) {
  await fetch(apiUrl + "/todo/" + id, {
    method: "DELETE",
    mode: "cors",
  });
}

export async function addTask(newTodo: TTodoSchema) {
  const response = await fetch(apiUrl + "/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  return await response.json()
}
