import PostAvatarIncognito from './../incognito.jpg';
import PostAvatar from './../post-avatar.png';
import PostAvatarSecond from './../post-avatar-2.png';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    { id: '1', name:'Max L.', avatar: `${PostAvatar}`, message: 'React.js is an amazing library for building user interfaces, combining simplicity with power. Its component-based approach and declarative coding style make app development intuitive and convenient. Hooks and optimized rendering make state management effortless while boosting performance. It\'s a tool that brings freedom and joy to creating modern web applications!', likesCount: 7 },
    { id: '2', name:'Artur O.', avatar: `${PostAvatarSecond}`, message: '+ Rep', likesCount: 5 }
  ],
  newPostText: 'Hello!'
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const id = state.postsData.length + 1
      const newPost = {
        id: `${id}`,
        name: 'Incognito',
        avatar: `${PostAvatarIncognito}`,
        message: state.newPostText,
        likesCount: 0
      }
      if (state.newPostText.length > 0) {
        state.postsData.push(newPost);
        state.newPostText = '';
      }

      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;

      return state;
    default: 
      return state;
  } 
};

export const addPostActionCreator = () => ({ type: ADD_POST }); // short format, when function returns something
export const updateNewPostTextActionCreator = (text) => { // long format
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  };
};

export default profileReducer;

