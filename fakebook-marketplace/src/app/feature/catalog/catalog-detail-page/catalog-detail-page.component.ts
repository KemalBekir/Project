import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from 'src/app/core/catalog.service';
import { IItem } from 'src/app/core/interfaces';

@Component({
  selector: 'app-catalog-detail-page',
  templateUrl: './catalog-detail-page.component.html',
  styleUrls: ['./catalog-detail-page.component.css']
})
export class CatalogDetailPageComponent implements OnInit {
  item: IItem;
  constructor(private activatedRoute: ActivatedRoute, private catalogService: CatalogService,) { }

  ngOnInit(): void {
    const itemId = this.activatedRoute.snapshot.params['itemId'];
    this.catalogService.loadItemById(itemId).subscribe( item => {
      this.item = item;
    })
  }

}
