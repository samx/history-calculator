import styled from "styled-components";

const Content = styled.div `
    position: fixed;
    top: 20px;
    left: 20px;
    background-color: #ededf775;
    width: 190px;
    border-radius: 20px;
    color:black;
    padding:25px;
`
type Props = {
    resultAndFormulaData:{
        result:string,
        formula:[],
    },
    index:number
}

const AppInfo = () => {    

    return <Content>                      
            <b>Keyboard shortcuts</b>
            <div>Numbers ➜ <b>0-9</b></div>
            <div>Multiple | Divide ➜&nbsp; <b>*&nbsp; |&nbsp; /</b></div>
            <div>Add | Subtract ➜  <b>+ | -</b></div>
            <div>Clear ➜ <b>Delete</b></div>
            <div>Clear All ➜ <b>Escape</b></div>
            <div>Calculate ➜ <b>Enter</b></div>
            <div>⌫ ➜ <b>Backspace</b></div>
            <hr/>
            <b>Source code:</b>
            <div>Made by Samx in React.js/TypeScript</div>
            
            <div>
                <a href="https://github.com/samx/history-calculator">github.com/samx/history-calculator</a>
            </div>
            <hr/>

            <b>Design:</b>
            <div>Made by4 Gabriele in Figma</div>
            
            <div>
                <a href="https://www.figma.com/community/file/1041082497681424521">figma.com/community/file/ 1041082497681424521</a>
            </div>
        </Content>    
}

export default AppInfo;