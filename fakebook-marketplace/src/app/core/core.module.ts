import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CatalogService } from "./catalog.service";
import { FooterComponent } from "./footer/footer.component";
import { AuthActivate } from "./guards/auth.guard";
import { HeaderComponent } from "./header/header.component";
import { storageServiceProvider } from "./storage.service";
import { UserService } from "./user.service";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [

  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        UserService,
        storageServiceProvider,
        CatalogService,
        AuthActivate,
      ]
    }
  }
}
