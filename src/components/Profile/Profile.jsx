import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
const Profile = () =>{
	return (
  <div>
    <div>
      <img src="https://content.presspage.com/uploads/2379/1920_ocean-sunset-195865.jpg?10000"/>
    </div>
    <div>
      ava + description
    </div>
    <MyPosts/>
    </div>
	)
}

export default Profile;
