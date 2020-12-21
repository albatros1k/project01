import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = () =>{
	return (
  <div className ={s.bg}>
    <ProfileInfo/>
    <MyPosts/>
    </div>
	)
}

export default Profile;
