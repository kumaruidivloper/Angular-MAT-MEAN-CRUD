import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'Crud',pathMatch:'full' },
 { 
 path: 'Crud', 
 loadChildren: './mean-stack-crud/mean-stack-crud.module#MeanStackCrudModule'
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// import { ModuleWithProviders } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { MeanStackCrudComponent } from './mean-stack-crud/mean-stack-crud.component';
 
// const appRoutes: Routes = [
//  { path: '', redirectTo:'Crud',pathMatch:'full' },
//  { 
//  path: 'Crud', 
//  loadChildren: './mean-stack-crud/index.module#MeanStackModule'
//  },
 
// ];
 
// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);