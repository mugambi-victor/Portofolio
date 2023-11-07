import React from 'react';
import { styled } from 'styled-components';
import bg from '../img/bg.jpg';
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaYoutube,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';
import SecondaryButton from './SecondaryButton';
function Intro() {
  return (
    <StyledIntro>
      <div className='int-header'>
        <p className='the-head'>WEB DEVELOPER || SOFTWARE DEVELOPER || CONSULTANT</p>
      </div>
      <About>
        <Pic>
          <div className='int-header'>
            <div className='with-bt'>
              <h4>Bring Your brand to life with our help</h4>
            <SecondaryButton >Contact Me: 0740843795</SecondaryButton>
            </div>
          </div>
          <img src={bg} alt='my Image' />
          <SocialMediaLinks />
        </Pic>
        
      </About>
    </StyledIntro>
  );
}

const icoStyles = {
  fontSize: '2rem',
};

const StyledIntro = styled.div`
  margin-top: 3rem;
  height: 30rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .the-head {
    font-size: 1rem;
    color: #0036ab;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .int-header {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    @media(max-width:997px){
     padding:1rem;
    }
  }

  h4 {
    width: 70%;
    font-size: 2rem;
    font-family: monospace;
    margin-right:-13rem;
  }

  @media (max-width: 992px) {
  
    display: block;
    height: auto;
    width: 100%;
    h4 {
    width: 100%;
    font-size: 2rem;
    font-family: monospace;
   
  }
  }

`;

const About = styled.div`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  align-items: center;
  justify-content: justify;
  line-height: 2;
  @media(max-width:997px){
    display:flex;
    flex-direction: column;
  }
`;

const Pic = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
.with-bt{
  display:block;
  float:right;
}
  img {
    width: 35%;
    border-radius: 15rem;
  }

  @media (max-width: 997px) {
    display: flex;
    justify-content: center;
flex-direction:column;
    img {
      width: 100%;
    border-radius: 15rem;
      margin-top: 1rem;
     
    }
  }
`;

const SocialMediaLinks = () => (
  <Ics>
    <h5>Social Media Links</h5>
    <ul>
      <li>
        <a href='https://github.com/mugambi-victor'>
          <FaGithub style={icoStyles} />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/victor-mugambi-18bb87203/'>
          <FaLinkedin style={icoStyles} />
        </a>
      </li>
      <li>
        <a href='https://www.youtube.com/channel/UCSDPNMuHts7TYWh8X-zfJQw'>
          <FaYoutube style={icoStyles} /> 
        </a>
      </li>
      <li>
      
      </li>
      <li>
        <a>
          <FaEnvelope style={icoStyles} />
        </a>
      </li>
    </ul>
  </Ics>
);
const Ics=styled.div`
 display:block;
 float:right;
margin-top: 3rem;
margin-left: 5rem;
li a{
    list-style:none;
    color:black;
}
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
export default Intro;
