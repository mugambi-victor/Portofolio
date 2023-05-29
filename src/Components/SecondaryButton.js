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


button{
    background-color:#152238;
    padding:.4rem;
color:white;

border:0;

}
button:hover{
    opacity:.8;
}

`

export default SecondaryButton;