import { Component, OnInit } from '@angular/core';
import { IUser, users } from './components';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private users: IUser[] = users;
  private filterUser!: IUser[]
  public count = 3;
  public showUsers!: IUser[];
  public pages!: number[];
  public page = 1;


  constructor() { }

  ngOnInit(): void {
    this.filterUser = this.users;
    this.showUsers = this.filterUser;
    this.pages = this.getPages(this.users);
    this.getPageUser(0);
  }

  private getPages(data:IUser[]): number[] {
    return new Array(Math.ceil(data.length / this.count));
  }

  public onSearch(event: any): void {
    this.filterUser = this.users.filter(item => {
      return item.name.toUpperCase().includes(event.toUpperCase())
        || item.email.toUpperCase().includes(event.toUpperCase())
        || item.username.toUpperCase().includes(event.toUpperCase())
    });
    this.pages= this.getPages(this.filterUser);
    this.showUsers = this.filterUser;
    this.getPageUser(0);
  }

  public getPageUser(index: number): void {
    this.showUsers = this.filterUser.slice(index * this.count, this.count * (index + 1));
    this.page = index + 1;
  }

}
