import styled from "styled-components";
import CalculatorActionButton from './Calculator.Action.Button';

const Content = styled.div `
/* Row */
/* Auto layout */

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 16px;
width: 728px;
height: 72px;

/* Inside auto layout */

flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
`

interface Props {
    buttons:NumButton[];
}

interface NumButton {
    title:string,
    display:string,
    buttonColor:'dark-button-low'| 'dark-button-medium'| 'dark-button-high',
    actionName:string 
}

const CalculatorRowButtons = ({ buttons }: Props) => {
    return (
        <Content>
        {buttons.map((button) => (
            <CalculatorActionButton key={button.actionName}
            buttonData={button} 
 />
        ))}
        </Content>  
    );
  };
  
export default CalculatorRowButtons;