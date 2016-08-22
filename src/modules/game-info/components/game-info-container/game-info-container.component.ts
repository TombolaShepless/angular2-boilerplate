import {Component, ChangeDetectionStrategy} from "@angular/core";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../state/store";
import {Observable} from "rxjs";
import {IPrizesState} from "../../../../state/prizes";
import {IGameState} from "../../../../state/game";
import {GameFactory} from "../../../../engine/index";
import {ICallsState} from "../../../../state/calls";

@Component({
    selector: 'game-info-container',
    template: require('./game-info-container.template.html'),
    styles: [require('./game-info-container.style.scss')],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameInfoContainerComponent {
    public game: Observable<IGameState>;
    public prizes: Observable<IPrizesState>;
    public calls: Observable<ICallsState>;

    constructor (public store: Store<IAppState>) {
        this.game = store.select(state => state.game);
        this.prizes = store.select(state => state.prizes);
        this.calls = store.select(state => state.calls);
    }

    onPlay () {
        let game = GameFactory.create(this.store);
        game.start();
    }
}