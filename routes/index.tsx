import { Handlers, PageProps } from "$fresh/server.ts";
import Navbar from "../islands/Navbar.tsx";
import TodoList from "../islands/TodoList.tsx";
import { getTodos, getUserData, ITodo } from "../lib/firebase.ts";

export const handler: Handlers<ITodo[]> = {
  async GET(req, ctx) {
    const idToken = req.headers.get("cookie")?.split(";").find((cookie) => {
      return cookie.trim().startsWith("todos_idToken=");
    })?.split("=")[1];

    if (!idToken) return ctx.renderNotFound();

    const userData = await getUserData(idToken);
    const localId = userData.users[0].localId;

    const data: ITodo[] = await getTodos(idToken, localId);

    return ctx.render(data);
  },
};

export default function Home({ data }: PageProps<ITodo[]>) {
  return (
    <div class="flex flex-col gap-4">
      <Navbar />
      <div class="p-4 mx-auto max-w-screen-md">
        <TodoList data={data} />
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
