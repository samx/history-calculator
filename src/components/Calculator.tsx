import styled from "styled-components";
import CalculatorDisplayFormula from './calc-display-formula.component';
import CalculatorDisplayResult from './calc-display-result.component';
import CalculatorRowButtons from './calc-row-buttons.component';
import { ACTION } from '../Constants';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { resetResultAndFormula } from "../store/calc/calculations.action";

const Content = styled.div `
 /* Content */
/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;

position: absolute;
height: 599px;
left: 20px;
right: 20px;
bottom: 66px;
`

const Calculator = ({}) => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        //reset calculator
        dispatch(resetResultAndFormula());

    },[]); //run only on the first render

    return (
        <Content>
            <CalculatorDisplayFormula/>
            <CalculatorDisplayResult />
            <CalculatorRowButtons buttons={[
                {display:'7',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_7},
                {display:'8',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_8},
                {display:'9',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_9},
                {display:'÷',buttonColor:'dark-button-high',actionName:ACTION.TYPE.SYMBOL, actionValue:ACTION.VALUE.SYMBOL_DIVIDE}]}/>
            <CalculatorRowButtons buttons={[
                {display:'4',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_4},
                {display:'5',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_5},
                {display:'6',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_6},
                {display:'×',buttonColor:'dark-button-high',actionName:ACTION.TYPE.SYMBOL, actionValue:ACTION.VALUE.SYMBOL_MULTIPLE}]}/>
            <CalculatorRowButtons buttons={[
                {display:'1',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_1},
                {display:'2',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_2},
                {display:'3',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_3},
                {display:'-',buttonColor:'dark-button-high',actionName:ACTION.TYPE.SYMBOL, actionValue:ACTION.VALUE.SYMBOL_MINUS}]}/>
            <CalculatorRowButtons buttons={[
                {display:'0',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_0},
                {display:'.',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_DOT},
                {display:'+',buttonColor:'dark-button-high',actionName:ACTION.TYPE.SYMBOL, actionValue:ACTION.VALUE.SYMBOL_PLUS},
                {display:'=',buttonColor:'dark-button-high',actionName:ACTION.TYPE.SYMBOL, actionValue:ACTION.VALUE.SYMBOL_EQUAL}]}/>
            <CalculatorRowButtons buttons={[
                {display:'CE',buttonColor:'dark-button-medium',actionName:ACTION.TYPE.SYMBOL, actionValue:ACTION.VALUE.SYMBOL_CLEAR_RESULT},
                {display:'C',buttonColor:'dark-button-medium',actionName:ACTION.TYPE.SYMBOL, actionValue:ACTION.VALUE.SYMBOL_CLEAR_ALL},
                {display:'',buttonColor:'dark-button-medium',actionName:ACTION.TYPE.SYMBOL, actionValue:ACTION.VALUE.SYMBOL_BLANK},
                {display:'⌫ ',buttonColor:'dark-button-medium',actionName:ACTION.TYPE.SYMBOL, actionValue:ACTION.VALUE.SYMBOL_BACKSPACE}]}/>
        </Content>  
    );
  };
  
export default Calculator;