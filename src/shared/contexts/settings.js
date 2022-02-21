import { createContext, useReducer } from 'react';

const { language } = new Intl.Locale(navigator.language || 'es');
const lang = ['es'].find(l => language.toLowerCase() === l) || 'es';

const initial = {
  installed: false,
  name: null,
  activation_code: null,
  expiration_date: null,
  activated: null,
  lang,
  logo: null
}

const Context = createContext();

const Reducer = (state, { type = "", ...setting }) => {
  switch (type) {
    case 'set':
      return { ...state, ...setting }
    case 'set_lang':
      return { ...state, lang: setting.lang };
    case 'clean':
      return { ...state, ...initial };
    default:
      throw new Error(`Unhandled action type: ${type} for state settings`)
  }
}

export const SettingsProvider = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initial)
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Context;

