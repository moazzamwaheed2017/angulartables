import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { GettingStartedComponent } from './getting-started.component';
import { PersonComponent } from './person.component';

// Basic examples
import { AngularWayComponent } from './basic/angular-way.component';
import { AngularWaySnippetComponent } from './basic/angular-way-snippet.component';
import { ServerSideAngularWayComponent } from './basic/server-side-angular-way.component';
import { ServerSideAngularWaySnippetComponent } from './basic/server-side-angular-way-snippet.component';

// Using extension examples
import { ButtonsExtensionComponent } from './extensions/buttons-extension.component';
import { ButtonsExtensionSnippetComponent } from './extensions/buttons-extension-snippet.component';
import { ButtonsExtensionConfigurationComponent } from './extensions/buttons-extension-configuration.component';
import { ColreorderExtensionComponent } from './extensions/colreorder-extension.component';
import { ColreorderExtensionSnippetComponent } from './extensions/colreorder-extension-snippet.component';
import { ColreorderExtensionConfigurationComponent } from './extensions/colreorder-extension-configuration.component';
import { ResponsiveExtensionComponent } from './extensions/responsive-extension.component';
import { ResponsiveExtensionSnippetComponent } from './extensions/responsive-extension-snippet.component';
import { ResponsiveExtensionConfigurationComponent } from './extensions/responsive-extension-configuration.component';
import { SelectExtensionComponent } from './extensions/select-extension.component';
import { SelectExtensionSnippetComponent } from './extensions/select-extension-snippet.component';
import { SelectExtensionConfigurationComponent } from './extensions/select-extension-configuration.component';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        GettingStartedComponent,
        PersonComponent,
        AngularWayComponent,
        AngularWaySnippetComponent,
        ServerSideAngularWayComponent,
        ServerSideAngularWaySnippetComponent,
        ButtonsExtensionComponent,
        ButtonsExtensionSnippetComponent,
        ButtonsExtensionConfigurationComponent,
        ColreorderExtensionComponent,
        ColreorderExtensionSnippetComponent,
        ColreorderExtensionConfigurationComponent,
        ResponsiveExtensionComponent,
        ResponsiveExtensionSnippetComponent,
        ResponsiveExtensionConfigurationComponent,
        SelectExtensionComponent,
        SelectExtensionSnippetComponent,
        SelectExtensionConfigurationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HighlightJsModule,
        HttpModule,
        HttpClientModule,
        DataTablesModule,
        AppRoutingModule
    ],
    providers: [
        HighlightJsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
