import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () =>{
  let postData =[
    {id:1, message:'Hi how are you',likesCount:12},
    {id:1, message:'It is my first post',likesCount:11},
  ]
	return (
<div className='postsBlock'>
      my posts
      <div className={s.btn}>
        <textarea></textarea>
        <button className={s.button}>Add post</button>
      </div>
      <div className = {s.posts}>
    <Post message={postData[0].message} likesCount = {postData[0].likesCount}/>
    <Post message ={postData[1].message} likesCount ={postData[1].likesCount}/>
      </div>
    </div>
	)
}

export default MyPosts;
