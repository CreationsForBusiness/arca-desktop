import { createContext, useReducer } from 'react';

const Context = createContext();

const Reducer = (state, { type }) => {
  switch (type) {
    case 'start':
      return true;
    case 'finish':
      return false;
    default:
      throw new Error(`Unhandled action type: ${type} for state ${state}`)
  }
}

export const LoadingProvider = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, false)
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Context;