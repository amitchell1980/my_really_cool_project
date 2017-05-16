import { NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppCompenent } from './app.component';
import { EntryListComponent, EntryComponent, EntryService, EntryCommentFormComponent } from './entries';
import { InMemoryEntryService } from './backend';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        InMemoryWebApiModule.forRoot(InMemoryEntryService)
    ],
    providers: [ EntryService ],
    declarations: [
        AppCompenent,
        EntryComponent,
        EntryListComponent,
        EntryCommentFormComponent
    ],
    bootstrap: [AppCompenent]
})
export class AppModule {

}