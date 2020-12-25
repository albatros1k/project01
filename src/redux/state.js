let store = {
  _state: {
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
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State is changed");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = store;
