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
`

const HistoryList = ({}) => {

    const listOfHistoryResults = useSelector(selectListOfHistoryResults);

    return <Content>        
        {listOfHistoryResults.map((resultAndFormula:any,index:number) => (
            <HistoryItem key={index} resultAndFormulaData={resultAndFormula} />
        ))}</Content>
    
}

export default HistoryList;