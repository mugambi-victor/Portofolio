import React from 'react';
import { styled } from 'styled-components';
import ServicesCard from"./ServicesCard";
function Services(){
    return(
        <StyledServices>
            
           <div>
           <center><h1>My Services</h1>
            <p>I give the best Services when it comes to: </p>
            </center>
           </div>
            <maindiv>
            
                <ServicesCard className='myclass'>
                    <div className="s2">
                        <center><h3>Web Development</h3></center>
                        <p className='body'>
                            I can create beautiful and responsive websites using ReactJs, creating good websites to advertise your business or organization. I also have basic knowledge on how SEO works so your website will easily be found on the internet.  
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
                    <center><h3>.NET FRAMEWORK (C#)</h3></center>
                        <p className='body'>
                            I can create desktop standalone applications and ERP systems based on a clients needs using c# programming language and MYSQL for database management.

                        </p>
                    </div>
                    </ServicesCard>
                
                    {/* <div className="s2">
                        <center><h3>Back-end Development</h3></center>
                        <p className='body'>
                            I can create beautiful and responsive websites using ReactJs, creating good websites to advertise your business or organization. I also have basic knowledge on how SEO works so your website will easily be found on the internet.  
                        </p>
                    </div>
                
                    <div className="s2">
                        <center><h3>Back-end Development</h3></center>
                        <p className='body'>
                            I can create beautiful and responsive websites using ReactJs, creating good websites to advertise your business or organization. I also have basic knowledge on how SEO works so your website will easily be found on the internet.  
                        </p>
                    </div> */}
                
            </maindiv>
            <maindiv>
            
                <ServicesCard className='myclass'>
                    <div className="s2">
                        <center><h3>Web Development</h3></center>
                        <p className='body'>
                           
                            I can create beautiful and responsive websites using ReactJs, creating good websites to advertise your business or organization. I also have basic knowledge on how SEO works so your website will easily be found on the internet.  
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
                    
                  
                
            </maindiv>
        </StyledServices>


    );
}
const StyledServices=styled.div`
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
    transform:scaleY(1.07);
    transition:all 3s;
}
.s2:hover::after{
    transform:scaleY(.9);
    transition:all 3s;
}
h3{
 
    padding: 0.5rem;
    /* background-color: #152238; */
}
.body{

    padding:1rem;
}

`

export default Services;