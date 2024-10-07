import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { LayoutComponent } from './component/layout/layout.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { MainComponent } from './component/main/main.component';

export const routes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    // { path: 'login', component: LoginComponent, pathMatch: 'full' },
    // { path: 'register', component: RegisterComponent, pathMatch: 'full' },

    //admin
    {
        path:'' , children:[
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    },

    {
        path:'', component:MainComponent ,children:[
            // {path:'dashboard', component:AdminDashboardComponent},
             {path:'dashboard', component:LayoutComponent},
            {path:'user-profile', component:UserProfileComponent},
        ]
    },

    {path:'**', component:PageNotFoundComponent}
];
