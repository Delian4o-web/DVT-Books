import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { TestComponent } from './test/test.component';
import { BookProfileComponent } from './book-profile/book-profile.component';
import { AuthorProfileComponent } from './author-profile/author-profile.component';
import { AuthorComponent } from './users-page/author/author.component';
import { BookComponent } from './users-page/book/book.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'test', component: TestComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'book', component: BookComponent },
  { path: 'book/:id', component: BookProfileComponent },
  { path: 'author/:id', component: AuthorProfileComponent },
  { path: 'profile', component: UsersPageComponent },
  { path: '**', redirectTo: 'profile' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
