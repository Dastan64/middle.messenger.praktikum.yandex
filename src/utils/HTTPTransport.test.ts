import { afterEach, beforeEach, describe } from 'mocha';
import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import { expect } from 'chai';
import { HTTPTransport } from './HTTPTransport.ts';

describe('HTTP Transport test', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport;
  const requests: SinonFakeXMLHttpRequest[] = [];
  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    global.XMLHttpRequest = xhr;

    xhr.onCreate = (req) => {
      requests.push(req);
    };

    instance = new HTTPTransport('');
  });

  afterEach(() => {
    requests.length = 0;
    xhr.restore();
  });

  describe('HTTP Transport methods functionality', () => {
    it('should invoke get() method', () => {
      instance.get('/');

      const [request] = requests;

      expect(request.method).to.equal('GET');
    });

    it('should invoke post() method', () => {
      instance.post('/');

      const [request] = requests;

      expect(request.method).to.equal('POST');
    });

    it('should invoke put() method', () => {
      instance.put('/');

      const [request] = requests;

      expect(request.method).to.equal('PUT');
    });

    it('should invoke delete() method', () => {
      instance.delete('/');

      const [request] = requests;

      expect(request.method).to.equal('DELETE');
    });
  });

  describe('HTTP Transport data validity', () => {
    it('should invoke GET method with correct query params', () => {
      const url = '/chats';
      const params = {
        limit: 50,
      };
      instance.get(`${url}`, { data: params });
      const [request] = requests;
      expect(request.url).to.include(`${url}?limit=50`);
    });

    it('should invoke POST method with correct data', () => {
      const url = '/auth/signup';
      const data = {
        login: 'test',
        password: '123456qwerty',
      };
      instance.post(`${url}`, { data });
      const [request] = requests;
      expect(request.requestBody).to.equal(JSON.stringify(data));
    });

    it('should invoke PUT method with correct data', () => {
      const url = '/chats/users';
      const data = {
        users: [123],
        chatId: 123,
      };
      instance.put(`${url}`, { data });
      const [request] = requests;
      expect(request.requestBody).to.equal(JSON.stringify(data));
    });

    it('should invoke DELETE method with correct data', () => {
      const url = '/chats';
      const data = {
        chatId: 123,
      };
      instance.delete(`${url}`, { data });
      const [request] = requests;
      expect(request.requestBody).to.equal(JSON.stringify(data));
    });
  });

  describe('cookies sending validity', () => {
    it('should send cookies in the GET method', () => {
      instance.get('/');

      const [request] = requests;

      expect(request.withCredentials).to.equal(true);
    });

    it('should send cookies in the POST method', () => {
      instance.post('/', {});

      const [request] = requests;

      expect(request.withCredentials).to.equal(true);
    });

    it('should send cookies in the PUT method', () => {
      instance.put('/', {});

      const [request] = requests;

      expect(request.withCredentials).to.equal(true);
    });

    it('should send cookies in the DELETE method', () => {
      instance.delete('/', {});

      const [request] = requests;

      expect(request.withCredentials).to.equal(true);
    });
  });
});
