import React from 'react';
import s from './Post.module.css';
const Post = (props) =>{
	return (
        <div className ={s.item}>
          <img src ='https://i.pinimg.com/originals/e3/63/16/e36316cfd05ca21e44d8fabcf1a192be.jpg' alt='Something'></img>
          {props.message}
          <div>
            <span>like {props.likesCount}</span>
          </div>
        </div>
	)
}

export default Post;
