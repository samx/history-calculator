import { createAction } from "../reducer.utils";

import { HISTORY_ACTION_TYPES } from "./history.types";

export const addResultAndFormulaToHistoryAction = (savedResultAndFormulaList , calcResultString, calcDisplayFormula) => {
    let payload;

    payload = [{result:calcResultString, formula:calcDisplayFormula},...savedResultAndFormulaList];

    return createAction(HISTORY_ACTION_TYPES.SET_HISTORY_ADD, payload);
};

export const deleteItemFromHistoryAction = (savedResultAndFormulaList , index) => {
    let list = [...savedResultAndFormulaList];     
    list.splice(index,1)
    let payload = [...list];
    
    return createAction(HISTORY_ACTION_TYPES.SET_HISTORY_DELETE, payload);
    
};