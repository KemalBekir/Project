import { RouterModule, Routes } from "@angular/router";
import { CatalogDetailPageComponent } from "./catalog-detail-page/catalog-detail-page.component";
import { CatalogNewPageComponent } from "./catalog-new-page/catalog-new-page.component";
import { CatalogPageComponent } from "./catalog-page/catalog-page.component";


const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogPageComponent,
  }, {
    path: 'catalog/new',
    // canActivate: [AuthGuard],
    component: CatalogNewPageComponent
  },
  {
    path: 'catalog/:itemId',
    component: CatalogDetailPageComponent
  }
]

export const CatalogRoutingModule = RouterModule.forChild(routes);
