import { Component, OnInit } from '@angular/core';
import { WsApiService } from '../../modules/network/ws-api.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private wsApi: WsApiService) {
  }

  ngOnInit() {
  }

  foo() {
    this.wsApi.connect();
    this.wsApi.connection
        .pipe(
            take(5)
        )
        .subscribe(it => {
          console.log('Receiving event', it);
        });

    this.wsApi.send('Logged in');
  }

}
