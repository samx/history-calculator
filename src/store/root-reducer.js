import { combineReducers } from "redux";

import { calcReducer } from "./calc/calculations.reducer";

export const rootReducer = combineReducers({
    calc:calcReducer
})