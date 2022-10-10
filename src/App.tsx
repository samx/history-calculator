import React from 'react';
import styled from "styled-components";
import {Background} from './components/styles/Background.styled'
import Calculator from './components/Calculator'


 const Container = styled.div `
  position: relative;
  width: 768px;
  height: 1024px;

  /* Dark/Background */
  background: #17171C;
 `;


function App() {
  return (
    <Background>
      <Container>
        <Calculator/>
      </Container>
    </Background>
  );
}

export default App;
