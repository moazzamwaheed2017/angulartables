import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome.component';
import { GettingStartedComponent } from './getting-started.component';
import { PersonComponent } from './person.component';
import { AngularWayComponent } from './basic/angular-way.component';
import { ServerSideAngularWayComponent } from 'app/basic/server-side-angular-way.component';

import { ButtonsExtensionComponent } from './extensions/buttons-extension.component';
import { ColreorderExtensionComponent } from './extensions/colreorder-extension.component';
import { ResponsiveExtensionComponent } from './extensions/responsive-extension.component';
import { SelectExtensionComponent } from './extensions/select-extension.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'getting-started',
        component: GettingStartedComponent
    },
    {
        path: 'person/:id',
        component: PersonComponent
    },
    {
        path: 'basic/angular-way',
        component: AngularWayComponent
    },
    {
        path: 'basic/server-side-angular-way',
        component: ServerSideAngularWayComponent
    },
    {
        path: 'extensions/buttons',
        component: ButtonsExtensionComponent
    },
    {
        path: 'extensions/colreorder',
        component: ColreorderExtensionComponent
    },
    {
        path: 'extensions/responsive',
        component: ResponsiveExtensionComponent
    },
    {
        path: 'extensions/select',
        component: SelectExtensionComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
