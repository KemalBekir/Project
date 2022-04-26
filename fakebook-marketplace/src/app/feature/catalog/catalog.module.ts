import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CatalogDetailPageComponent } from "./catalog-detail-page/catalog-detail-page.component";
import { CatalogListItemComponent } from "./catalog-list-item/catalog-list-item.component";
import { CatalogListComponent } from "./catalog-list/catalog-list.component";
import { CatalogNewPageComponent } from "./catalog-new-page/catalog-new-page.component";
import { CatalogPageComponent } from "./catalog-page/catalog-page.component";
import { CatalogRoutingModule } from "./catalog-routing.module";


@NgModule({
  declarations: [
    CatalogListComponent,
    CatalogListItemComponent,
    CatalogPageComponent,
    CatalogDetailPageComponent,
    CatalogNewPageComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    FormsModule,
  ],
  exports: [

  ]
})

export class CatalogModule { }
