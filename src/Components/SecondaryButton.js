import React from 'react';
import { styled } from 'styled-components';

function SecondaryButton({children,style}){
    return(

        <StyledButton>
            <button style={style}>{children}</button>
        </StyledButton>
    );
}

const StyledButton=styled.div`
margin-left: -1em;

button{
    background-color:#152238;
    padding:.4rem;
    color:white;

border:0;

}
button:hover{
    /* background-color:whitesmoke;
    color:#152238; */
    transform: scale(1.1);
}

`

export default SecondaryButton;