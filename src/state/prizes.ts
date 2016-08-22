import {Action} from "@ngrx/store";
import {ACTIONS} from "state/actions";

export interface IPrizesState {
    oneLine: number;
    twoLines: number;
    fullHouse: number;
    stake: number;
}

const MULTIPLIERS = {
    ONE_LINE: 1.5,
    TWO_LINES: 3,
    FULL_HOUSE: 6
};

const MAX_STAKE = 10;
const MIN_STAKE = 1;

export const PRIZES_INITIAL_STATE : IPrizesState = {
    oneLine: (MIN_STAKE * MULTIPLIERS.ONE_LINE),
    twoLines: (MIN_STAKE * MULTIPLIERS.TWO_LINES),
    fullHouse: (MIN_STAKE * MULTIPLIERS.FULL_HOUSE),
    stake: MIN_STAKE
};

export const prizesReducer = (state: IPrizesState = PRIZES_INITIAL_STATE, action: Action) : IPrizesState => {
    let newStake;

    switch (action.type) {
        case ACTIONS.INCREMENT_STAKE:
            newStake = (state.stake + 1);

            if (newStake > MAX_STAKE) {
                return state;
            }

            return {
                stake: newStake,
                oneLine: (newStake * MULTIPLIERS.ONE_LINE),
                twoLines: (newStake * MULTIPLIERS.TWO_LINES),
                fullHouse: (newStake * MULTIPLIERS.FULL_HOUSE)
            };
        case ACTIONS.DECREMENT_STAKE:
            newStake = (state.stake - 1);

            if (newStake <= MIN_STAKE) {
                return PRIZES_INITIAL_STATE;
            }

            return {
                stake: newStake,
                oneLine: (newStake * MULTIPLIERS.ONE_LINE),
                twoLines: (newStake * MULTIPLIERS.TWO_LINES),
                fullHouse: (newStake * MULTIPLIERS.FULL_HOUSE)
            };
        default:
            return state;
    }
};