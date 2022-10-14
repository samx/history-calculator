import { CALC_ACTION_TYPES } from "./calculations.types";

export const CALC_INITIAL_STATE = {
    calcDisplayFormula:[],
    calcDisplayResultNumbers:0,
    calcDisplayResultString:"0",
    calcResetDisplayResultOnNextNumberClick:false,
    calcResetDisplayFormulaOnNextNumberClick:false
}

export const calcReducer = (state = CALC_INITIAL_STATE, action = {}) =>{
    const { type, payload } = action;

    switch (type){
        case CALC_ACTION_TYPES.SET_CALC_ADD_NUM_TO_DISPLAY_RESULT:

            return {
                ...state,
                ...payload,
            };
        case CALC_ACTION_TYPES.SET_CALC_NEW_CALCULATION:
        case CALC_ACTION_TYPES.SET_CALC_RESET_FORMULA_AND_RESULTS:

            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
}