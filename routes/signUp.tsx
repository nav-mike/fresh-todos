export default function SignUp() {
  return (
    <div class="flex flex-col gap-4">
      <div class="p-4 mx-auto">
        <h1 class="text-2xl font-bold">Sign Up</h1>
        <form class="flex flex-col gap-4">
          <div class="flex flex-col gap-2 pt-2">
            <label class="text-sm font-bold text-gray-500">Email</label>
            <input
              class="border border-gray-300 rounded-md p-2"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-bold text-gray-500">Password</label>
            <input
              class="border border-gray-300 rounded-md p-2"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-bold text-gray-500">
              Password confirmation
            </label>
            <input
              class="border border-gray-300 rounded-md p-2"
              type="password"
              placeholder="Confirm your password"
            />
          </div>
          <button class="bg-blue-500 text-white rounded-md p-2">
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
      </div>
    </div>
  );
}
