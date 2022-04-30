import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/core/catalog.service';
import { IItem } from 'src/app/core/interfaces';

@Component({
  selector: 'app-home-page-list',
  templateUrl: './home-page-list.component.html',
  styleUrls: ['./home-page-list.component.css']
})
export class HomePageListComponent implements OnInit {

  itemList: IItem[];
  firstItem: IItem;
  isLogged: boolean = false;
  constructor(private catalogService: CatalogService) { }


  ngOnInit(): void {

    this.catalogService.loadTopFive().subscribe( itemList =>{
      this.itemList = itemList;
    })
  }

}
