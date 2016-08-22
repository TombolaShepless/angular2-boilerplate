import {Component, Output, EventEmitter, Input, ChangeDetectionStrategy} from "@angular/core";
import {ACTIONS} from "../../../../state/actions";

@Component({
    selector: 'play-button',
    template: require('./play-button.template.html'),
    styles: [require('./play-button.style.scss')],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayButtonComponent{
    @Input() disabled: boolean;
    @Output() onPlay = new EventEmitter();

    play() {
        this.onPlay.emit({
            action: ACTIONS.NEW_GAME
        });
    }
}