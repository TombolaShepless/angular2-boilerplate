/// <reference path="./speech.d.ts" />

import {Store} from "@ngrx/store";
import {IAppState} from "../state/store";
import {ACTIONS} from "../state/actions";

const NUMBERS_STRING = '011722475204365360702637497481233455758302154058881928446789061241507324334876840738576186051132437816395663800818206590104559628214294664710935667287132130687703253151692742547985';

function createCalls(): Array<number> {
    let numbers: Array<number> = [];

    for (let i = 1; i <= 90; i++) {
        numbers.push(i);
    }

    // http://bost.ocks.org/mike/shuffle/
    let m = numbers.length, t, i;

    while (m) {
        i = Math.floor(Math.random() * m--);
        t = numbers[m];
        numbers[m] = numbers[i];
        numbers[i] = t;
    }

    return numbers;
}

function createTicketNumbers(): Array<number> {
    let index = 0,
        tickets = [],
        numbers = [];

    while (index < NUMBERS_STRING.length) {
        let value = parseInt(NUMBERS_STRING.charAt(index++) + NUMBERS_STRING.charAt(index++));

        if (numbers.push(value) === 15) {
            tickets.push(numbers);
            numbers = [];
        }
    }

    return tickets;
}

class Game {
    private intervalId: number;
    private calls: Array<number>;
    private store: Store<IAppState>;

    constructor(store: Store<IAppState>) {
        this.store = store;
        this.calls = createCalls();
    }

    start() {
        this.store.dispatch({
            type: ACTIONS.NEW_GAME
        });

        let id = 0,
            ticketNumbers = createTicketNumbers();

        ticketNumbers.forEach((numbers) => {
            this.store.dispatch({
                type: ACTIONS.CREATE_TICKET,
                payload: {
                    id: ++id,
                    numbers: numbers
                }
            });
        });

        this.intervalId = window.setInterval(() => {
            if (this.calls.length === 0) {
                window.clearInterval(this.intervalId);
                this.endGame()
            } else {
                this.makeCall();
            }
        }, 2000);
    }

    makeCall() {
        let call = this.calls.pop();

        this.store.dispatch({
            type: ACTIONS.NEW_CALL,
            payload: call
        });

        this.speak(call.toString());
    }

    endGame() {
        this.store.dispatch({
            type: ACTIONS.END_GAME
        });

        this.store.dispatch({
            type: ACTIONS.RESET
        });
    }

    speak(message) {
        if (SpeechSynthesisUtterance) {
            let msg = new SpeechSynthesisUtterance(message);
            speechSynthesis.speak(msg);
        }
    }
}

export class GameFactory {
    static create(store: Store<IAppState>) {
        return new Game(store);
    }
}