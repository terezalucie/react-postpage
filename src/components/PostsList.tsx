import NewPost from "./NewPost"
import Post, { type PostStructure } from "./Post"
import Modal from "./Modal";
import classes from "./PostList.module.css"
import { useState } from "react";

type PostsListProps = {
    isPosting: boolean,
    onClose: () => void,
}

export default function PostsList({ isPosting, onClose } :PostsListProps) {

    const [posts, setPosts] = useState<PostStructure[]>([])

    const handleAddPost = (postData: PostStructure) => {
        setPosts((prev) => [postData, ...prev])
    }
    return (
        <div>    
            {isPosting &&     
                <Modal onClose={onClose}>
                    <NewPost 
                        onClose={onClose} 
                        onAddPost={handleAddPost}
                    />
                </Modal>
            }
            {posts.length > 0 && (
                <ul className={classes.posts}> 
                    {posts.map(post => <Post id={post.id} author={post.author} body={post.body} />)}
                </ul>  
            )}
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'
                }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>

            )}
            
        </div>
    )
}
