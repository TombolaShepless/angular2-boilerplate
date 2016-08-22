import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {TicketComponent} from "./components/ticket/ticket.component";
import {NumberComponent} from "./components/number/number.component";

@NgModule({
    declarations: [
        TicketComponent,
        NumberComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TicketComponent,
        NumberComponent
    ]
})
export class TicketsModule {
}