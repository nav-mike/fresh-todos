import { Navbar } from "../components/Navbar.tsx";
import { TodoList } from "../components/TodoList.tsx";

export default function Home() {
  return (
    <div class="flex flex-col gap-4">
      <Navbar />
      <div class="p-4 mx-auto max-w-screen-md">
        <TodoList />
      </div>
      <footer class="absolute bottom-0">
        <a href="https://fresh.deno.dev">
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge.svg"
            alt="Made with Fresh"
          />
        </a>
      </footer>
    </div>
  );
}
