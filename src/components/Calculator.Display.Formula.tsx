import styled from "styled-components";

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
    return (
        <Content>6,291 / 8</Content>  
    );
  };
  
export default CalculatorDisplayFormula;