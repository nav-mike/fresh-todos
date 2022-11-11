// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/api/joke.ts";
import * as $2 from "./routes/index.tsx";
import * as $3 from "./routes/signIn.tsx";
import * as $4 from "./routes/signUp.tsx";
import * as $5 from "./routes/todos/new.tsx";
import * as $$0 from "./islands/Navbar.tsx";
import * as $$1 from "./islands/SignInForm.tsx";
import * as $$2 from "./islands/SignUpForm.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/api/joke.ts": $1,
    "./routes/index.tsx": $2,
    "./routes/signIn.tsx": $3,
    "./routes/signUp.tsx": $4,
    "./routes/todos/new.tsx": $5,
  },
  islands: {
    "./islands/Navbar.tsx": $$0,
    "./islands/SignInForm.tsx": $$1,
    "./islands/SignUpForm.tsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
