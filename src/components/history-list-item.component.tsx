import styled from "styled-components";


const Content = styled.div `
background-color:blue;

position: darkgray;
padding:5px;
height: 60px;
border-bottom:1px solid white;
`

const HistoryItem = (resultAndFormulaData:any) => {

    return <Content>        
            <div>
                <table>
                    <td>{resultAndFormulaData.formula}</td>
                    <td>{resultAndFormulaData.result}</td>
                </table>
            </div>
        </Content>
    
}

export default HistoryItem;