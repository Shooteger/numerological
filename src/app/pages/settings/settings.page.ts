import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  switchEnabled: boolean;

  constructor(private renderer: Renderer2) { }

  onToogleTheme(event) {
    if (event.detail.checked) {
      //document.body.setAttribute('color-theme', 'dark');
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
      this.switchEnabled = true;
      localStorage.setItem('color-theme', 'dark');
    } else  {
      //document.body.setAttribute('color-theme', 'light');
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
      this.switchEnabled = true;
      localStorage.setItem('color-theme', 'light');
    }
  }

  ngOnInit() {
    this.renderer.setAttribute(document.body, 'color-theme', localStorage.getItem('color-theme'));
    if (localStorage.getItem('color-theme') == 'dark') {
      this.switchEnabled = true;
    } else {
      this.switchEnabled = false;
    }
  }

}
