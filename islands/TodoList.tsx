type Todo = {
  title: string;
  type: "main" | "addition" | "subtodo";
  isDone: boolean;
};

const todos = [{
  title: "daily",
  type: "main",
  isDone: false,
}, {
  title: "[integration] huddle",
  type: "main",
  isDone: false,
}, {
  title: "[integration] fix webhook",
  type: "main",
  isDone: false,
}, {
  title: "[v4] blocked timeslots",
  type: "main",
  isDone: false,
}, {
  title: "[v4]",
  type: "main",
  isDone: true,
}, {
  title: "text to Retta",
  type: "addition",
  isDone: false,
}, {
  title: "[c] Bath shelf 3",
  type: "addition",
  isDone: false,
}, {
  title: "washing machine",
  type: "subtodo",
  isDone: false,
}, {
  title: "oven",
  type: "subtodo",
  isDone: false,
}, {
  title: "Bath shelf 1",
  type: "subtodo",
  isDone: false,
}, {
  title: "Bath shelf 2",
  type: "subtodo",
  isDone: false,
}];

const typeSymbol = (type: Todo["type"]) => {
  switch (type) {
    case "main":
      return "📌";
    case "addition":
      return "📝";
    case "subtodo":
      return "📜";
  }
};

export default function TodoList() {
  return (
    <div class="flex flex-col gap-4 w-full">
      <div>
        <a href="/todos/new" class="text-blue-500">
          Add new todo
        </a>
      </div>
      {todos.map((item) => (
        <div
          class={`${
            item.isDone ? `line-through` : ""
          } w-full flex flex-row gap-4 items-center`}
        >
          <div>{typeSymbol(item.type as Todo["type"])}</div>
          <div class="flex-1">{item.title}</div>
          <button title={item.isDone ? "undone" : "done"}>
            {item.isDone ? "❎" : "✅"}
          </button>
        </div>
      ))}
    </div>
  );
}
