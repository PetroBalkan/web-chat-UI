import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MessengerComponent } from './components/messenger/messenger.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sign-in'
    },
    {
        path: 'sign-in',
        component: SignInComponent
    },
    {
        path: 'messenger',
        component: MessengerComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
