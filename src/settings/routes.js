import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const routes = {
  notFound: {
    link: '*',
    component: NotFound,
    private: true,
  },
  home: {
    link: '/',
    component: Home,
    private: false,
  },
}

export default routes
