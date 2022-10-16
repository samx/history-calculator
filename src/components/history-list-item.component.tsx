import styled from "styled-components";
import { deleteItemFromHistoryAction } from "../store/history/history.action";
import { useSelector,useDispatch } from 'react-redux';
import { selectListOfHistoryResults } from "../store/history/history.selector";

const Content = styled.div `
background-color:blue;
position: darkgray;
padding:5px 20px;
height: 40px;
font-size:24px;
color:white;
border-bottom:1px solid white;
text-align:right;
align-items:center;
justify-content:right;
position:relative;

&:hover {
    .delete-item {
        display:block;
      
    }
}
.delete-item{
    position:absolute;
    left:10px;
    top:10px;
    display:none;
    cursor:pointer;
}

`
type Props = {
    resultAndFormulaData:{
        result:string,
        formula:[],
    },
    index:number
}

const HistoryItem = ({resultAndFormulaData,index}:Props) => {    
    const dispatch = useDispatch();
    const listOfHistoryResults = useSelector(selectListOfHistoryResults);

    function deleteHistoryItem(index:number):void{
        if(listOfHistoryResults[index])
            dispatch(deleteItemFromHistoryAction(listOfHistoryResults,index));
    }

    return <Content>                      
                <div className="delete-item" onClick={()=>deleteHistoryItem(index)}>❌</div>
                <div>{resultAndFormulaData.formula.join("")}={resultAndFormulaData.result}</div>
        </Content>    
}

export default HistoryItem;