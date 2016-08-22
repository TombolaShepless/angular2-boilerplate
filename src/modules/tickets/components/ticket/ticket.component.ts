import {Component, Input, ChangeDetectionStrategy} from "@angular/core";
import {ITicket} from "state/tickets";

@Component({
    selector: 'ticket',
    template: require('./ticket.template.html'),
    styles: [require('./ticket.style.scss')],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketComponent {
    @Input() ticket: ITicket;
}