import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CatalogService } from 'src/app/core/catalog.service';
import { IItem } from 'src/app/core/interfaces';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  itemList: IItem[];
  inSearchMode = false;

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.catalogService.loadItemsList().subscribe(itemList => {
      this.itemList = itemList;
    });
  }



}
