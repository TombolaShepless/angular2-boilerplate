import {Action} from "@ngrx/store";
import {ACTIONS} from "state/actions";

export interface INumber {
    value: number;
    isMarked: boolean;
}

export interface ITicket {
    id: number;
    rows: Array<Array<INumber>>;
}

export const INITIAL_TICKETS_STATE = [];

const numberReducer = (state: INumber, action: Action): INumber => {
    switch (action.type) {
        case ACTIONS.NEW_CALL:
            if (state && state.value === action.payload) {
                return Object.assign({}, state, {
                    isMarked: true
                });
            }

            return state;
        case ACTIONS.CREATE_TICKET:
            return {
                value: action.payload,
                isMarked: false
            };
        default:
            return state;
    }
};


const rowsReducer = (state: Array<INumber>, action: Action): Array<INumber> => {
    let rows;

    function addToCell(row, col, value) {
        if (!rows[row][col]) {
            rows[row][col] = numberReducer(null, {
                type: action.type,
                payload: value
            });
        } else {
            let nextRow = (row === 2) ? 0 : (row + 1);
            addToCell(nextRow, col, value);
        }
    }

    switch (action.type) {
        case ACTIONS.CREATE_TICKET:
            rows = [
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null, null]
            ];

            for (let row = 0; row < 3; row++) {
                for (let i = 0; i < 5; i++) {
                    let value = action.payload.numbers.shift(),
                        col = (value === 90) ? 8 : Math.floor(value / 10);

                    addToCell(row, col, value);
                }
            }

            return rows;
        case ACTIONS.NEW_CALL:
            return state.map((number) => numberReducer(number, action));
        default:
            return state;
    }
};

const ticketReducer = (state: ITicket, action: Action): ITicket => {
    let rows;

    switch (action.type) {
        case ACTIONS.NEW_CALL:
            rows = state.rows.map((row) => rowsReducer(row, action));

            return {
                id: state.id,
                rows: rows
            };
        case ACTIONS.CREATE_TICKET:
            rows = rowsReducer(null, action);

            return {
                id: action.payload.id,
                rows: rows
            };
        default:
            return state;
    }
};


export const ticketsReducer = (state: Array<ITicket> = INITIAL_TICKETS_STATE, action: Action): Array<ITicket> => {
    switch (action.type) {
        case ACTIONS.RESET:
            return [];
        case ACTIONS.NEW_CALL:
            let ticketIndex = 0,
                ticket = ticketReducer(state.find((ticket, index) => {
                    return !![].concat(...ticket.rows).find(((number) => {
                        if (number && number.value === action.payload) {
                            ticketIndex = index;
                            return true;
                        }

                        return false;
                    }));
                }), action);

            state.splice(ticketIndex, 1, ticket);

            return state;
        case ACTIONS.CREATE_TICKET:
            return state.concat(ticketReducer(null, action));
        default:
            return state;
    }
};