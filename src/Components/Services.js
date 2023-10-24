import React from 'react';
import { styled } from 'styled-components';
import ServicesCard from"./ServicesCard";
import {FaDatabase} from 'react-icons/fa';
import {FaCode} from 'react-icons/fa';
import { FaMicrosoft } from 'react-icons/fa';
import {FaUikit} from 'react-icons/fa';
function Services(){
    return(
        <StyledServices id='services'>
         
           <div>
           <center><h1  >My Services</h1>
            </center>
           </div>
            <maindiv>
            <ServicesCard
            icon={<FaCode/>}
            title=' Web Development'
            body=' I create websites using Bootstrap, Css, JS and ReactJs. These langauges and libraries  enable me to create beautiful user interfaces for applications and websites. I believe in continous learning and am still honing  my front end skills. I have basic knowledge on how SEO works so your website will easily be found on the internet. '
            ></ServicesCard>
                
                    <ServicesCard 
                    icon={<FaDatabase/>}
                    title=' Back-End Development'
                    body=' I work well with MYSQL databases and PHP language for backend development. I can create whole enterprise systems that are scalable and that can accomodate more changes as the owners needs change over time. With my good analytical skills, am able to break down big tasks into small manageable modules from which a whole application can  be built. '
                    >
                    
                    </ServicesCard>
                   
                
                   
            </maindiv>
            <maindiv>
            <ServicesCard 
            icon={<FaMicrosoft/>}
                    title=' .NET FRAMEWORK (C#)'
                    body='I create desktop applications and ERP systems based on a clients needs using c# programming language and MYSQL for database management.'
                    >
                    
                    </ServicesCard>
            <ServicesCard
            icon={<FaUikit/>}
            title=' UI and UX Design'
            body=' I can create beautiful and responsive websites using ReactJs, creating good websites to advertise your business or organization. I also have basic knowledge on how SEO works so your website will easily be found on the internet.  '
            ></ServicesCard>
                   
                
            </maindiv>
       
        </StyledServices>


    );
}
const StyledServices=styled.div`
margin-top:5rem;
background-color:whitesmoke;
padding:.5rem;
margin-bottom: 5rem;
maindiv{
    display:flex;
    gap:1rem;
    margin-top: 1rem;
    @media(max-width: 992px){
    display:block;
    margin-top:3rem;
    
}
}
p{
    line-height:2;
}

`

export default Services;