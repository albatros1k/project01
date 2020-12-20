import React from 'react';
import s from './Profile.module.css';
const Profile = () =>{
	return (
  <div className = {s.content}>
    <div>
      <img src="https://content.presspage.com/uploads/2379/1920_ocean-sunset-195865.jpg?10000"/>
    </div>
    <div>
      ava + description
    </div>
    <div>
      my posts
      <div>
        New post
      </div>
      <div className = {s.posts}>
        <div className ={s.item}>post1</div>
        <div className ={s.item}>post2</div>
      </div>
    </div>
    Main content
    </div>
	)
}

export default Profile;
