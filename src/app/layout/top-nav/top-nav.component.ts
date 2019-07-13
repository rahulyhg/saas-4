import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../services/side-nav.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(public sideNavService: SideNavService) { }

  ngOnInit() {
  }

}
