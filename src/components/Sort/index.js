import React from 'react';
import styled from 'styled-components';
import InputPlayers from './InputPlayers';

const SortContainer = styled.div`
  display: block;
  width: 100%;
  height: auto;
  margin-top: 80px;
`;

function Sort() {
  return (
    <SortContainer>
      <InputPlayers />
    </SortContainer>
  )
}

export default Sort;
