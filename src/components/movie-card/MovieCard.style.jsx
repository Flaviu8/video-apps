import styled from "@emotion/styled"


export const MovieCardMainContainer = styled.div`
            display: flex;
            flex-wrap: wrap;
            @media (max-width: 768px) {
            margin-top: 1em;
           
  }


`;

export const MovieCardMain = styled.div`
    background-color: white;
    width: 640px;
    height: 500px;
    margin: auto;
    margin-top: 2em;
    @media (max-width: 768px) {
  width: 100%;
  margin: auto;
  margin-top: 2em;
  }

    & button {
        margin-top:2em;
        margin-left: 2em;
        background-color: black;
        color: white;
        width: 8em;
        height: 3em;
        cursor: pointer;
        border: none;
        border-radius: 0.7em;
        box-shadow: 1,2,2,4 rgba(1,0,3,5);
        font-size: 0.9em;
        letter-spacing: 1px;
        font-weight: 600;
    } 
    & button:hover {
        background-color: #fa2323;
        color: black;
        transition: 0.6s;
    } 
`;

export const MovieCardContainer = styled.div`
& p {
 margin-top: 1em;
 margin-left: 1.5em;
 font-size: 1.2em;
 font-weight: 600;

} 

& img {
  width: 640px;
  height: 350px;
  @media (max-width: 768px) {
      width: 100%;
      height: 300px;
  }

}
   
`;

