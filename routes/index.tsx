import { Navbar } from "../components/Navbar.tsx";
import { TodoList } from "../components/TodoList.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class="flex flex-col gap-4">
      <Navbar />
      <div class="p-4 mx-auto max-w-screen-md">
        <TodoList />
      </div>
    </div>
  );
}
