// Import the necessary libraries
import { JSDOM } from 'jsdom';
import { afterEach, beforeEach } from 'mocha';
import { expect } from 'chai';
import router from './Router.ts';
import { ErrorPage } from '../pages/error-page/index.ts';
import { Login } from '../pages/home/modules/login/index.ts';

describe.only('Router test', () => {
  beforeEach(() => {
    const html = '<!DOCTYPE html><html><body><div id="app"></div></body></html>';
    const { window } = new JSDOM(html, { url: 'http://localhost:5173/' });
    // @ts-ignore
    global.window = window.window;
    global.document = window.document;
  });

  afterEach(() => {
    // @ts-ignore
    delete global.window;
    // @ts-ignore
    global.document = undefined;
  });

  it('should render content on a given route', () => {
    router.use('/', Login).use('/500', ErrorPage);
    router.start();
    router.go('/500');
    const appElement = global.document.querySelector('#app');
    expect(appElement!.innerHTML).to.include('500');
  });

  it('should go back', () => {
    router.use('/', Login).use('/500', ErrorPage).start();
    router.go('/500');
    router.back();
  });
});
