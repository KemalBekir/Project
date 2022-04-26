import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { IItem } from 'src/app/core/interfaces';

@Component({
  selector: 'app-home-page-item',
  templateUrl: './home-page-item.component.html',
  styleUrls: ['./home-page-item.component.css']
})
export class HomePageItemComponent implements OnChanges {

  @Input () item: IItem;

  constructor() { }

 ngOnChanges(changes: SimpleChanges): void {

 }

}
