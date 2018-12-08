import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableFilmComponent } from './table-film/table-film.component';

const appRoutes: Routes = [
  { path: 'table', component: TableFilmComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
];


@NgModule({
  declarations: [
    AppComponent,
    TableFilmComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
