import {StoreModule} from "@ngrx/store";
import {gameReducer, IGameState, GAME_INITIAL_STATE} from "./game";
import {IPrizesState, PRIZES_INITIAL_STATE, prizesReducer} from "./prizes";
import {CALLS_INITIAL_STATE, ICallsState, callsReducer} from "./calls";
import {ticketsReducer, INITIAL_TICKETS_STATE, ITicket} from "./tickets";

export interface IAppState {
    game: IGameState,
    prizes: IPrizesState;
    calls: ICallsState;
    tickets: Array<ITicket>;
}

const INITIAL_APP_STATE: IAppState = {
    game: GAME_INITIAL_STATE,
    prizes: PRIZES_INITIAL_STATE,
    calls: CALLS_INITIAL_STATE,
    tickets: INITIAL_TICKETS_STATE
};

export const Store = StoreModule.provideStore({
    game: gameReducer,
    prizes: prizesReducer,
    calls: callsReducer,
    tickets: ticketsReducer
}, INITIAL_APP_STATE);
