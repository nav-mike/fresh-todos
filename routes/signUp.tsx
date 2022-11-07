import { Head } from "https://deno.land/x/fresh@1.1.1/runtime.ts";
import { Handlers } from "https://deno.land/x/fresh@1.1.1/server.ts";
import SignUpForm from "../islands/SignUpForm.tsx";
import { signUp } from "../lib/firebase.ts";

export const handler: Handlers = {
  POST: async (req, ctx) => {
    const formData = await req.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const user = await signUp(email, password);

    const now = new Date();
    const time = now.getTime();
    const expireTime = time + +user.expiresIn * 1000;
    now.setTime(expireTime);

    return new Response(null, {
      headers: {
        "Location": "/",
        "Set-Cookie":
          `todos_idToken=${user.idToken}; expires=${now.toUTCString()};`,
      },
      status: 302,
    });
  },
};

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div class="flex flex-col gap-4">
        <div class="p-4 mx-auto">
          <h1 class="text-2xl font-bold">Sign Up</h1>
          <SignUpForm />
        </div>
      </div>
    </>
  );
}
