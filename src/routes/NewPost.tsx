import { useState } from "react"
import classes from "./NewPost.module.css"
import type { PostStructure } from "./Post"


type NewPostProps = {
  onClose: () => void,
  onAddPost: (post: PostStructure) => void,
}

export default function NewPost({ onClose, onAddPost } : NewPostProps) {
    const [post, setPost] = useState<PostStructure>({
      id: "",
      body: "",
      author: "",
    }) 

    const handlePostChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setPost((prev) => ({
          ...prev,
          [e.target.name]: e.target.value
      }))
    }

    const handleSubmitForm = (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault()
      const postData: PostStructure = {
        id: post.id,
        body: post.body,
        author: post.author,
      }
      onAddPost(postData)
      onClose()

    }
      
  
  return (
    <form className={classes.form} onSubmit={handleSubmitForm}>

      <p className="flex flex-col gap-2 mb-6">
        <label className={classes.label} htmlFor="body">
          Text
        </label>

        <textarea
          onChange={handlePostChange}
          className={classes.textarea}
          name="body"
          id="body"
          required
          rows={3}
        />
      </p>
      <p className="flex flex-col gap-2 mb-6">
        <label className={classes.label} htmlFor="author">
          Your name
        </label>

        <input
          onChange={handlePostChange}
          className={classes.input}
          name="author"
          id="author"
          required
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onClose}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}