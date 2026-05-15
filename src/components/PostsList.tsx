import { useState } from "react"
import NewPost from "./NewPost"
import Post from "./Post"

export default function PostsList() {

    const [postBody, setPostBody] = useState<string>("");
    const [postAuthor, setPostAuthor] = useState<string>("");

    const handlePostBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostBody(e.target.value);
    } 
    const handleAuthorPostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostAuthor(e.target.value)
    }

    return (
        <div className="flex flex-col w-full h-full justify-center items-center">        
            <NewPost onPostChange={handlePostBodyChange} onAuthorChange={handleAuthorPostChange} />
            <ul className=" flex gap-5 mt-30">
                <Post author={postAuthor} body={postBody} />
            </ul>
        </div>
    )
}