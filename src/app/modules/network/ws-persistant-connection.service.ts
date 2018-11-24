import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WsPersistantConnectionService {
  private _connection: WebSocketSubject<string>;
  get connection(): Observable<string> {
    return this._connection.asObservable();
  }

  constructor() {
  }

  init(url: string, token: string): void {
    if (this._connection) {
      return;
    }

    this._connection = webSocket<string>({
      url: `${url}?Authorization=Bearer ${token}`,
      serializer: it => it,
      deserializer: it => it.data,
      openObserver: {
        next: it => {
          console.log('Ws Connection OPENED');
        }
      },
      closeObserver: {
        next: it => {
          this._connection = null;
          console.log('Ws Connection CLOSED');
        }
      },
    });
  }

  send(payload: string): void {
    if (!this._connection) {
      throw Error('Not connected');
    }

    this._connection.next(payload);
  }
}
