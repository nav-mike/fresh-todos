import { Handlers } from "$fresh/server.ts";
import { getUserData } from "../../lib/firebase.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    const idToken = req.headers.get("cookie")?.split(";").find((cookie) => {
      return cookie.trim().startsWith("todos_idToken=");
    })?.split("=")[1];

    if (!idToken) return ctx.renderNotFound();

    const data = await getUserData(idToken);
    const localId = data.users[0].localId;

    throw new Error("Not implemented");
  },
};
