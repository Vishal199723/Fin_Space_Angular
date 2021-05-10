import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MessageService } from 'src/app/MessageService/meaagse.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  mobileview: boolean=false;
  sidebaropen: boolean=false;

  constructor(private messageService: MessageService,) {     
      this.messageService.sendSession('true');
}

  
  ngOnInit(): void {
    this.openNav();
    this.closeNav();
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
       this.mobileview = false;
    }
    else {
      this.mobileview= true;
    }
  };
  openNav() {
    this.isMobileMenu();
    this.sidebaropen=false;
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }
  closeNav() {
    this.isMobileMenu();
    this.sidebaropen=true;
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }

}
