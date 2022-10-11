import { createAction } from "../reducer.utils";
import { CALC_ACTION_TYPES } from "./calculations.types";

export const inputNumberToCalcResult = (currentCalcDisplayResultString, addCalcInputString) => {
    
    const updatedCalcDisplayResultString = currentCalcDisplayResultString + addCalcInputString;

    return createAction(CALC_ACTION_TYPES.SET_CALC_ADD_NUM_TO_DISPLAY_RESULT, {
        calcDisplayResultString: updatedCalcDisplayResultString
    });
};