import styled from "styled-components";
import { ACTION } from "../Constants";
import { 
    inputNumberToCalcResult,
     updateFormulaAndChangeResult,
    resetResultAndFormula } from "../store/calc/calculations.action";
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

    // const reformatResultWithDecimal = (caseCheck:string,calcResultString:string , actionValue:string,actionName:string):string =>{        
    //     switch (caseCheck) {
    //         case "add-leading-zero": //if calcResultString is empty and the input value is a "." -> Add a "0";
    //             if(calcResultString.length === 1 && actionValue === ACTION.VALUE.NUMBER_DOT)
    //             return "0";
    
    //             break;
    //         case "remove-trailing-dot":
    //             //if the last string in result end with "." and the next input is followed by a symbol. Remove the dot
    //             //ex calcResultString = "45." actionValue = "+" make-> calcuResultString = "45"
    //             if(calcResultString.slice(-1) === ACTION.VALUE.NUMBER_DOT && actionName ===  ACTION.TYPE.SYMBOL)
    //                 return calcResultString.substring(0,calcResultString.length - 1);
    //             break;
    //     }
    //     return calcResultString;
    // }

    const noActionNeedCheck = (calcResultString:string,actionValue:string):boolean =>{
        switch (actionValue) {
            case ACTION.VALUE.SYMBOL_BACKSPACE:
                if(calcResultString.length === 0 || calcResultString === "0")
                    return true;
                break;            
        }
        return false;
    }

    const dispatch = useDispatch();

    function addInputToCalc(actionName:string, actionValue:string):void{
        if(actionName === ACTION.TYPE.NUMBER){

            let resultString = removeLeadingZero(calcResultString);
            resultString = removePreviousResult(calcResetDisplayResultOnNextNumberClick,resultString);

            // resultString = reformatResultWithDecimal("add-leading-zero",calcResultString,actionValue,actionName);

            if(hasDecimalAlreadyChecker(resultString,actionValue)) return undefined;

            if(calcResetDisplayFormulaOnNextNumberClick)
                dispatch(resetResultAndFormula());
            
            dispatch(inputNumberToCalcResult(resultString,actionValue));

        }else if(actionName === ACTION.TYPE.SYMBOL){
            // let resultString = reformatResultWithDecimal("remove-trailing-dot",calcResultString,actionValue,actionName);

            if(noActionNeedCheck(calcResultString,actionValue)) return;

            dispatch(updateFormulaAndChangeResult(calcResultString,calcDisplayFormula,actionValue));
        }
    }

    let bcolor:string = (ButtonColorKeys[buttonData.buttonColor] !== null && buttonData.buttonColor !== null) 
                        ? ButtonColorKeys[buttonData.buttonColor] : "#2E2F38"

    return (
        <Button onClick={()=>addInputToCalc( buttonData.actionName, buttonData.actionValue)} 
        buttonColor={bcolor}>{buttonData.display}</Button>  
    );
  };
  
export default CalculatorActionButton;