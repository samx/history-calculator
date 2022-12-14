import styled from "styled-components";
import {useEffect, useState, KeyboardEvent} from 'react';
import { ACTION } from "../Constants";
import { store } from '../store/store';
import { 
    inputNumberToCalcResult,
     updateFormulaAndChangeResult,
    resetResultAndFormula 
} from "../store/calc/calculations.action";

import {
    addResultAndFormulaToHistoryAction
} from "../store/history/history.action"

import { 
    selectCalcResultString, 
    selectCalcDisplayFormula,
    selectCalcResetDisplayResultOnNextNumberClick,
    selectCalcResetDisplayFormulaOnNextNumberClick } from "../store/calc/calculations.selector";

import { useSelector,useDispatch } from 'react-redux';

const Button = styled.button<{buttonColor:string}> `
/* Button */

width: 170px;
height: 72px;

/* Dark/Button/Low|Medium|High/ Emphasis */

background:${(p) => (p.buttonColor)};
border-radius: 24px;

/* Inside auto layout */

flex: none;
order: 2;
flex-grow: 1;
display:flex;
justify-content:center;
align-items:center;
font-size:50px;
color:white;
outline: 2px solid transparent;

&:hover {
    outline: 2px solid lightblue;
  }

`

type Props = {
    buttonData:{
        id:string,
        display:string,
        buttonColor:'dark-button-low'| 'dark-button-medium'| 'dark-button-high', //1 step 
        actionName:string,
        actionValue:string    
    }   
}

type ButtonColor = { //step 2
    "dark-button-low":string,
    "dark-button-medium":string,
    "dark-button-high":string,
}

const ButtonColorKeys:ButtonColor = { //step 3
    "dark-button-low":"#2E2F38",
    "dark-button-high":"#4B5EFC",
    "dark-button-medium":"#4E505F"
}



const CalculatorActionButton = ({buttonData}:Props) => {
    const dispatch = useDispatch();
    const calcResultString = useSelector(selectCalcResultString);
    const calcDisplayFormula = useSelector(selectCalcDisplayFormula);
    const calcResetDisplayResultOnNextNumberClick = useSelector(selectCalcResetDisplayResultOnNextNumberClick)
    const calcResetDisplayFormulaOnNextNumberClick = useSelector(selectCalcResetDisplayFormulaOnNextNumberClick);

    const removeLeadingZero = (calcResultString:string):string=>{
        if(calcResultString.substring(0,1) === "0") 
            return "";
        
        return calcResultString;
    }

    const removePreviousResult = (calcResetDisplayResultOnNextNumberClick:boolean,calcResultString:string):string => {
        if(calcResetDisplayResultOnNextNumberClick)
            return "";

        return calcResultString;               
    }

    const hasDecimalAlreadyChecker = (calcResultString:string,actionValue:string):boolean =>{
        //if the calcResultString already has a decimal. Don't allow another decimal to be added
        if(calcResultString.indexOf(ACTION.VALUE.NUMBER_DOT) > -1 && actionValue === ACTION.VALUE.NUMBER_DOT )
            return true;

        return false;
    }

    const noActionNeededCheck = (calcResultString:string,actionValue:string):boolean =>{
        switch (actionValue) {
            case ACTION.VALUE.SYMBOL_BACKSPACE:
                if(calcResultString.length === 0 || calcResultString === "0")
                    return true;
                break;           
            case ACTION.VALUE.SYMBOL_BLANK:
                return true; 
        }
        return false;
    }

    const addResultAndFormulaToHistoryList = (actionValue:string):void =>{
        if(actionValue === ACTION.VALUE.SYMBOL_EQUAL){
            
            let {calc,history} = store.getState();

            let {calcDisplayFormula, calcDisplayResultString } = calc;
            let { savedResultAndFormulaList } = history;

            dispatch(addResultAndFormulaToHistoryAction(savedResultAndFormulaList, calcDisplayResultString, calcDisplayFormula))

        }
    }

    function addInputToCalc(actionName:string, actionValue:string):void{
        if(actionName === ACTION.TYPE.NUMBER){

            let resultString = removeLeadingZero(calcResultString);
            resultString = removePreviousResult(calcResetDisplayResultOnNextNumberClick,resultString);

            if(hasDecimalAlreadyChecker(resultString,actionValue)) return undefined;

            if(calcResetDisplayFormulaOnNextNumberClick)
                dispatch(resetResultAndFormula());
            
            dispatch(inputNumberToCalcResult(resultString,actionValue));

        }else if(actionName === ACTION.TYPE.SYMBOL){

            if(noActionNeededCheck(calcResultString,actionValue)) return;

            dispatch(updateFormulaAndChangeResult(calcResultString,calcDisplayFormula,actionValue));
                                 
            addResultAndFormulaToHistoryList(actionValue)

        }
    }

    let bcolor:string = (ButtonColorKeys[buttonData.buttonColor] !== null && buttonData.buttonColor !== null) 
                        ? ButtonColorKeys[buttonData.buttonColor] : "#2E2F38"

    return (
        <Button id={buttonData.id} onClick={()=>addInputToCalc( buttonData.actionName, buttonData.actionValue)} 
        buttonColor={bcolor}>{buttonData.display}</Button>  
    );
  };
  
export default CalculatorActionButton;