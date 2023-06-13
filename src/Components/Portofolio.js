import React from 'react';
import { styled } from 'styled-components';
// import ServicesCard from"./ServicesCard";
import SecondaryButton from"./SecondaryButton";
import uni from "../img/uni.png";
import pry from "../img/pry.png";
import porto from "../img/porto.png";
import Card from './Card';

function Portofolio(){
    return(
        <StyledPortofolio>
            
           <div id="myporto">
            
           <center><h1>My Projects</h1>
            <p>These are some of my projects so far</p>
            </center>
           </div>
            <maindiv>
            
            <Card
            title='University Student IMS'
            imageurl={uni}
            
            body={[
            <p>This is a software designed to help institutions of higher learning manage student data across all the school departments easily.</p>,
            <p>
            The software contains portals for the school administration, the Accountant who handles fee paymet in the school, and the student user who can access the system, view their results and fee status from anywhere in the world.</p>,
            <p>
                This is a program developed using PHP,MYSQL,HTML,CSS, Javascript and Bootstrap Technologies.
            
                <SecondaryButton><a href=''>View Demo</a></SecondaryButton></p>
            
                
            
            ]}
            >
            </Card>
            <Card
            title='Primary School IMS'
            imageurl={pry}
            body={[
                <p>This is a software designed to help primary schools in Kenya manage student data in the school easily.</p>,
                <p>
                The software contains portals for the school administration, the Accountant who handles fee payment in the school, and a parent user who can view student results, fee payments and news published by the admin on the school blog from anywhere in the world.</p>,
                <p>
                    This is a program developed using PHP,MYSQL,HTML,CSS, Javascript and Bootstrap Technologies.
                </p>,
                <p>
                <SecondaryButton><a href='https://mydonations11.000webhostapp.com/'>View Demo</a></SecondaryButton></p>
                ]}
            >
            </Card>
            <Card
            title='My Portofolio website'
            imageurl={porto}
            body={[
                <p>
                    This is my Portofolio website, which I developed when I was learning Reactjs. It was a great experience, creating components, using Styled components, using props for code reuse.
                </p>
            ]}
            >
            </Card>
          
            </maindiv>
            
        </StyledPortofolio>


    );
}
// const imgs={
//     width:'100%',
//     padding:'1rem'

// }

// const mybtn={
//     marginTop:'.5rem',
//     marginBottom:'1rem'
// }
const StyledPortofolio=styled.div`
maindiv{
    display:flex;
    gap:1rem;
    margin-top: 1rem;
    @media(max-width: 992px){
    display:block;
    
    margin-top:2rem;
    
}
a{
    text-decoration: none;
    color:white;
}
}






`

export default Portofolio;