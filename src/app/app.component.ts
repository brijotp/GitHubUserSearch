import { Component, OnInit  } from '@angular/core';
import { GithubApiService } from './github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users: any[] = []; 

  constructor(private githubApiService: GithubApiService) { }

  ngOnInit(): void {
    this.githubApiService.fetchUsers().subscribe(users => {
      this.users = users;
    });
  }

  onQueryChange(query: string) {
    if (query.trim().length > 0) {
      this.githubApiService.fetchUsers(query).subscribe(users => {
        this.users = users.items;
      });
    } else {      
      this.users = [];
    }
  }

}
