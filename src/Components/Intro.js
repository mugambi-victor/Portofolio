import React from 'react';
import { styled } from 'styled-components';
// import SecondaryButton from './SecondaryButton';
import bg from '../img/bg.jpg';
import {FaInstagram, FaLinkedin} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
function Intro(){
    return(
        <StyledIntro>
           
            <About>
                <p>Hi, My name is Victor Mugambi, a professional web developer. I use ReactJs to build beautiful and interactive user interfaces. I am also a passionate back end developer using PHP and MYSQL for databases. 
                   
                </p>
                <p>
                Whether you are looking to upgrade your website or start a new project, i am the right pick for you. Contact me today, lets get started on your Project.
                </p>
               
                
            </About>
            <Pic>
                
                <img src={bg} alt="img"></img>
                <Ics>
                    <ul>
                       
                        <li> <a href='https://github.com/mugambi-victor'> <FaGithub style={ico}/></a></li>
                        <li> <a href='https://www.linkedin.com/in/victor-mugambi-18bb87203/'> <FaLinkedin style={ico}/></a></li>
                        <li> <a href='https://www.youtube.com/channel/UCSDPNMuHts7TYWh8X-zfJQw'> <FaYoutube style={ico}/></a></li>
                        <li><FaEnvelope style={ico}/></li>
                    </ul>
                    
                   
                {/* <span><SecondaryButton/></span> */}
                </Ics>
               
            </Pic>
            
        </StyledIntro>

    );
}
const ico={
    fontSize:'2rem',

    
}

const Ics=styled.div`
 display:block;
 float:right;
margin-top: 5rem;
li:hover{
    transform:scale(1.2);
}
ul{
    list-style:none;
}
@media(max-width:992px){
    float:left;
    width:100%;
    ul{
        display:flex;
       
    }
   margin-top:2rem
}
`
const StyledIntro=styled.div`
margin-top: 7rem;
height:30rem;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;

p{
    padding-bottom:1em;
    font-size:1rem;
}

@media(max-width:992px){
    margin-top: 15rem;
display:block;
height:auto;

width:100%;
}

`
const About=styled.div`
width:100%;
padding:.8rem;
font-size: 1rem;
align-items:center;
justify-content: center;
`
const Pic=styled.div`
width:100%;
justify-content:center;
img{
    height:90%;
    width:80%;
    border-radius: 300px;
}

`
export default Intro;