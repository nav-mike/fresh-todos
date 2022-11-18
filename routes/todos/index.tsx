import { Handlers } from "$fresh/server.ts";
import { createTodo, getUserData, ITodo } from "../../lib/firebase.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    const idToken = req.headers.get("cookie")?.split(";").find((cookie) => {
      return cookie.trim().startsWith("todos_idToken=");
    })?.split("=")[1];

    if (!idToken) return ctx.renderNotFound();

    const data = await getUserData(idToken);
    const localId = data.users[0].localId;
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const type = formData.get("type") as string;
    const date = formData.get("date") as string;

    const todo: ITodo = { title, type, date, completed: false };
    await createTodo(idToken, localId, todo);

    return new Response(null, {
      headers: {
        "Location": "/",
      },
      status: 302,
    });
  },
};
