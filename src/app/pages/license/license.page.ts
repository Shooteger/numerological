import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-license',
  templateUrl: './license.page.html',
  styleUrls: ['./license.page.scss'],
})
export class LicensePage implements OnInit {
  anio: number = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
