import NewPost from "../routes/NewPost";
import Post, { type PostStructure } from "./Post";
import Modal from "./Modal";
import classes from "./PostList.module.css";
import { useEffect, useState } from "react";

type PostsListProps = {
  isPosting: boolean;
  onClose: () => void;
};

type PostResponse = {
  posts: PostStructure[];
};

export default function PostsList({ isPosting, onClose }: PostsListProps) {
  const [posts, setPosts] = useState<PostStructure[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:8080/posts");
      const resData: PostResponse = await response.json();

      setPosts(resData.posts);
      setIsFetching(false);
    };

    fetchPosts();
  }, []);

  const handleAddPost = (postData: PostStructure) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((prev) => [postData, ...prev]);
  };
  return (
    <div>
      {isPosting && (
        <Modal onClose={onClose}>
          <NewPost onClose={onClose} onAddPost={handleAddPost} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading posts...</p>
        </div>
      )}
    </div>
  );
}
