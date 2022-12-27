import styled from "@emotion/styled";




export const MovieCards = styled.div`
    display: flex;
    
    @media (max-width: 768px) {
            display: block;
  }

`;



export const MainContainerMovie = styled.div`
    width:100%;
    height: 600px;
    margin-top: 5em;
    margin-left: 10em;

    @media (max-width: 768px) {
            width:100%;
            margin: auto
  }



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

    @media (max-width: 768px) {
            margin: auto;
  }

    & h1 {
        color: white;
    }

    & p {
        margin-top: 1em;
        color: white;
        font-size: 1.4em;
        width: 600px;

        @media (max-width: 768px) {
            margin: auto;
            width: 100%;
  }
    }



`;
