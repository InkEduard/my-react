import PostAvatar from './../post-avatar.png';
import PostAvatarSecond from './../post-avatar-2.png';

let initialState = {
  friends: [
    { id: '1', name: 'Artur O.', avatar: `${PostAvatar}` },
    { id: '2', name: 'Max L.', avatar: `${PostAvatarSecond}`},
    { id: '3', name: 'Vlad P.', avatar: ''}
  ]
};

const sidebarReducer = (state = initialState, action) => {

  return state;
}

export default sidebarReducer;