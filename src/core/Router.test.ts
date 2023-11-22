import { JSDOM } from 'jsdom';
import { afterEach, beforeEach } from 'mocha';
import { expect } from 'chai';
import { Router } from './Router.ts';
import { Login } from '../pages/home/modules/login/index.ts';
import { Register } from '../pages/home/modules/register/index.ts';

describe('Router Functionality Test', () => {
  const html = '<!DOCTYPE html><html><body><div id="app"></div></body></html>';
  beforeEach(() => {
    const { window } = new JSDOM(html, { url: 'https://localhost' });
    global.document = window.document;
  });

  afterEach(() => {
    Router.destroy();
    window.history.replaceState({}, '', '/');
  });

  it('should render content on a given route', () => {
    Router.getInstance().use('/', Login).use('/sign-up', Register);
    Router.getInstance().start();
    Router.getInstance().go('/sign-up');
    const appElement = global.document.querySelector('#app');
    const heading = appElement?.querySelector('h2');
    expect(heading).not.to.be.a('null');
    expect(heading!.textContent).to.equal('Регистрация аккаунта');
  });

  it('should go back', async () => {
    Router.getInstance().use('/', Login).use('/sign-up', Register);
    Router.getInstance().start();
    Router.getInstance().go('/sign-up');
    Router.getInstance().back();

    await new Promise<void>((resolve) => {
      window.addEventListener('popstate', () => {
        resolve();
      });
    });

    const appElement = global.document.querySelector('#app');
    const heading = appElement?.querySelector('h2');
    expect(heading).not.to.be.a('null');
    expect(heading!.textContent).to.equal('Вход');
  });
  // eslint-disable-next-line func-names

  it('should go forward', async () => {
    Router.getInstance().use('/', Login).use('/sign-up', Register);
    Router.getInstance().start();
    Router.getInstance().go('/sign-up');
    Router.getInstance().back();

    await new Promise<void>((resolve) => {
      window.addEventListener('popstate', () => {
        resolve();
      });
    });

    Router.getInstance().forward();

    await new Promise<void>((resolve) => {
      window.addEventListener('popstate', () => {
        resolve();
      });
    });

    const appElement = global.document.querySelector('#app');
    const heading = appElement?.querySelector('h2');
    expect(heading).not.to.be.a('null');
    expect(heading!.textContent).to.equal('Регистрация аккаунта');
  });
});

describe('Router Singleton Test', () => {
  it('should have a single instance', () => {
    const routerInstance1 = Router.getInstance();
    const routerInstance2 = Router.getInstance();

    expect(routerInstance1).to.equal(routerInstance2);
  });

  it('should destroy the instance', () => {
    const routerInstance1 = Router.getInstance();

    Router.destroy();

    const routerInstance2 = Router.getInstance();

    expect(routerInstance1).not.to.equal(routerInstance2);
  });
});
