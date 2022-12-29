import styled from "@emotion/styled";



export const BackHome = styled.div` 
       margin-left: 1.5em;
       padding-top: 2em;
       color: red;
        & span {
            font-size: 1.2em;
        }
        
        & span {
            font-size: 1.2em;
            color: red;
            cursor: pointer;
           
        }

        & span:hover {
            transition: 1s;
            text-decoration: underline;
        }

        & p:hover {
            padding-left: 3em;
            transition: 1s;
            text-decoration: underline;
            cursor: pointer;
        }
    
`;

export const MovieCards = styled.div`
    display: flex;
    
    @media (max-width: 768px) {
            display: block;
  }

`;

export const MainContainerMovie = styled.div`
    width:100%;
    margin-top: 5em;
    margin-left: 3em;


    @media (max-width: 768px) {
            margin: auto
  }


    & h4 {
        margin-top: 1em;
        font-size: 1.5em;
        color: white;
        margin-left: 1em;

        @media (max-width: 768px) {
            margin-left: 1em;
            
  }
    }

    & h5 {
        margin-top: 1em;
        font-size: 1em;
        color: white;
        margin-left: 1.5em;

        @media (max-width: 768px) {
            margin-left: 1.5em;
            
  }
    }

    & input {
        border: none;
        background-color: transparent;
        color: red;
        width: 1em;
        margin-left: 0.5em;
        font-size: 1.2em;

        @media (max-width: 768px) {
            margin-top: 0.8em;
            
  }
    } 

    & input:focus {
        outline: none;
    } 


    & button {
       cursor: pointer;
       border: none;
       margin-left: 1.5em;

       @media (max-width: 768px) {
            padding-left: 0.2em;
            margin-right: 0;
            margin-top: 1em;
            
  }
    } 

    & button, img {
        background-color: transparent;
        
    }
`;



export const DescriptionContainer = styled.div`
    margin-top: 5em;
    margin-right: 2em;
    width: 100%;

    @media (max-width: 768px) {
            margin: auto;
            padding-left: 1em;
            margin-top: 2em;
  }

    & h1 {
        color: white;
    }

    & p {
        margin-top: 1em;
        color: white;
        font-size: 1.4em;
        width: 90%;
        

        @media (max-width: 768px) {
            margin: auto;
            width: 100%;
  }
    }



`;
