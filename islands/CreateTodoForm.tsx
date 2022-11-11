import useUser from "./useUser.tsx";

export default function CreateTodoForm() {
  const { user } = useUser();

  console.log(user);

  return (
    <form class="flex flex-col gap-4" method="POST" action="/todos">
      <div class="flex flex-col gap-2 pt-2">
        <label class="text-sm font-bold text-gray-500">Title</label>
        <input
          class="border rounded-md p-2 border-gray-300"
          type="text"
          name="title"
          placeholder="Enter todos title"
        />
        <input type="hidden" name="userId" value={user ?? undefined} />
      </div>

      <div class="flex flex-col gap-2 pt-2">
        <label class="text-sm font-bold text-gray-500">Type</label>
        <select
          class="border rounded-md p-2 border-gray-300"
          name="type"
          placeholder="Select todos type"
        >
          <option value="main">Main</option>
          <option value="side">Side</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div class="flex flex-col gap-2 pt-2">
        <label class="text-sm font-bold text-gray-500">Date</label>
        <input
          class="border rounded-md p-2 border-gray-300"
          type="date"
          name="date"
          placeholder="Enter todos date"
        />
      </div>

      <div class="flex flex-row justify-between text-center gap-2 pt-2">
        <button type="submit" class="bg-blue-500 text-white rounded-md p-2">
          Create
        </button>

        <a
          href="/"
          class="flex justify-center bg-gray-500 text-white rounded-md p-2"
        >
          Cancel
        </a>
      </div>
    </form>
  );
}
