import { useEffect, useState } from "preact/hooks";
import { z } from "https://deno.land/x/zod@v3.16.1/mod.ts";

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  passwordConfirmation: z.string().min(8),
});

export default function SignUpForm() {
  const [touched, setTouched] = useState(false);
  const [errors, setErrors] = useState<z.ZodError | undefined>(undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleChange = () => {
    setErrors(undefined);
    try {
      const data = signUpSchema.parse({
        email,
        password,
        passwordConfirmation,
      });

      if (data.password !== data.passwordConfirmation) {
        setErrors(
          new z.ZodError([
            {
              path: ["passwordConfirmation"],
              message: "Passwords do not match",
              code: z.ZodIssueCode.custom,
            },
          ]),
        );
      }
    } catch (e) {
      if (e instanceof z.ZodError) {
        setErrors(e);
      } else {
        console.error(e);
      }
    }
  };

  useEffect(handleChange, [email, password, passwordConfirmation]);

  return (
    <form class="flex flex-col gap-4" method="POST" action="/signUp">
      <div class="flex flex-col gap-2 pt-2">
        <label class="text-sm font-bold text-gray-500">Email</label>
        <div class="flex flex-col gap-2">
          <input
            class={`border rounded-md p-2 ${
              touched && errors?.formErrors.fieldErrors.email
                ? "border-red-500"
                : "border-gray-300"
            }`}
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onInput={(e) => {
              setEmail((e.target as HTMLInputElement).value);
              setTouched(true);
            }}
          />
          {touched && errors?.formErrors.fieldErrors.email && (
            <span class="text-red-500">
              {errors?.formErrors.fieldErrors.email[0]}
            </span>
          )}
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm font-bold text-gray-500">Password</label>
        <div class="flex flex-col gap-2">
          <input
            class={`border rounded-md p-2 ${
              touched && errors?.formErrors.fieldErrors.password
                ? "border-red-500"
                : "border-gray-300"
            }`}
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onInput={(e) => {
              setPassword((e.target as HTMLInputElement).value);
              setTouched(true);
            }}
          />
          {touched && errors?.formErrors.fieldErrors.password && (
            <span class="text-red-500">
              {errors?.formErrors.fieldErrors.password[0]}
            </span>
          )}
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm font-bold text-gray-500">
          Password confirmation
        </label>
        <div class="flex flex-col gap-2">
          <input
            class={`border rounded-md p-2 ${
              touched && errors?.formErrors.fieldErrors.passwordConfirmation
                ? "border-red-500"
                : "border-gray-300"
            }`}
            type="password"
            placeholder="Confirm your password"
            value={passwordConfirmation}
            onInput={(e) => {
              setPasswordConfirmation((e.target as HTMLInputElement).value);
              setTouched(true);
            }}
          />
          {touched && errors?.formErrors.fieldErrors.passwordConfirmation && (
            <span class="text-red-500">
              {errors?.formErrors.fieldErrors.passwordConfirmation[0]}
            </span>
          )}
        </div>
      </div>
      <button
        class={`bg-blue-${
          errors !== undefined ? 100 : 500
        } text-white rounded-md p-2`}
        disabled={errors !== undefined}
      >
        Sign Up
      </button>
      <a
        href="/signIn"
        class="flex justify-center bg-gray-500 text-white rounded-md p-2"
      >
        Sign In
      </a>
      <div class="flex flex-row justify-between gap-4">
        <button>Google</button>
        <button>GitHub</button>
      </div>
    </form>
  );
}
