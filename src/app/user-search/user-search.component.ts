import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent implements OnInit {
  @Output() queryChanged = new EventEmitter<string>();
  querySubject = new Subject<string>();
  searchForm!: FormGroup;
  constructor() {}
  ngOnInit(): void {
    this.searchForm = new FormGroup({
      query: new FormControl(''),
    });

  this.querySubject.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    filter(query => query.trim().length > 0), 
    switchMap(query => of(query)) // Using mapTo
    ).subscribe(query => this.queryChanged.emit(query));
}

  onSubmit(): void {
    this.querySubject.next(this.searchForm.value.query);
  }
}
