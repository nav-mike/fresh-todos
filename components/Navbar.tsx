import { Button } from "./Button.tsx";

export function Navbar() {
  const today = new Date();

  return (
    <nav class="flex flex-row items-center justify-evenly bg-gray-300 p-2">
      <div class="flex flex-row items-center gap-4">
        <Button>&lsaquo;</Button>
        <span>{today.toDateString()}</span>
        <Button>&rsaquo;</Button>
      </div>
      <div class="flex flex-row items-center gap-4">
        <a href="/" class="hover:underline">LogIn</a>
        <a href="/" class="hover:underline">SignUp</a>
      </div>
    </nav>
  );
}
