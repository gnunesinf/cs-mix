import React from 'react';
import styled from 'styled-components';

import Title from './components/Title';
import Sort from './components/Sort';

export const AppContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #131524;
  
  .gn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function App() {
  return (
    <AppContainer>
      <div className="gn-container">
        <Title />
        <Sort />
      </div>
    </AppContainer>
  );
}

export default App;
