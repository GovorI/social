import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/posts-reducer";


function MyPosts(props) {
    let postsElements = props.postsData.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    function addPost() {
        props.dispatch(addPostActionCreator())
    }

    function changePostText(e) {
        props.dispatch(changePostTextActionCreator(e.target.value))
    }

    return (
        <div className={s.postBlock}>
            my posts
            <div>
                <div>
                    <textarea onChange={changePostText} value={props.postsData.newPostText}
                              placeholder='enter your post...'/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
                {/*<Post message="Hi, How are you?" likes="15" />*/}
                {/*<Post message="This is my first post!" likes="20" />*/}
            </div>
        </div>
    );
}

export default MyPosts;
