import { ITodo } from "../lib/firebase.ts";

const typeSymbol = (type: ITodo["type"]) => {
  switch (type) {
    case "main":
      return "📌";
    case "addition":
      return "📝";
    case "subtodo":
      return "📜";
  }
};

export default function TodoList({ data }: { data: ITodo[] }) {
  return (
    <div class="flex flex-col gap-4 w-full">
      <div>
        <a href="/todos/new" class="text-blue-500">
          Add new todo
        </a>
      </div>
      {data.map((item) => (
        <div
          class={`${
            item.completed ? `line-through` : ""
          } w-full flex flex-row gap-4 items-center`}
        >
          <div>{typeSymbol(item.type as ITodo["type"])}</div>
          <div class="flex-1">{item.title}</div>
          <button title={item.completed ? "undone" : "done"}>
            {item.completed ? "❎" : "✅"}
          </button>
        </div>
      ))}
    </div>
  );
}
