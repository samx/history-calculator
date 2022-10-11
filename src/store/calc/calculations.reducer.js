import { CALC_ACTION_TYPES } from "./calculations.types";
export const CALC_INITIAL_STATE = {
    calcDisplayFormula:"",
    calcDisplayResultNumbers:0,
    calcDisplayResultString:"0",
}


export const calcReducer = (state = CALC_INITIAL_STATE, action = {}) =>{
    const { type, payload } = action;

    switch (type){
        case CALC_ACTION_TYPES.SET_CALC_ADD_NUM_TO_DISPLAY_RESULT:

            return {
                ...state,
                ...payload,
            };

        default:
            return state;
    }
}
