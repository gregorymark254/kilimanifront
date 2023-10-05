import React, { createContext,useReducer,useContext } from 'react'


const Auth = createContext()

const AuthContext = ({children}) => {

  const initialState = {
    userInfo : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    like :  [],
  }

  const authReducer = (state,action) => {
    switch (action.type) {
      case "USER_SIGNIN" :
        return {...state, userInfo:action.payload}   
      case "USER_SIGNOUT":
        return {...state, userInfo:null}
        case "LIKE":
          return {...state,like : [...state.like, {...action.payload, qty:1}]}
        case "UNLIKE":
          return {...state, like:state.like.filter(product => product._id !== action.payload._id)}
      default:
        return state;
    }
  }

  const [state,dispatch] = useReducer(authReducer, initialState)

  return (
    <div>
      <Auth.Provider value={{state,dispatch}}>
        {children}
      </Auth.Provider>
    </div>
  )
}

export default AuthContext

export const AuthState = () => {
  return useContext(Auth)
} 