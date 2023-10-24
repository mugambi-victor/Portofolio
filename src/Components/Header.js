import React, {useState} from 'react';
import { styled } from 'styled-components';
//  for importing icons
import {FaLaptopCode} from 'react-icons/fa';
import {FaList} from 'react-icons/fa';
import { AiFillCloseCircle} from "react-icons/ai";
import {AiFillCloseSquare} from "react-icons/ai";
import {FaAlignJustify} from "react-icons/fa";

function Header(){
    const [isHidden, setIsHidden] = useState(false);

    function toggleHidden() {
      setIsHidden(!isHidden);
    }
    
    return(
        <StyledHeader>
        
              <Logo>
                <h1>Victor Mugambi</h1>
              </Logo>
              <button onClick={toggleHidden}>
        {isHidden ? [<FaAlignJustify size={30} style={ai}/>] : [<AiFillCloseSquare size={30} style={ai}/>]}
      </button>
      
              {!isHidden && <Nav>
              
                <span> <a href="#">Home</a></span>
                <span> <a href="#services">Services</a></span>
                <span><a href="#myporto">Projects</a>  </span>
                <span>  <a href="#">Portofolio</a> </span>
                
                
                </Nav>}
              
             
          
            
        </StyledHeader>
    );
}
const ai={
color:'white',


}

const StyledHeader=styled.header`
height:auto;
justify-content:space-between;
display:flex;
align-items:center;
margin:0 auto;
padding: 1.5rem 0.5em;

width:100%;
top:0;

button{
    visibility:hidden;
}
@media(max-width:992px){
    button{
    background-color:#152238;
    visibility:visible;
    margin-top: 15px;
    height:50px;
}
display:block;
height:auto;


}

`


const Logo=styled.div`
display:flex;
align-items:center;
gap:0.5rem;
span{
    font-size:1.5rem;
    color:green;
    padding-left:0.5rem;
}
h1{
    font-weight:600;
   
}

`;

const Nav=styled.div`
margin-right:2rem;

span{
    margin-right:2rem;

a{
    color:black;
    text-decoration: none;
    font-weight: 400;
    position:relative;
    font-size:1rem;
    transition: .5 ease-in-out;
        
       }
       a:hover{
        left:0;
        right:0;
        height:10px;
        width:100%;
        opacity:.6;
  }

}


@media(max-width:992px){
       

  a{
    position:absolute;
    float:none;
    left:0;
    top:10px;
    display:flex;
    flex-direction: column;
    width:100%;
    height:100%;
    } 
    
   
   
   


}




`;
export default Header;
