import { queryStringify } from './queryStringify.ts';

enum METHODS {
  DELETE = 'DELETE',
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
}

type Options = {
  data?: any;
  headers?: {
    [headerName: string]: string;
  };
  method: METHODS;
  timeout?: number;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

type HTTPMethod<T> = (url: string, options?: OptionsWithoutMethod) => Promise<T>;

export class HTTPTransport {
  protected API_URL = 'https://ya-praktikum.tech/api/v2';

  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${this.API_URL}${endpoint}`;
  }

  get: HTTPMethod<Response> = (url, options = {}) => {
    return this.request(
      this.endpoint + url,
      {
        ...options,
        method: METHODS.GET,
      },
      options.timeout,
    );
  };

  post: HTTPMethod<Response> = (url, options = {}) => {
    return this.request(
      this.endpoint + url,
      {
        ...options,
        method: METHODS.POST,
      },
      options.timeout,
    );
  };

  put: HTTPMethod<Response> = (url, options = {}) => {
    return this.request(
      this.endpoint + url,
      {
        ...options,
        method: METHODS.PUT,
      },
      options.timeout,
    );
  };

  delete: HTTPMethod<Response> = (url, options = {}) => {
    return this.request(
      this.endpoint + url,
      {
        ...options,
        method: METHODS.DELETE,
      },
      options.timeout,
    );
  };

  request<Response>(url: string, options: Options = { method: METHODS.GET }, timeout: number = 5000): Promise<Response> {
    const { data, headers = { 'Content-Type': 'application/json' }, method } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;
      const requestUrl = isGet && !!data ? `${url}${queryStringify(data)}` : url;

      xhr.open(method, requestUrl);

      if (headers) {
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }

      xhr.onload = () => {
        resolve(JSON.parse(xhr.response));
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.withCredentials = true;
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
