import classes from "./Post.module.css"

export type PostStructure = {
  id: string,
  author: string;
  body: string;
};

export default function Post({ author, body }: PostStructure) {
  return (
    <div className={classes.post}>
      <p className={classes.author}>
        {author}
      </p>
      <p className={classes.text}>
        {body}
      </p>
    </div>
  );
}