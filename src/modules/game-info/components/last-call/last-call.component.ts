import {Component, Input, ChangeDetectionStrategy} from "@angular/core";
import {ICall} from "state/calls";

@Component({
    selector: 'last-call',
    template: require('./last-call.template.html'),
    styles: [require('./last-call.style.scss')],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LastCallComponent {
    @Input() lastCall: ICall;
}