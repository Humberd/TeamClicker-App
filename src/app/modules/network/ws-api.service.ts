import { Injectable } from '@angular/core';
import { WsPersistantConnectionService } from './ws-persistant-connection.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WsApiService {
  private url = 'ws://localhost:8080/path';
  private token = 'eyJhbGciOiJSUzUxMiJ9.eyJhY2NvdW50SWQiOjYyLCJhdXRoZW50aWNhdGlvbk1ldGhvZCI6IlVTRVJOQU1FX1BBU1NXT1JEIiwicm9sZXMiOlsiVVNFUiJdLCJqdGkiOiIyMDAyNWVhMy1mYmY2LTQyMmYtOGUyNC0zOWFkM2I5ZTUwODMiLCJleHAiOjEwMTczNDE5NjQ4LCJpYXQiOjE1MzM0MTk2NDh9.KnPEWt3tmPMmCPpbP4TV5G9KdDA8OmWU-_-JT9qVOjXbA0ncUuHFxLyqJgI1iaIjhR7b_4QgxVWoAClXmF7fqGJLuBIgtATHm-udfJwZtDPQ3EZm2_FsmF4ybOU3XZoiYy9_y7IOO4jwk-jzAhsjmJjILl26Y9cyflL5ArayKtFiHMXfH6DYUh6IfQkjId4xKbbTN8LUaeTBPTBH_syG8aBr5w5fXtTc2peNY-_Iofmiv2O7_jY4kXt5ENgeE4-vD0xDUGYKDpKYZyGQ9sjXyrkDzqpzSYEcrxqLSJj_sTOT18KP7dQjmrCaQOgprn2eUGp9NGi9q6VD4pKlh8Sy8w';

  constructor(
      private wsConnService: WsPersistantConnectionService
  ) {
  }

  send(payload: string) {
    this.wsConnService.send(payload);
  }

  connect() {
    this.wsConnService.init(this.url, this.token);
  }

  get connection(): Observable<string> {
    return this.wsConnService.connection;
  }
}
