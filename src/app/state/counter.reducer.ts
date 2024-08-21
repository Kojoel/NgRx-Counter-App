import { Action, createReducer, on } from "@ngrx/store";
import { decrement, increment, reset, setCounterValue } from "./counter.actions";

export let initialState = 0;

export const counterReducer = createReducer(initialState, 
    on(increment, (state) => state + 1 ),
    on(decrement, (state) => state - 1 ),
    on(reset, (state) => state = 0 ),
    on(setCounterValue, (state, {num}) => num),
);
