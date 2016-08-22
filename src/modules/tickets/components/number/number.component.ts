import {Component, Input, ChangeDetectionStrategy} from "@angular/core";
import {INumber} from "state/tickets";

@Component({
    selector: 'number',
    template: require('./number.template.html'),
    styles: [require('./number.style.scss')],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NumberComponent {
    @Input() number: INumber;
}