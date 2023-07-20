import React from 'react'
import { styled } from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Foots() {
    const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wdr2p3c', 'template_wzr6uj6', form.current, 'l7ZSfiapoDrSKkZEx')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    


  return (
    <StyledFooter>
       
        <div>
        
      
        <Styledform>
        <StyledHeader>
       <h1 >Need to make an equiry about a project?<br/> Get in Touch...</h1>
       </StyledHeader>
            <form ref={form} onSubmit={sendEmail} className='contact_form'>
                <h1 className='headerr'>Send me an Email</h1>
                <input type="text" className='ins' name="umail" placeholder='your email..'/> <br/>
                <input type="text" className='ins' name="subject" placeholder='Subject'/> <br/>
                <textarea rows='5' name="message" className='ins' placeholder='Message here..'/> <br/>
                <input type="submit" name="submit" className='bt' value="Send Mail"/>
            </form>
          
            </Styledform>
            </div>
            
    </StyledFooter>
  )
  
}

<script src="https://smtpjs.com/v3/smtp.js">
</script>

const StyledFooter=styled.section`
* {box-sizing:border-box;}
box-shadow: 10px 12px 12px 11px rgba(2, 2, 0, 0.2);
background-color:whitesmoke;
div{
   
    display:flex;
padding-bottom:3em;
}
.headerr{
    margin-left:5em;
    font-size:1.4em;
}
@media(max-width: 992px){
    display:block;
    width:100%;
    margin-top:2rem;
    
}
`
const Styledp=styled.section`
width:30em;
margin-top:5em;
`
const Styledform=styled.section`
display:flex;
padding-top: 3em;
padding-left:3em;
.ins{
    padding:.5em;
    width:30em;
    border:0;
    border-bottom:1px solid;
    margin: 0.6em;
 
    
}
@media(max-width: 992px){
    display:block;
    width:100%;
    padding-left:.5em;
    margin-top:1rem;
    .ins{
    padding:.5em;
    width:90%;
    border:0;
    display:flex;
    justify-content: center;
    border-bottom:1px solid;
   
 
    
}
}

.bt{
    margin-left:12em; 
    background-color:#152238;
    padding:.4rem;
color:white;

border:0;
@media(max-width: 992px){
    display: flex;
  justify-content:center;
}
}
`
const StyledHeader=styled.div`

padding-left: 2em;
margin-top:2.5em;
    width:100%;
    font-size:1.8em;
    @media(max-width: 992px){
  
        font-size:1.1em;
    
}
`