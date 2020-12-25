let rerenderEntireTree = () => {
  console.log("State is changed");
};

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi how are you", likesCount: 12 },
      { id: 2, message: "It is my first post", likesCount: 11 },
    ],
    newPostText: "New post",
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "Hello" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "What about your development?" },
      { id: 4, message: "Yo" },
      { id: 5, message: "Yo" },
      { id: 6, message: "Yo" },
    ],
    dialogs: [
      { id: 1, name: "Albert" },
      { id: 2, name: "Viktoria" },
      { id: 3, name: "Viktor" },
      { id: 4, name: "Tatyana" },
      { id: 5, name: "Evgeniy" },
      { id: 6, name: "Kurul" },
    ],
  },
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
