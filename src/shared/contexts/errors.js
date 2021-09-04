import { createContext, useReducer } from 'react';

const initial = {
  error: false,
  code: 0,
  description: '',
  name: '',
}

const Context = createContext();

const Reducer = (state, { type = "", code, description, name }) => {
  switch (type) {
    case 'set':
      return { ...state, code, description, name, error: true };
    case 'clean':
      return { ...state, ...initial };
    default:
      throw new Error(`Unhandled action type: ${type} for state errors`)
  }
}

export const ErrorProvider = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initial)
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Context;