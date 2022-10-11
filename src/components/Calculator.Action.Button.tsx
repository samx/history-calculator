import styled from "styled-components";

const Content = styled.div<{buttonColor:string}> `
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
        title:string,
        buttonColor:'dark-button-low'| 'dark-button-medium'| 'dark-button-high', //1 step 
        actionName:string    
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

    let bcolor:string = "#2E2F38" //step 4
    if(ButtonColorKeys[buttonData.buttonColor] !== null && buttonData.buttonColor !== null){ //step 5
        bcolor = ButtonColorKeys[buttonData.buttonColor] //step 6
    }


    return (
        <Content buttonColor={bcolor} >{buttonData.display}</Content>  
    );
  };
  
export default CalculatorActionButton;