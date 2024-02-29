import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent implements OnInit {
  @Input() users!: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
