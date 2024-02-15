export async function fetchTodos(authorId: string | null | undefined) {
  if (!authorId) return
  const response = await fetch("http://localhost:3000/todo", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Author-Id": authorId
    },
  });
  console.log(response);
  const todos = await response.json();
  return todos;
}
