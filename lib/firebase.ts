const API_KEY = Deno.env.get("FIREBASE_API_KEY");

export interface ISignUpResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

export interface ITodo {
  id?: string;
  title: string;
  type: string;
  completed: boolean;
  date: string;
}

export const signUp = async (email: string, password: string) => {
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, returnSecureToken: true }),
    },
  );
  if (!response.ok) throw new Error(response.statusText);

  return await response.json() as ISignUpResponse;
};

export const signIn = async (email: string, password: string) => {
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, returnSecureToken: true }),
    },
  );
  if (!response.ok) throw new Error(response.statusText);

  return await response.json() as ISignUpResponse;
};

export const getUserData = async (idToken: string) => {
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken }),
    },
  );
  if (!response.ok) throw new Error(response.statusText);

  return await response.json() as { users: [ISignUpResponse] };
};

export const createTodo = async (
  idToken: string,
  localId: string,
  todo: ITodo,
) => {
  const response = await fetch(
    `https://deno-todos-default-rtdb.europe-west1.firebasedatabase.app/todos.json?auth=${idToken}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...todo, userId: localId }),
    },
  );

  if (!response.ok) throw new Error(response.statusText);

  return await response.json() as { name: string };
};

export const getTodos = async (idToken: string, localId: string) => {
  const response = await fetch(
    `https://deno-todos-default-rtdb.europe-west1.firebasedatabase.app/todos.json?auth=${idToken}&orderBy="userId"&equalTo="${localId}"`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    console.log(response);
    throw new Error(response.statusText);
  }

  const data = await response.json() as { [key: string]: ITodo };

  return Object.keys(data).map((key) => ({ ...data[key], id: key } as ITodo));
};
