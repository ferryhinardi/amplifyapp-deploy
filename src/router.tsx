import { Route, ReactLocation, MakeGenerics } from 'react-location';
// import Homepage from './components/Home/Homepage';

export const routes: Route[] = [
  {
    path: '/',
    // element: <Homepage />,
    import: () => import('./components/Home/homeModules').then((m) => m.default),
  },
  {
    path: '/about',
    element: <div>{'About Page'}</div>,
  },
  {
    path: '/posts',
    element: <div>{'Post Page'}</div>,
  },
  {
    path: '/pricing',
    element: <div>{'Pricing Page'}</div>,
  },
  {
    path: '/docs',
    element: <div>{'Docs Page'}</div>,
  },
  {
    path: '/signin',
    element: <div>{'Sign In Page'}</div>,
  },
  {
    path: '/signup',
    element: <div>{'Sign Up Page'}</div>,
  },
];

export const location = new ReactLocation();

export type LocationGeneric = MakeGenerics<{}>;
