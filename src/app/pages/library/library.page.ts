import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  public more1: boolean = false;
  public more2: boolean = false;
  public more3: boolean = false;
  public more4: boolean = false;
  public more5: boolean = false;
  public more6: boolean = false;
  public more7: boolean = false;
  public more8: boolean = false;
  public more9: boolean = false;

  public more11: boolean = false;
  public more22: boolean = false;
  public more33: boolean = false;

  public more13: boolean = false;
  public more14: boolean = false;
  public more16: boolean = false;
  public more19: boolean = false;

  constructor() { }

  more1Switch() {
    this.more1 = !this.more1;
    if (this.more1 == true) {
      document.getElementById("showmore1").innerHTML = '<ion-icon name="remove-circle" style="margin: auto;"></ion-icon>Show less info';
    } else {
      document.getElementById("showmore1").innerHTML = '<ion-icon name="add-circle" style="margin: auto;"></ion-icon>Show more info';
    }
  }

  more2Switch() {
    this.more2 = !this.more2;
    if (this.more2 == true) {
      document.getElementById("showmore2").innerHTML = '<ion-icon name="remove-circle" style="margin: auto;"></ion-icon>Show less info';
    } else {
      document.getElementById("showmore2").innerHTML = '<ion-icon name="add-circle" style="margin: auto;"></ion-icon>Show more info';
    }
  }

  more3Switch() {
    this.more3 = !this.more3;
    if (this.more3 == true) {
      document.getElementById("showmore3").innerHTML = '<ion-icon name="remove-circle" style="margin: auto;"></ion-icon>Show less info';
    } else {
      document.getElementById("showmore3").innerHTML = '<ion-icon name="add-circle" style="margin: auto;"></ion-icon>Show more info';
    }
  }

  more4Switch() {
    this.more4 = !this.more4;
    if (this.more4 == true) {
      document.getElementById("showmore4").innerHTML = '<ion-icon name="remove-circle" style="margin: auto;"></ion-icon>Show less info';
    } else {
      document.getElementById("showmore4").innerHTML = '<ion-icon name="add-circle" style="margin: auto;"></ion-icon>Show more info';
    }
  }

  more5Switch() {
    this.more5 = !this.more5;
    if (this.more5 == true) {
      document.getElementById("showmore5").innerHTML = '<ion-icon name="remove-circle" style="margin: auto;"></ion-icon>Show less info';
    } else {
      document.getElementById("showmore5").innerHTML = '<ion-icon name="add-circle" style="margin: auto;"></ion-icon>Show more info';
    }
  }

  more6Switch() {
    this.more6 = !this.more6;
    if (this.more6 == true) {
      document.getElementById("showmore6").innerHTML = '<ion-icon name="remove-circle" style="margin: auto;"></ion-icon>Show less info';
    } else {
      document.getElementById("showmore6").innerHTML = '<ion-icon name="add-circle" style="margin: auto;"></ion-icon>Show more info';
    }
  }

  more7Switch() {
    this.more7 = !this.more7;
    if (this.more7 == true) {
      document.getElementById("showmore7").innerHTML = '<ion-icon name="remove-circle" style="margin: auto;"></ion-icon>Show less info';
    } else {
      document.getElementById("showmore7").innerHTML = '<ion-icon name="add-circle" style="margin: auto;"></ion-icon>Show more info';
    }
  }

  more8Switch() {
    this.more8 = !this.more8;
    if (this.more8 == true) {
      document.getElementById("showmore8").innerHTML = '<ion-icon name="remove-circle" style="margin: auto;"></ion-icon>Show less info';
    } else {
      document.getElementById("showmore8").innerHTML = '<ion-icon name="add-circle" style="margin: auto;"></ion-icon>Show more info';
    }
  }

  more9Switch() {
    this.more9 = !this.more9;
    if (this.more9 == true) {
      document.getElementById("showmore9").innerHTML = '<ion-icon name="remove-circle" style="margin: auto;"></ion-icon>Show less info';
    } else {
      document.getElementById("showmore9").innerHTML = '<ion-icon name="add-circle" style="margin: auto;"></ion-icon>Show more info';
    }
  }

  more11Switch() {
    this.more11 = !this.more11;
    if (this.more11 == true) {
      document.getElementById("showmore11").innerHTML = '<ion-icon name="remove-circle" style="margin: auto;"></ion-icon>Show less info';
    } else {
      document.getElementById("showmore11").innerHTML = '<ion-icon name="add-circle" style="margin: auto;"></ion-icon>Show more info';
    }
  }

  more22Switch() {
    this.more22 = !this.more22;
    if (this.more22 == true) {
      document.getElementById("showmore22").innerHTML = '<ion-icon name="remove-circle" style="margin: auto;"></ion-icon>Show less info';
    } else {
      document.getElementById("showmore22").innerHTML = '<ion-icon name="add-circle" style="margin: auto;"></ion-icon>Show more info';
    }
  }

  more33Switch() {
    this.more33 = !this.more33;
    if (this.more33 == true) {
      document.getElementById("showmore33").innerHTML = '<ion-icon name="remove-circle" style="margin: auto;"></ion-icon>Show less info';
    } else {
      document.getElementById("showmore33").innerHTML = '<ion-icon name="add-circle" style="margin: auto;"></ion-icon>Show more info';
    }
  }

  more13Switch() {
    this.more13 = !this.more13;
    if (this.more13 == true) {
      document.getElementById("showmore13").innerHTML = '<ion-icon name="remove-circle" style="margin: auto;"></ion-icon>Show less info';
    } else {
      document.getElementById("showmore13").innerHTML = '<ion-icon name="add-circle" style="margin: auto;"></ion-icon>Show more info';
    }
  }

  more14Switch() {
    this.more14 = !this.more14;
    if (this.more14 == true) {
      document.getElementById("showmore14").innerHTML = '<ion-icon name="remove-circle" style="margin: auto;"></ion-icon>Show less info';
    } else {
      document.getElementById("showmore14").innerHTML = '<ion-icon name="add-circle" style="margin: auto;"></ion-icon>Show more info';
    }
  }

  more16Switch() {
    this.more16 = !this.more16;
    if (this.more16 == true) {
      document.getElementById("showmore16").innerHTML = '<ion-icon name="remove-circle" style="margin: auto;"></ion-icon>Show less info';
    } else {
      document.getElementById("showmore16").innerHTML = '<ion-icon name="add-circle" style="margin: auto;"></ion-icon>Show more info';
    }
  }

  more19Switch() {
    this.more19 = !this.more19;
    if (this.more19 == true) {
      document.getElementById("showmore19").innerHTML = '<ion-icon name="remove-circle" style="margin: auto;"></ion-icon>Show less info';
    } else {
      document.getElementById("showmore19").innerHTML = '<ion-icon name="add-circle" style="margin: auto;"></ion-icon>Show more info';
    }
  }

  ngOnInit() {
  }

}
