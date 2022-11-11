import { Head } from "https://deno.land/x/fresh@1.1.1/runtime.ts";
import CreateTodoForm from "../../islands/CreateTodoForm.tsx";
import Navbar from "../../islands/Navbar.tsx";

export default function NewTodo() {
  return (
    <>
      <Head>
        <title>New Todo</title>
      </Head>

      <div class="flex flex-col gap-4">
        <Navbar />
        <div class="p-4 mx-auto max-w-screen-md">
          <h1 class="text-2xl font-bold">New Todo</h1>
          <CreateTodoForm />
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
    </>
  );
}
