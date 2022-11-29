import { Component, Input } from '@angular/core';
import { IUser } from '../modele';


@Component({
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css']
})
export class CardComponent  {

    @Input()
    user!: IUser;
    
    constructor() {}
    ngOnInit(){
        // console.log(this.user)
    }
}