import Avatar from './../avatar.png';

let initialState = {
  id: '1', name:'Eduard P.', avatar: `${Avatar}`, birthday: '02.03.1995', city: 'London', phone: '+1 (555) 555-5555' 
};

const userReducer = (state = initialState, action) => {
  return state;
};


export default userReducer;