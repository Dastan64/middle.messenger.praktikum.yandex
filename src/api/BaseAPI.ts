import { HTTPTransport } from '../utils/HTTPTransport.ts';

export abstract class BaseAPI {
  protected http: HTTPTransport;

  protected constructor(endpoint: string) {
    this.http = new HTTPTransport(endpoint);
  }
}
