import {Action} from "@ngrx/store";
import {ACTIONS} from "state/actions";

export interface ICall {
    value: number;
}

export interface ICallsState {
    collection: Set<ICall>;
    lastCall: ICall;
}

export const CALLS_INITIAL_STATE : ICallsState = {
    collection: new Set<ICall>(),
    lastCall: null
};

export const callsReducer = (state: ICallsState = CALLS_INITIAL_STATE, action: Action) : ICallsState => {
    switch (action.type) {
        case ACTIONS.RESET:
            return {
                collection: new Set<ICall>(),
                lastCall: null
            };
        case ACTIONS.NEW_CALL:
            return {
                collection: new Set<ICall>(state.collection).add({
                    value: action.payload
                }),
                lastCall: {
                    value: action.payload
                }
            };
        default:
            return state;
    }
};