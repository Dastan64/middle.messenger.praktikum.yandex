import Block from './Block.ts';
import { Route } from './Route.ts';

export class Router {
  routes: Route[];

  private readonly _rootQuery: string;

  private _currentRoute: null | Route;

  protected history: History;

  constructor(rootQuery: string) {
    // if (Router._instance) {
    //   return Router._instance;
    // }
    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    // Router._instance = this;
  }

  use(pathname: string, block: new () => Block) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes?.push(route);
    return this;
  }

  start() {
    window.onpopstate = (event: PopStateEvent) => {
      const currentTarget = event.currentTarget as Window;
      this._onRoute(currentTarget.location.pathname);
    };
    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string): Route {
    return this.routes.find((route) => route.match(pathname))!;
  }
}
