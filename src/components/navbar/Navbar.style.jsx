import styled from "@emotion/styled"


export const SignIn = styled.div` 
    display: flex;
    justify-content: flex-end;
    margin-right: 2em;

    @media (max-width: 768px) {
           margin-top: 1em;
  }
    
        & button {
        margin-left: 3em;
        background-color: white;
        color: red;
        width: 8em;
        height: 3em;
        cursor: pointer;
        border: none;
        border-radius: 0.7em;
        box-shadow: 1,2,2,4 rgba(1,0,3,5);
        font-size: 0.9em;
        letter-spacing: 1px;
        font-weight: 800;

        @media (max-width: 768px) {
            margin-left: 1.5em
           
  }

    } 
    & button:hover {
        background-color: #fa2323;
        color: black;
        transition: 0.6s;
    }         

`;


