import React from 'react'
import styled from 'styled-components'

const Spinner = () => {
  return (
    <Wrapper>
        <div></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  > div {
    border: 4px solid #B53831;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border-left-color: transparent;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Spinner