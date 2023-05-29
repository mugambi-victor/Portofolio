import React from 'react';
import { styled } from 'styled-components';
import ServicesCard from"./ServicesCard";
import SecondaryButton from"./SecondaryButton";
function Portofolio(){
    return(
        <StyledPortofolio>
            
           <div>
           <center><h1>My Projects</h1>
            <p>These are some of my projects so far</p>
            </center>
           </div>
            <maindiv>
            
                <ServicesCard className='myclass'>
                    <div className="s2">
                        <center><h3>University Student Information System</h3></center>
                        <p className='body'>
                           A project created for college and universities to help manage student data easily reducing paperwork and increasing efficiency in the process.
                        </p>
                        <p className='body'>
                        This project provides portals for all skaholders involved in a school setting. i.e The school Admin, Students, Accountant and Parents, who can access the system to perform different tasks according to their accounts priviledges.
                        </p>
                        <p className='body'>
                        I created the project using PHP and MSQL for backend logic and HTML,CSS,Bootstrap and JS for frontend.
                        </p>
                    </div>
                    </ServicesCard>
                    <ServicesCard >
                    <div className="s2">
                        <center><h3>Back-End Development</h3></center>
                        <p className='body'>
                            I work well with MYSQL databases and PHP language for backend development. I create Scalable apps that are easy to ready and add modules. With my deep analytical skills, am able to break down big chunks of data to small manageable modules from which a whole application can  be built.
                           
                        </p>
                    </div>
                    </ServicesCard>
                    <ServicesCard >
                    <div className="s2">
                        <center><h3>UI/UX Design</h3></center>
                        <p className='body'>
                            I can create beautiful and responsive websites using ReactJs, creating good websites to advertise your business or organization. I also have basic knowledge on how SEO works so your website will easily be found on the internet. tt 
                            {/* start on creating a reusable button */}
                           
                       
                        <SecondaryButton style={mybtn}>View Demo</SecondaryButton>
                        <SecondaryButton style={mybtn}>View Code</SecondaryButton>
                        </p>
                    </div>
                   
                    </ServicesCard>
                
          
            </maindiv>
            
        </StyledPortofolio>


    );
}
const mybtn={
    marginTop:'1rem'
}
const StyledPortofolio=styled.div`
maindiv{
    display:flex;
    gap:1rem;
    margin-top: 1rem;
    @media(max-width: 992px){
    display:block;
    
    margin-top:2rem;
    .s2{
        width:100%;
        margin-top: 0.7rem;
    }
}
}

.s2{
   
    display:block;

}
.s2:hover{
    transform:scale(.9);
    transition:all 3s;
}
.s2:hover::after{
    transform:scale(.9);
    transition:all 3s;
}
h3{
 
    padding: 0.5rem;
    /* background-color: #152238; */
}
.body{
padding-left:1rem;
padding-right: 1rem;
padding-bottom:.5rem;
}

`

export default Portofolio;