import styled from "styled-components";
import { useSelector } from 'react-redux';
import { selectListOfHistoryResults } from "../store/history/history.selector";
import HistoryItem from "./history-list-item.component";

const Content = styled.div `
background-color:gray;

position: absolute;
height: 350px;
left: 20px;
right: 20px;
top: 0px;
overflow:auto;
display:flex;
flex-direction: column-reverse;

/* width */
&::-webkit-scrollbar {
  width: 10px;
}

/* Track */
&::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
&::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: #555; 
}


`

const HistoryList = ({}) => {

    const listOfHistoryResults = useSelector(selectListOfHistoryResults);

    return <Content>        
        {listOfHistoryResults.map((resultAndFormula:any,index:number) => (
            <HistoryItem key={'history-item'+index} index={index} resultAndFormulaData={resultAndFormula} />
        ))}</Content>
    
}

export default HistoryList;