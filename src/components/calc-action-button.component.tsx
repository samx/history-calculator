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
        else
            return calcResultString;
    }

    const removePreviousResult = (calcResetDisplayResultOnNextNumberClick:boolean,calcResultString:string):string => {
        if(calcResetDisplayResultOnNextNumberClick)
            return "";
        else
            return calcResultString;               
    }

    const dispatch = useDispatch();

    function addInputToCalc(actionName:string, actionValue:string):void{
        if(actionName === ACTION.TYPE.NUMBER){

            let resultString = removeLeadingZero(calcResultString);
            resultString = removePreviousResult(calcResetDisplayResultOnNextNumberClick,resultString);

            if(calcResetDisplayFormulaOnNextNumberClick)
                dispatch(resetResultAndFormula());
            
            dispatch(inputNumberToCalcResult(resultString,actionValue));

        }else if(actionName === ACTION.TYPE.SYMBOL){

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