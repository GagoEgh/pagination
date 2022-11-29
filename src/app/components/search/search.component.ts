import { Component, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent {

  data!: string;

  @Output()search = new EventEmitter<string>()


  
  onchange(event: any) {
    // console.log(event);
    this.search.emit(event);
  }
}