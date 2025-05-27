import PostAvatar from './../post-avatar.png';
import PostAvatarSecond from './../post-avatar-2.png';
import PostAvatarIncognito from './../incognito.jpg';
import Avatar from './../avatar.png';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import userReducer from './user-reducer';

let store = {
  _state: {
    user: {
      id: '1', name:'Eduard P.', avatar: `${Avatar}`, birthday: '02.03.1995', city: 'London', phone: '+1 (555) 555-5555' 
    },
    profilePage: {
      postsData: [
        { id: '1', name:'Max L.', avatar: `${PostAvatar}`, message: 'React.js is an amazing library for building user interfaces, combining simplicity with power. Its component-based approach and declarative coding style make app development intuitive and convenient. Hooks and optimized rendering make state management effortless while boosting performance. It\'s a tool that brings freedom and joy to creating modern web applications!', likesCount: 7 },
        { id: '2', name:'Artur O.', avatar: `${PostAvatarSecond}`, message: '+ Rep', likesCount: 5 }
      ],
      newPostText: 'Hello!'
    },
    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        { id: '1', name: 'Artur O.', avatar: `${PostAvatar}` },
        { id: '2', name: 'Max L.', avatar: `${PostAvatarSecond}`},
        { id: '3', name: 'Vlad P.', avatar: ''}
      ]
    }
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) { // { type: 'ADD-POST' }
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._state.user = userReducer(this._state.user, action);

    this._callSubscriber(this._state);
  }
}

window.store = store;

export default store;