const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
      newMessageBody: "",
    };

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return state;
      default:
        return state;
  }
};


export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default dialogsReducer;
