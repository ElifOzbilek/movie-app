import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { DetailsComponent } from './pages/details/details.component';
import { BannerComponent } from './components/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    DetailsComponent,
    BannerComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule

  
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
