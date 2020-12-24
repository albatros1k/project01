import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => {
    return <Post message={p.message} likesCount={p.likesCount} />;
  });

  let newPostElement = React.createRef();
  const addPost = () => {
    let text = newPostElement.current.value;
    props.addPost (text)
    newPostElement.current.value ='';
  };

  return (
    <div className="postsBlock">
      my posts
      <div className={s.btn}>
        <textarea ref={newPostElement}></textarea>
        <button className={s.button} onClick={addPost}>
          Add post
        </button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
