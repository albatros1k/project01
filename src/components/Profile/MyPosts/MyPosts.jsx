import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  let postData = [
    { id: 1, message: "Hi how are you", likesCount: 12 },
    { id: 1, message: "It is my first post", likesCount: 11 },
  ];
  let postsElements = postData.map((p) => {
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
