import styled from "@emotion/styled";


export const MainContainerMovie = styled.div`
    width:800px;
    height: 600px;
    margin-top: 5em;
       margin-left: 10em;
       

    & h4 {
        margin-top: 1em;
        font-size: 1.5em;
        color: white;
    }

    & h5 {
        margin-top: 1em;
        font-size: 1em;
        color: white;
    }

    & input {
        border: none;
        background-color: black;
        color: red;
        width: 1em;
        margin-left: 0.3em;
        font-size: 1.2em;
        margin-top: 0em;
    } 

    & input:focus {
        outline: none;
    } 


    & button {
       cursor: pointer;
       margin-right: 1em;
    } 

    & button, img {
        background-color: transparent;
        margin-top: 0em;
    }
`;



export const DescriptionContainer = styled.div`
    margin-top: 5em;
    margin-right: 8em;

    & h1 {
        color: white;
    }

    & p {
        margin-top: 1em;
        color: white;
        font-size: 1.4em;
        width: 600px;
    }



`;
