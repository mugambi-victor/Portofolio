import React from 'react'
import styled from 'styled-components'

function ServiceHeader() {
  return (
    <StyledHeader>
         <h1>Services I Offer</h1>
    </StyledHeader>
  )
}
const StyledHeader=styled.div`
 display:flex;
    justify-content:center;
    font-family: monospace;
    font-size: 2rem;
    color: #0036ab;
    margin-bottom: 1rem;
`
export default ServiceHeader