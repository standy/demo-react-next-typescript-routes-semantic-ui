import {ComponentType} from 'react';
import {LinkProps, Router as TRouter} from 'next-routes';

const nextRoutes = require('next-routes');
const routes = nextRoutes();

routes.add('form', '/my-form');
routes.add('about', '/about/:tab?');

export const Link: ComponentType<LinkProps> = routes.Link;
export const Router: TRouter = routes.Router;
export default routes;
