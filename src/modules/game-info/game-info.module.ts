import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {LastCallComponent} from "modules/game-info/components/last-call/last-call.component";
import {PrizePanelComponent} from "modules/game-info/components/prize-panel/prize-panel.component";
import {StakeSelectionComponent} from "modules/game-info/components/stake-selection/stake-selection.component";
import {GameInfoContainerComponent} from "modules/game-info/components/game-info-container/game-info-container.component";
import {PlayButtonComponent} from "modules/game-info/components/play-button/play-button.component";

@NgModule({
    declarations: [
        GameInfoContainerComponent,
        LastCallComponent,
        PrizePanelComponent,
        StakeSelectionComponent,
        PlayButtonComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        GameInfoContainerComponent,
        LastCallComponent,
        PrizePanelComponent,
        StakeSelectionComponent,
        PlayButtonComponent
    ]
})
export class GameInfoModule {
}