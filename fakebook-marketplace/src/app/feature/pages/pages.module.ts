import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home-page/home-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


@NgModule({
   declarations: [
     HomePageComponent,
     PageNotFoundComponent
   ],
   imports: [
     CommonModule,
   ]
})

export class PagesModule { }
