import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-myfriends',
  templateUrl: './myfriends.component.html',
  styleUrls: ['./myfriends.component.css'],
})
export class MyfriendsComponent implements OnInit {

  _httpCall:HttpClient;
  friendsList:any;

constructor(_httpCallREF:HttpClient)
 {
    this._httpCall = _httpCallREF;
}

  getFriends()
  {
    this._httpCall.get('https://dummy.restapiexample.com/api/v1/employees').subscribe( f =>{
      this.friendsList  = f;
      return this.friendsList;
    })
  }


  ngOnInit(): void {
  }

}
