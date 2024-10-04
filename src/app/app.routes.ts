import { Routes } from '@angular/router';
import { LoanApplicationComponent } from './pages/loan-application/loan-application.component';
import { ApplicationListComponent } from './pages/application-list/application-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'newApplcation',
        pathMatch:'full'
    },
    {
        path:'newApplcation',
        component: LoanApplicationComponent
    },
    {
        path:'applicationList',
        component: ApplicationListComponent
    }
];
