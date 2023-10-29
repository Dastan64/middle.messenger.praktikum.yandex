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

type HTTPMethod = (url: string, options?: OptionsWithoutMethod) => Promise<XMLHttpRequest>;

export class HTTPTransport {
  protected API_URL = 'https://ya-praktikum.tech/api/v2';

  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${this.API_URL}${endpoint}`;
  }

  get: HTTPMethod = (url, options = {}) => this.request(
    this.endpoint + url,
    {
      ...options,
      method: METHODS.GET,
    },
    options.timeout,
  );

  post: HTTPMethod = (url, options = {}) => this.request(
    this.endpoint + url,
    {
      ...options,
      method: METHODS.POST,
    },
    options.timeout,
  );

  put: HTTPMethod = (url, options = {}) => this.request(
    this.endpoint + url,
    {
      ...options,
      method: METHODS.PUT,
    },
    options.timeout,
  );

  delete: HTTPMethod = (url, options = {}) => this.request(
    this.endpoint + url,
    {
      ...options,
      method: METHODS.DELETE,
    },
    options.timeout,
  );

  request(url: string, options: Options, timeout: number = 5000): Promise<XMLHttpRequest> {
    const { data, headers, method } = options;

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
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
