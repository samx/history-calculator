import styled from "styled-components";
import { useSelector } from 'react-redux';
import { selectCalcDisplayFormula,selectCalcResultString } from "../store/calc/calculations.selector";
import { useEffect } from "react";
const Content = styled.div `
width: 728px;
height: 47px;
font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 40px;
line-height: 47px;

/* identical to box height */

align-items: center;
text-align: right;

/* Dark / Text */

color: #FFFFFF;
opacity: 0.4;

/* Inside auto layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
`

const CalculatorDisplayFormula = ({}) => {

    const calcFormula = useSelector(selectCalcDisplayFormula);

    return (
        <Content>{calcFormula.join(" ")}</Content>  
    );
  };
  
export default CalculatorDisplayFormula;