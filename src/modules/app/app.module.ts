import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "modules/app/app.component";
import {GameInfoModule} from "modules/game-info/game-info.module";
import {Store} from "state/store";
import {TicketsModule} from "../tickets/tickets.module";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        GameInfoModule,
        TicketsModule,
        Store
    ],
    bootstrap: [
        AppComponent

    ]
})
export class AppModule {
}