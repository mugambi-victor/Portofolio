import React from 'react';
import { styled } from 'styled-components';
// import ServicesCard from"./ServicesCard";
import SecondaryButton from"./SecondaryButton";
import uni from "../img/uni.png";
import pry from "../img/pry.png";
import porto from "../img/porto.png";
import Card from './Card';
import feemgt from "../img/feemgt.png";

function Portofolio(){
    return(
        <StyledPortofolio>
            
           <div id="myporto">
            
           <center><h1>My Projects</h1>
            <p>These are some of my projects so far</p>
            </center>
           </div>
            <maindiv>
            <div className='row'>
            <Card
            title='University Student IMS'
            imageurl={uni}
            
            body={[
            <p>This is a software designed to help institutions of higher learning manage student data across all the school departments easily.</p>,
            <p>
            The software contains portals for the school administration, the Accountant who handles fee paymet in the school, and the student user who can access the system, view their results and fee status from anywhere in the world.</p>,
            <p>
                This is a program developed using PHP,MYSQL,HTML,CSS, Javascript and Bootstrap Technologies.
            
                <SecondaryButton><a href='https://www.youtube.com/watch?v=85bS43TjTgg&t=9s'>View Demo</a></SecondaryButton></p>
            
                
            
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
            title='FEE MANAGEMENT SYSTEM IN C#'
            imageurl={feemgt}
            body={[
                <p>
                    This is a software solution developed for a primary school to aid in managing student finance across their time in school.
                </p>,
                <p>
                    The software will help administration track finance of students easily while aiding easy retrieval also in the process.
                </p>,
                <p>
                <SecondaryButton><a href='https://youtu.be/XdMh9KmWHDc'>View Demo</a></SecondaryButton></p>
            ]}
            >
            </Card>
            
          </div>
          <div className='row>'>
          
          </div>

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
    display:block;
    gap:1rem;
    margin-top: 1rem;
   
    @media(max-width: 992px){
    display:block;
    
    margin-top:2rem;
    
}
p{
    line-height:2;
}
.row{
    display:flex;
    width:100%;
justify-content:space-between;
@media(max-width: 992px){
    display:block;
    
    margin-top:2rem;
    margin-left:0;
    margin-right: 0;
    
}

    }
a{
    text-decoration: none;
    color:white;
}
}






`

export default Portofolio;