import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  width: 100%;
  background-color: #1b1d27;
  display: block;
  box-sizing: border-box;
  padding: 20px 30px;
  
  h1 {
    font-size: 48px;
    line-height: 56px;
    font-family: "Counter-Strike";
    color: white;
  }
`

function Title() {
  return (
    <TitleContainer>
      <h1>Sorteador dos MIX -</h1>
    </TitleContainer>
  )
}

export default Title;