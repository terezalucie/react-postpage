export default function NewPost() {
  return (
    <form className="max-w-lg w-full mx-auto mt-10 p-6 rounded-xl border border-(--border) bg-(--bg) shadow-(--shadow)">

      <p className="flex flex-col gap-2 mb-6">
        <label className="font-mono text-lg text-(--text-h)" htmlFor="body">
          Text
        </label>

        <textarea
          className="w-full min-h-30 rounded-md p-3 text-(--text) bg-(--social-bg) border border-(--border) focus:outline-none focus:ring-2 focus:ring-(--accent)"
          name="body"
          id="body"
          required
          rows={4}
        />
      </p>

      <p className="flex flex-col gap-2 mb-6">
        <label className="font-mono text-lg text-(--text-h)" htmlFor="name">
          Your name
        </label>

        <input
          className="w-full rounded-md p-3 text-(--text) bg-(--social-bg) border border-(--border) focus:outline-none focus:ring-2 focus:ring-(--accent)"
          name="name"
          id="name"
          required
        />
      </p>

      <button
        type="submit"
        className="w-full py-3 rounded-md bg-(--accent) text-white font-semibold hover:opacity-90 transition"
      >
        Create Post
      </button>
    </form>
  );
}