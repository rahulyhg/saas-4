import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutComponent } from './layout/layout/layout.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { SideNavTogglerComponent } from './layout/side-nav-toggler/side-nav-toggler.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopNavComponent,
    SideNavTogglerComponent,
    SideNavComponent,
    PageContentComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
