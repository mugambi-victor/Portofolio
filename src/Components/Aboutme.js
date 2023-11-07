import React from 'react'
import styled from 'styled-components'

function Aboutme() {
  return (
    <StyledAbout>
        <h1>About me</h1>
        <p>Passionate about application and web development, Well equipped with all basics in HTML, JS, Bootstrap and CSS for front-end development. Am also conversant with php for backend development and MYSQL for databases. With these langauges and libraries, I have been able to create whole projects like a Primary school student management system and an Internship placement system.</p>
        <p>I am currently learning ReactJS(I used it to create this portofolio) and NodeJS to further my expertise. I am also enrolled on the 12 month Alx software engineering program where am further honing my software development skills.</p>
        <p>Looking for opportunities as a junior developer.</p>

    </StyledAbout>
  )
}

export default Aboutme

const StyledAbout=styled.div`
p{
    line-height:2;
    margin-top: 1rem;
    justify-content:space-around;
    @media(max-width:997px)
    {
     padding-left:1rem;
     padding-right:1rem;
    }
}
h1{
    display:flex;
    justify-content:center;
    font-family: monospace;
    font-size: 2rem;
    color: #0036ab;
}
`