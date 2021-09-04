import { withContextProvider } from './withContexts';

import App from './app';

import './index.css';

const Main = () => <App />

export default withContextProvider(Main)