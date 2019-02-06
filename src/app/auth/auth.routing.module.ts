import { NgModule } from "@angular/core";
import { Routes , Router , RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
    
    { path  : ''  , component : HomeComponent ,  
        children : [
            { path : 'login' , component: LoginComponent },
            { path : 'register' , component: SignupComponent }
        ]  
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }