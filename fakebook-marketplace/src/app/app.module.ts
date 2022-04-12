import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { CatalogModule } from './feature/catalog/catalog.module';
import { PagesModule } from './feature/pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    CatalogModule,
    PagesModule,
    AuthModule,
    NgbModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent],
})
export class AppModule {}
