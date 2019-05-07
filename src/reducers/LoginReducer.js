const initialState = {
  isLogin: false,
  name: ''
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isLogin: true,
        name: action.name
      };
    case 'LOGOUT':
      return {
        isLogin: false,
        name: ''
      };
    default:
      return state;
  }
};

export default LoginReducer;
