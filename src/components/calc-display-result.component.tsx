import styled from "styled-components";
import { useSelector } from 'react-redux';
import { selectCalcResultString } from "../store/calc/calculations.selector";
const Content = styled.div `
/* Numbers */

width: 728px;
height: 96px;
font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 96px;
line-height: 96px;
/* identical to box height, or 100% */
align-items: center;
text-align: right;

/* Dark / Text */

color: #FFFFFF;

/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
`

const CalculatorDisplayResult = ({}) => {
  
  const calcResult = useSelector(selectCalcResultString);

    return (
        <Content> {calcResult}</Content>  
    );
  };
  
export default CalculatorDisplayResult;