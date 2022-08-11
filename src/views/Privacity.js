import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import TermsAndConditions from '../components/TermsAndConditions'

const Privacity = () => {
    const { showModal }= useSelector(state => state.showModal);

  return (
    <Wrapper showModal={showModal.payload}>
        {showModal.payload && <Blur></Blur>}
        <TermsAndConditions />
    </Wrapper>
  )
}

const Wrapper = styled.div`

  
`

const Blur = styled.div`
            position: absolute;
        height: 100vh;
        background-color: rgba(0,0,0,0.5);
        backdrop-filter: blur(8px);
        z-index: 55;
        width: 100%;
`

export default Privacity