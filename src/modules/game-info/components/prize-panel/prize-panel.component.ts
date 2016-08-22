import {Component, Input, ChangeDetectionStrategy} from "@angular/core";

@Component({
    selector: 'prize-panel',
    template: require('./prize-panel.template.html'),
    styles: [require('./prize-panel.styles.scss')],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrizePanelComponent {
    @Input() prizeName: string;
    @Input() prize: number;
}