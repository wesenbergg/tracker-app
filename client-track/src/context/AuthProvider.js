import dataContext from './dataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'log_in':
      return {...state, isLoggedIn: true}
    case 'log_out':
      return {...state, isLoggedIn: false}
    case 'add_error':
      return {...state, errorText: action.payload.eMessage}
    default:
      return state
  }
}

const logIn = (dispatch) => async (credentials, callback) => {
  const res = true //TODO: POST LOGIN
  (res) ? callback(): dispatch({ type: 'add_error', payload: {eMessage: 'Wrong credentials'} })
}

const logOut = (dispatch) => (credentials, callback) => {
  dispatch({ type: 'log_in', payload: {...credentials} })
  callback()
}

export const { Context, Provider } = dataContext(
  authReducer, //reducer
  { logIn, logOut }, //actions
  [{ isLoggedIn: false }] //initial state
)