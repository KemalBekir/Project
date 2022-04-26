import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { IItem } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-catalog-list-item',
  templateUrl: './catalog-list-item.component.html',
  styleUrls: ['./catalog-list-item.component.css']
})
export class CatalogListItemComponent implements OnChanges {


  @Input () item: IItem;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
