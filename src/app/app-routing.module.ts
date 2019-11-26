import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'read',
    component: ReadComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
