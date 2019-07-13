import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { FilterPipe } from '../../../pipes/filter.pipe';

@Component({
  selector: 'app-colaborador-list',
  templateUrl: './colaborador-list.component.html',
  styleUrls: ['./colaborador-list.component.css']
})
export class ColaboradorListComponent implements OnInit {
  ngOnInit() {
  }

  rows = [];

  temp = [];

  columns = [{ prop: 'id', name: '#' }, { prop: 'name' }, { prop: 'email' }];
  @ViewChild(DatatableComponent, {}) table: DatatableComponent;

  constructor(public pipe: FilterPipe) {
    this.fetch(data => {
      // cache our list
      this.temp = [...data];

      // push our inital complete list
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `https://jsonplaceholder.typicode.com/comments`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    let keys = Object.keys(this.temp[0]);
    let colsAmt = Object.keys(this.temp[0]).length;
    // filter our data
    const temp = this.temp.filter(function (item) {
      for (let i = 0; i < colsAmt; i++) {
        // check for a match
        if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
          // found match, return true to add to result set
          return true;
        }
      }
    });


    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
