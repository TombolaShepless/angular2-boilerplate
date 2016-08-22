import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "../../state/store";
import {Observable} from "rxjs";
import {ITicket} from "../../state/tickets";
import {ICallsState} from "../../state/calls";

@Component({
    selector: 'app',
    template: require('./app.html'),
    styles: [require('./app.scss')]
})
export class AppComponent {
    public tickets: Observable<Array<ITicket>>;
    public calls: Observable<ICallsState>;

    constructor(public store: Store<IAppState>) {
        this.tickets = store.select(store => store.tickets);
        this.calls = store.select(store => store.calls);
    }
}
