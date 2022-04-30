import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { IItem } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-home-page-item',
  templateUrl: './home-page-item.component.html',
  styleUrls: ['./home-page-item.component.css']
})
export class HomePageItemComponent implements OnChanges {
  @Input () item: IItem;

  constructor(private userService: UserService) { }
  isLogged = this.userService.isLogged;
 ngOnChanges(changes: SimpleChanges): void {

 }

}
