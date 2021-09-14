import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:"Search", component: SearchComponent},
  {path:"Add", component: AddComponent},
  {path:"Delete", component: DeleteComponent},
  {path:"Update", component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
