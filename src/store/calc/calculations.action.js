import { createAction } from "../reducer.utils";
import { CALC_ACTION_TYPES } from "./calculations.types";
import { ACTION } from "../../Constants";
import { Parser } from "expr-eval";

export const resetResultAndFormula = () => {
    return createAction(CALC_ACTION_TYPES.SET_CALC_RESET_FORMULA_AND_RESULTS, {
        calcDisplayResultString: "0",
        calcDisplayFormula:[],
        calcResetDisplayFormulaOnNextNumberClick:false
    });
}

export const inputNumberToCalcResult = (calcDisplayResultString, calcInputString) => {    
    const updatedCalcDisplayResultString = calcDisplayResultString + calcInputString;

    return createAction(CALC_ACTION_TYPES.SET_CALC_ADD_NUM_TO_DISPLAY_RESULT, {
        calcDisplayResultString: updatedCalcDisplayResultString,
        calcResetDisplayResultOnNextNumberClick:false
    });
};

const calculate = (calcDisplayFormula,calcResultString,actionValue) =>{
    const forumla = [...calcDisplayFormula];

    if(forumla.length === 0){
        forumla.push(Number(calcResultString),actionValue)

        return {
            calcDisplayResultString:String(calcResultString),
            calcDisplayFormula:forumla,
            calcResetDisplayResultOnNextNumberClick:true
        }
    }else if(forumla.length > 0){
        //update formula expression with Number
        forumla.push(calcResultString);
        
        //New formula sum
        const parser = new Parser();
        let expr = parser.parse(forumla.join(" "));
        let result = expr.evaluate();

        //Update forumla expression with Symbol
        forumla.push(actionValue)

        return {
            calcDisplayFormula:forumla,
            calcDisplayResultString:String(result),
            calcResetDisplayResultOnNextNumberClick:true
        }
    }
}

const calculateAndClearFormulaDisplay = (calcDisplayFormula,calcResultString,actionValue) =>{
    const forumla = [...calcDisplayFormula];
    //update formula expression with Number
    forumla.push(calcResultString);
    
    //New formula sum
    const parser = new Parser();
    let expr = parser.parse(forumla.join(" "));
    let result = expr.evaluate();

    return {
        calcDisplayFormula:forumla,
        calcDisplayResultString:String(result),
        calcResetDisplayResultOnNextNumberClick:true,
        calcResetDisplayFormulaOnNextNumberClick:true
    }
}

const makeCalculations = (calcResultString,calcDisplayFormula, actionValue) => {

    const mathSymbols = [ACTION.VALUE.SYMBOL_DIVIDE,ACTION.VALUE.SYMBOL_MINUS,ACTION.VALUE.SYMBOL_MULTIPLE,ACTION.VALUE.SYMBOL_PLUS];
    const clearSymbols = [ACTION.VALUE.SYMBOL_BACKSPACE, ACTION.VALUE.SYMBOL_CLEAR_RESULT,ACTION.VALUE.SYMBOL_CLEAR_ALL];
    const equalSymbol = [ACTION.VALUE.SYMBOL_EQUAL];

    if(mathSymbols.indexOf(actionValue) !== -1){
        let payload = calculate(calcDisplayFormula,calcResultString,actionValue);
        return payload;
    }else if(clearSymbols.indexOf(actionValue) !== -1){

    }else if(equalSymbol.indexOf(actionValue) !== -1){
        let payload = calculateAndClearFormulaDisplay(calcDisplayFormula,calcResultString,actionValue)
        return payload
    }
  };

  const backspace = (calcResultString) => {
    let backspaceResult = calcResultString.substring(0,calcResultString.length-1);
    if(backspaceResult.length === 0){
        return { calcDisplayResultString: "0" }
    }else{
        return { calcDisplayResultString: calcResultString.substring(0,calcResultString.length-1) }
    }    
  }

export const updateFormulaAndChangeResult = (calcResultString,calcDisplayFormula, actionValue) => {
    let payload;

    switch (actionValue) {
        case ACTION.VALUE.SYMBOL_BACKSPACE:
            console.log("backspace")
            payload = backspace(calcResultString);
            return createAction(CALC_ACTION_TYPES.SET_CALC_BACKSPACE, payload);
    
        default:
            payload = makeCalculations(calcResultString,calcDisplayFormula, actionValue);
            return createAction(CALC_ACTION_TYPES.SET_CALC_NEW_CALCULATION, payload);
    }

    
};
