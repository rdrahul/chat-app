import { NgModule } from "@angular/core";
import { Routes , Router , RouterModule } from "@angular/router";

const routes: Routes = [
    
    { path  : 'auth'  , loadChildren : './auth/auth.module#AuthModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }