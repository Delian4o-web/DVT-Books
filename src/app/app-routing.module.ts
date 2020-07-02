import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { BookProfileComponent } from './book-profile/book-profile.component';
import { AuthorProfileComponent } from './author-profile/author-profile.component';
import { AuthorComponent } from './users-page/author/author.component';
import { BookComponent } from './users-page/book/book.component';
import { AuthGuard } from './auth/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'author', component: AuthorComponent, canActivate: [AuthGuard] },
  { path: 'book', component: BookComponent, canActivate: [AuthGuard] },
  {
    path: 'book/:id',
    component: BookProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'author/:id',
    component: AuthorProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'profile', component: UsersPageComponent },
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: '**', component: UsersPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
