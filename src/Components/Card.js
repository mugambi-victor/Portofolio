import React from 'react'
import { styled } from 'styled-components'

function Card(props) {
  return (
    <Styleddiv className='card-container'>
      <div>
      <h1>{props.title}</h1>
      <img src={props.imageurl} alt='img'/>
      <p>{props.body}</p>
      </div>
    </Styleddiv>
  )
}
const Styleddiv=styled.div`
padding:2rem;
width:100%;
@media(max-width:997px){
  width:100%;
}
div{
  padding:1rem;
  transition: transform .5s; /* Animation */
}
div:hover{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
h1{
display:flex;
justify-content:center;
}

img{
  width:100%;
  
  padding-top:2rem;
}


`
export default Card
