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
        document.body.addEventListener('keydown', keyAction);
    },[]); //run only on the first render

    function keyAction(e:any):void{
        let keyid:string = e.key? e.key: '' 
        let keyToId:any = ACTION.KEY_TO_ID;
    
        if(typeof keyToId[keyid] === 'string' && typeof document.getElementById(keyToId[keyid]) === 'object'){
            document.getElementById(keyToId[keyid])!.click();
        }
    }

    return (
        <Content>
            <CalculatorDisplayFormula/>
            <CalculatorDisplayResult />
            <CalculatorRowButtons buttons={[
                {id:ACTION.ID.NUMBER_7, display:'7',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_7},
                {id:ACTION.ID.NUMBER_8, display:'8',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_8},
                {id:ACTION.ID.NUMBER_9, display:'9',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_9},
                {id:ACTION.ID.SYMBOL_DIVIDE,display:'÷',buttonColor:'dark-button-high',actionName:ACTION.TYPE.SYMBOL, actionValue:ACTION.VALUE.SYMBOL_DIVIDE}]}/>
            <CalculatorRowButtons buttons={[
                {id:ACTION.ID.NUMBER_4, display:'4',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_4},
                {id:ACTION.ID.NUMBER_5, display:'5',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_5},
                {id:ACTION.ID.NUMBER_6, display:'6',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_6},
                {id:ACTION.ID.SYMBOL_MULTIPLE, display:'×',buttonColor:'dark-button-high',actionName:ACTION.TYPE.SYMBOL, actionValue:ACTION.VALUE.SYMBOL_MULTIPLE}]}/>
            <CalculatorRowButtons buttons={[
                {id:ACTION.ID.NUMBER_1, display:'1',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_1},
                {id:ACTION.ID.NUMBER_2, display:'2',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_2},
                {id:ACTION.ID.NUMBER_3, display:'3',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_3},
                {id:ACTION.ID.SYMBOL_MINUS, display:'-',buttonColor:'dark-button-high',actionName:ACTION.TYPE.SYMBOL, actionValue:ACTION.VALUE.SYMBOL_MINUS}]}/>
            <CalculatorRowButtons buttons={[
                {id:ACTION.ID.NUMBER_0, display:'0',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_0},
                {id:ACTION.ID.NUMBER_DOT, display:'.',buttonColor:'dark-button-low',actionName:ACTION.TYPE.NUMBER, actionValue:ACTION.VALUE.NUMBER_DOT},
                {id:ACTION.ID.SYMBOL_PLUS, display:'+',buttonColor:'dark-button-high',actionName:ACTION.TYPE.SYMBOL, actionValue:ACTION.VALUE.SYMBOL_PLUS},
                {id:ACTION.ID.SYMBOL_EQUAL, display:'=',buttonColor:'dark-button-high',actionName:ACTION.TYPE.SYMBOL, actionValue:ACTION.VALUE.SYMBOL_EQUAL}]}/>
            <CalculatorRowButtons buttons={[
                {id:ACTION.ID.SYMBOL_CLEAR_RESULT, display:'CE',buttonColor:'dark-button-medium',actionName:ACTION.TYPE.SYMBOL, actionValue:ACTION.VALUE.SYMBOL_CLEAR_RESULT},
                {id:ACTION.ID.SYMBOL_CLEAR_ALL, display:'C',buttonColor:'dark-button-medium',actionName:ACTION.TYPE.SYMBOL, actionValue:ACTION.VALUE.SYMBOL_CLEAR_ALL},
                {id:ACTION.ID.SYMBOL_BLANK, display:'',buttonColor:'dark-button-medium',actionName:ACTION.TYPE.SYMBOL, actionValue:ACTION.VALUE.SYMBOL_BLANK},
                {id:ACTION.ID.SYMBOL_BACKSPACE, display:'⌫',buttonColor:'dark-button-medium',actionName:ACTION.TYPE.SYMBOL, actionValue:ACTION.VALUE.SYMBOL_BACKSPACE}]}/>
        </Content>  
    );
  };
  
export default Calculator;