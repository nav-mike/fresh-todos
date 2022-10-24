export default function SignIn() {
  return (
    <div class="flex flex-col gap-4">
      <div class="p-4 mx-auto">
        <h1 class="text-2xl font-bold">Sign In</h1>
        <p class="text-gray-500">Sign in to your account</p>
        <form class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
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
          <button class="bg-blue-500 text-white rounded-md p-2">
            Sign In
          </button>
          <a
            href="/"
            class="flex justify-center bg-gray-500 text-white rounded-md p-2"
          >
            Sign Up
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
