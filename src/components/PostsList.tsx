import NewPost from "./NewPost"
import Post from "./Post"

export default function PostsList() {

    return (
        <div className="flex flex-col w-full h-full justify-center items-center">        
            <NewPost />
            <ul className=" flex gap-5 mt-30">
                <Post author='Maximilian' body='React is awesome!' />
                <Post author='Arthur' body='Check our courses!' />
            </ul>
        </div>
    )
}