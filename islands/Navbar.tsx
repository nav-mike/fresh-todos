import { Button } from "../components/Button.tsx";
import { useEffect, useState } from "preact/hooks";

export default function Navbar() {
  const [user, setUser] = useState<string | null>(null);
  const today = new Date();

  useEffect(() => {
    const idToken = document.cookie.split(";").find((cookie) => {
      return cookie.trim().startsWith("todos_idToken=");
    })?.split("=")[1];

    if (idToken) {
      setUser(idToken);
    }
  }, []);

  const signOutHandler = () => {
    setUser(null);
    document.cookie = "todos_idToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  };

  return (
    <nav class="flex flex-row items-center justify-evenly bg-gray-300 p-2">
      <div class="flex flex-row items-center gap-4">
        <Button>&lsaquo;</Button>
        <span>{today.toDateString()}</span>
        <Button>&rsaquo;</Button>
      </div>
      <div class="flex flex-row items-center gap-4">
        {!user && <a href="/signIn" class="hover:underline">LogIn</a>}
        {!user && <a href="/signUp" class="hover:underline">SignUp</a>}
        {user && (
          <button
            class="hover:underline"
            onClick={signOutHandler}
          >
            LogOut
          </button>
        )}
      </div>
    </nav>
  );
}
