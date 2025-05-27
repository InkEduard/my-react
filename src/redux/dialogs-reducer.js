import Avatar from './../avatar.png';
import PostAvatar from './../post-avatar.png';
import PostAvatarSecond from './../post-avatar-2.png';
import PostAvatarIncognito from './../incognito.jpg';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogsData: [
    { id: '1', name: 'Artur O.', avatar: `${PostAvatarSecond}`},
    { id: '2', name: 'Max L.', avatar: `${PostAvatar}`},
    { id: '3', name: 'Vlad P.', avatar: `${PostAvatarIncognito}`},
    { id: '4', name: 'Stanislav C.', avatar: `${PostAvatarIncognito}`},
    { id: '5', name: 'Stasyan V.', avatar: `${PostAvatarIncognito}`},
    { id: '6', name: 'Olegsii B.', avatar: `${PostAvatarIncognito}`}
  ],
  messageData: [
    { id: '1', name: 'you', avatar: `${Avatar}`, message: 'Have you tried that new AI photo generator?'},
    { id: '2', name: 'companion', avatar: `${PostAvatarSecond}`, message: 'Yeah, it\'s insane! It made me look like a medieval knight.'},
    { id: '3', name: 'you', avatar: `${Avatar}`, message: 'Haha, mine turned me into a wizard.'},
    { id: '4', name: 'companion', avatar: `${PostAvatarSecond}`, message: 'AI is getting way too good at this stuff.'},
    { id: '5', name: 'you', avatar: `${Avatar}`, message: 'True. It’s cool, but also a bit creepy.'},
    { id: '6', name: 'companion', avatar: `${PostAvatarSecond}`, message: 'You think it’ll replace artists one day?'},
    { id: '7', name: 'you', avatar: `${Avatar}`, message: 'Maybe... but I hope not. Creativity’s still human.'}
  ],
  newMessageText: 'Hello!'
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const id = state.messageData.length + 1
      const newMessage = {
        id: `${id}`,
        name: 'you',
        avatar: `${Avatar}`,
        message: state.newMessageText
      }
      if (state.newMessageText.length > 0) {
        state.messageData.push(newMessage);
        state.newMessageText = '';
      }

      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;

      return state;
    default: 
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE }); // short format, when function returns something
export const updateNewMessageTextActionCreator = (text) => { // long format
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
  };
};

export default dialogsReducer;