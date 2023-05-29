import React from "react";
import { styled } from "styled-components";



function ServicesCard(props){
    const {children}=props;
    return(
        <StyledCard className="card">
            {children}
        </StyledCard> 
    );
}
const StyledCard=styled.div`
width:25rem;
display:block;
border-radius: 3rem;
height:auto;
background-color:whitesmoke;

`

export default ServicesCard;