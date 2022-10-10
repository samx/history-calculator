import styled from "styled-components";
import CalculatorDisplayFormula from './Calculator.Display.Formula';
import CalculatorDisplayResult from './Calculator.Display.Result';
import CalculatorRowButtons from './Calculator.Row.Buttons';

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

    return (
        <Content>
            <CalculatorDisplayFormula/>
            <CalculatorDisplayResult />
            <CalculatorRowButtons buttons={[
                {title:'Seven',display:'7',buttonColor:'dark-button-low',actionName:'Num7'},
                {title:'Eight',display:'8',buttonColor:'dark-button-low',actionName:'Num8'},
                {title:'Nine',display:'9',buttonColor:'dark-button-low',actionName:'Num9'},
                {title:'Divide',display:'÷',buttonColor:'dark-button-high',actionName:'Divide'}]}/>
            <CalculatorRowButtons buttons={[
                {title:'Four',display:'4',buttonColor:'dark-button-low',actionName:'Num4'},
                {title:'Five',display:'5',buttonColor:'dark-button-low',actionName:'Num5'},
                {title:'Six',display:'6',buttonColor:'dark-button-low',actionName:'Num6'},
                {title:'Multiple',display:'×',buttonColor:'dark-button-high',actionName:'Multiple'}]}/>
            <CalculatorRowButtons buttons={[
                {title:'One',display:'1',buttonColor:'dark-button-low',actionName:'Num1'},
                {title:'Two',display:'2',buttonColor:'dark-button-low',actionName:'Num2'},
                {title:'Three',display:'3',buttonColor:'dark-button-low',actionName:'Num3'},
                {title:'Minus',display:'-',buttonColor:'dark-button-high',actionName:'Minus'}]}/>
            <CalculatorRowButtons buttons={[
                {title:'Zero',display:'0',buttonColor:'dark-button-low',actionName:'Num1'},
                {title:'Decimal',display:'.',buttonColor:'dark-button-low',actionName:'Num2'},
                {title:'Plus',display:'+',buttonColor:'dark-button-high',actionName:'Plus'},
                {title:'Equal',display:'=',buttonColor:'dark-button-high',actionName:'Equal'}]}/>
        </Content>  
    );
  };
  
export default Calculator;