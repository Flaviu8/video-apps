import styled from "@emotion/styled"


export const SearchBarMain = styled.section` 
    margin: auto;
    justify-content: center;
    display: flex;
    border-radius: 0.8em;
    margin-top: 2em;

    & input {
        width: 90%;
        font-size: 1em;
        height: 3em;
        border: none;
        padding-left: 2em;
        border-radius: 0.8em;
        background-color: #fff9f9;
        color: #fff9f9;
    }

    & input:focus {
        outline: none;
        
    }
`;


export const MovieCardMainContainer = styled.div`
      display: flex;
      flex-wrap: wrap;
      margin-left: 1em;
        @media (max-width: 768px) {
        margin-top: 1em;
        margin: auto;
          
  }


`;

export const MovieCardMain = styled.main`
    background-color: #fff9f9;
    width: 640px;
    height: 500px;
    margin: auto;
    margin-top: 2em;
    border-radius: 0.8em;
        @media (max-width: 768px) {
            width: 90%;
            margin: auto;
            margin-top: 2em;
      }

    & button {
        margin-top:2em;
        margin-left: 2em;
        background-color: rgba(19, 17, 17, 0.966);
        color: #fff9f9;
        width: 8em;
        height: 3em;
        cursor: pointer;
        border: none;
        border-radius: 0.8em;
        box-shadow: 1,2,2,4 rgba(1,0,3,5);
        font-size: 0.9em;
        letter-spacing: 1px;
        font-weight: 600;
    } 
    & button:hover {
        background-color: rgba(252, 64, 64, 0.966);
        color:rgba(19, 17, 17, 0.966);
        transition: 0.5s;
    } 
`;

      export const MovieCardContainer = styled.div`
      & p {
      margin-top: 1em;
      margin-left: 1.5em;
      font-size: 1.2em;
      font-weight: 600;
      color: rgba(19, 17, 17, 0.966);

      } 

      & img {
        width: 640px;
        height: 350px;
        border-radius: 0.8em;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        @media (max-width: 768px) {
            width: 100%;
            height: 300px;
        }

      }
        
      `;

