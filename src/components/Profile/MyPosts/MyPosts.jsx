import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => {
    return <Post message={p.message} likesCount={p.likesCount} />;
  });
  return (
    <div className="postsBlock">
      my posts
      <div className={s.btn}>
        <textarea></textarea>
        <button className={s.button}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
