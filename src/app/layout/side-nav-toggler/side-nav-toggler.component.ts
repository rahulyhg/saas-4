import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../services/side-nav.service';

@Component({
  selector: 'app-side-nav-toggler',
  templateUrl: './side-nav-toggler.component.html',
  styleUrls: ['./side-nav-toggler.component.css']
})
export class SideNavTogglerComponent implements OnInit {

  constructor(public sidenavService: SideNavService) { }

  ngOnInit() {
  }

}
