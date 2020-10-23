import { AccountsService } from './../../services/accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};
  isAuth: boolean;

  constructor(private accountService: AccountsService) { }

  ngOnInit() {
  }

  login() {
    this.accountService.login(this.model)
      .subscribe(response => {
        console.log(response);
        this.isAuth = true;
      }, err => {
        console.log(err);
      });
  }

  logout() {
    this.isAuth = false;
  }
}
