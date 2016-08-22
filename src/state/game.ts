import {Action} from "@ngrx/store";
import {ACTIONS} from "state/actions";

export interface IGameState {
    inPlay: boolean;
}

export const GAME_INITIAL_STATE : IGameState = {
    inPlay: false
};

export const gameReducer = (state: IGameState = GAME_INITIAL_STATE, action: Action) : IGameState => {
    switch (action.type) {
        case ACTIONS.NEW_GAME:
            return {
                inPlay: true
            };
        case ACTIONS.END_GAME:
            return {
                inPlay: false
            };
        default:
            return state;
    }
};