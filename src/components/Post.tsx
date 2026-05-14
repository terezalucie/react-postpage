type PostProps = {
  author: string;
  body: string;
};

export default function Post({ author, body }: PostProps) {
  return (
    <div className="w-60 mb-10 p-4 rounded-xl border-t-4 border-(--accent-border) bg-(--bg) shadow-(--shadow) hover:border-t-6">
      <p className="text-2xl font-bold mb-2 text-(--accent)">
        {author}
      </p>
      <p className="text-base font-mono text-(--text) leading-relaxed">
        {body}
      </p>
    </div>
  );
}