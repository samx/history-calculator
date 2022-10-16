import { combineReducers } from "redux";

import { calcReducer } from "./calc/calculations.reducer";
import { historyReducer } from "./history/history.reducer";

export const rootReducer = combineReducers({
    calc:calcReducer,
    history:historyReducer
})