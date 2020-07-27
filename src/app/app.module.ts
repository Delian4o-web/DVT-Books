import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomePageComponent } from './home-page/home-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorComponent } from './users-page/author/author.component';
import { WelcomePageComponent } from './users-page/welcome-page/welcome-page.component';
import { ViewAuthorsComponent } from './users-page/author/view-authors/view-authors.component';
import { EditAuthorsComponent } from './users-page/author/edit-authors/edit-authors.component';
import { AddAuthorsComponent } from './users-page/author/add-authors/add-authors.component';
import { BookComponent } from './users-page/book/book.component';
import { AddBooksComponent } from './users-page/book/add-books/add-books.component';
import { EditBooksComponent } from './users-page/book/edit-books/edit-books.component';
import { ViewBooksComponent } from './users-page/book/view-books/view-books.component';
import { BookProfileComponent } from './book-profile/book-profile.component';
import { AuthorProfileComponent } from './author-profile/author-profile.component';
import { ImagepreloadDirective } from './directives/imagepreload.directive';
import { SearchComponent } from './users-page/search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UsersPageComponent,
    HeaderComponent,
    AuthorComponent,
    WelcomePageComponent,
    ViewAuthorsComponent,
    EditAuthorsComponent,
    AddAuthorsComponent,
    BookComponent,
    AddBooksComponent,
    EditBooksComponent,
    ViewBooksComponent,
    BookProfileComponent,
    AuthorProfileComponent,
    ImagepreloadDirective,
    SearchComponent,
    PageNotFoundComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
