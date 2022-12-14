import { HISTORY_ACTION_TYPES } from "./history.types";

export const HISTORY_INITIAL_STATE = {
    savedResultAndFormulaList:[],
}

export const historyReducer = (state = HISTORY_INITIAL_STATE, action = {}) =>{
    const { type, payload } = action;

    switch (type){
        case HISTORY_ACTION_TYPES.SET_HISTORY_ADD:
        case HISTORY_ACTION_TYPES.SET_HISTORY_DELETE:
            return {
                ...state,
                savedResultAndFormulaList:payload,
            };

        default:
            return state;
    }
}