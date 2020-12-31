import React from "react";
import { connect } from "react-redux";
import store, {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/store";
import Dialogs from "../../Dialogs/Dialogs";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      store.dispatch(action);
    },
    addPost: () => {
      store.dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
