import { Component } from '@angular/core';

@Component({
  selector: 'app-hamburgermenu',
  templateUrl: './hamburgermenu.component.html',
  styleUrls: ['./hamburgermenu.component.scss']
})
export class HamburgermenuComponent {


  isin = false;

  onMouseEnter() {
    const verticleNav = document.getElementsByClassName("verticle-nav")[0] as HTMLElement | null;
    if (verticleNav) {
      verticleNav.setAttribute("id", "verticle-navbar");
      this.isin = true;
      
    }
  }
  
  onMouseLeave() {
    const verticleNav = document.getElementsByClassName("verticle-nav")[0] as HTMLElement | null;
    if (verticleNav) {
      this.isin = false;
      if (verticleNav.hasAttribute("id")) {
        setTimeout(() => {
          if (!this.isin) {
            verticleNav.removeAttribute("id");
          }
        }, 300)
      }
      
    }
  }
  

  onItemClick(item: EventTarget | null) {
    const hamburgerItems = document.getElementsByClassName("hamburger-item");

    for (let i of Array.from(hamburgerItems)) {
      i.classList.remove("selected");
    }
    if (item instanceof HTMLElement) {
      item.classList.add("selected");
    }
  }

}
