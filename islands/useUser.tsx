import { useEffect, useState } from "preact/hooks";

export default function useUser() {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const idToken = document.cookie.split(";").find((cookie) => {
      return cookie.trim().startsWith("todos_idToken=");
    })?.split("=")[1];

    if (idToken) {
      setUser(idToken);
    }
  }, []);

  return { user };
}
