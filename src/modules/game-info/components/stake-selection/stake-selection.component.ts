import {Component, EventEmitter, Output, Input, ChangeDetectionStrategy} from "@angular/core";
import {ACTIONS} from "../../../../state/actions";

@Component({
    selector: 'stake-selection',
    template: require('./stake-selection.template.html'),
    styles: [require('./stake-selection.style.scss')],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StakeSelectionComponent {
    @Input() disabled: boolean;
    @Input() stake: number;
    @Output() onIncrease = new EventEmitter();
    @Output() onDecrease = new EventEmitter();

    increase() {
        this.onIncrease.emit({
            type: ACTIONS.INCREMENT_STAKE
        });
    }

    decrease() {
        this.onDecrease.emit({
            type: ACTIONS.DECREMENT_STAKE
        });
    }
}