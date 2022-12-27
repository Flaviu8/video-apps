import styled from "@emotion/styled"

export const ContactUsContainer = styled.div` 
        background-color: white;
        padding-top: 1em;
        padding-bottom: 1em;
     
`;


export const ContactUsMainContainer = styled.div` 
      margin-left: 10em;
        
        @media (max-width: 768px) {
            margin-left: 0;
  }
  `;
       


export const BackHome = styled.div` 
        padding-top: 1em;
        & span {
            font-size: 1.2em;
        }
        
        & p {
            font-size: 1.2em;
            color: red;
            cursor: pointer;
           
        }

        & p:hover {
            margin-left: 1em;
            transition: 1s;
            text-decoration: underline;
        }
        & h1 {
            font-size: 2.4em;
            font-weight: 700;
            margin-top: 1em;
        }
`;


export const ContentContainer = styled.div` 
        padding-top: 1em;
        display: flex;

        @media (max-width: 768px) {
            display: block;
            margin-right: 10em;
  }
        
        & p {
            font-size: 1.1em;
        }
      
      
`;


export const SearchContainer = styled.div` 
        border: 1px solid black;
        height: 3.1em;
        width: 70%;
        margin-top: 1.5em;
        
        @media (max-width: 768px) {
            width: 350px;
            display: flex;
            justify-content: flex-start;
            margin-bottom: 2em;
            
    
  }

        & img {
            margin-left: 1em;
            
        @media (max-width: 768px) {
            margin-top: 0.7em;
  }
        }
      & input {
         border: none;
         margin-left: 1em;
         height: 2.8em;
         font-size: 1em;
         width: 80%;

         @media (max-width: 768px) {
                width: 60%;
                display: flex;
  }

         
      }

      & input:focus {
        outline: none;
      }
      
`;


export const DownloadButton = styled.div` 
        display: flex;
        margin-top: 1.2em;
        margin-bottom: 2em;

        @media (max-width: 768px) {
   display: block;
  }
       
        
        & button {
            background-color: black;
            width: 10em;
            height: 3em;
            color: white;
            border: none;
            border-radius: 0.7em;
            text-align: center;
            align-content: center;
            padding-right: 3em;
            margin-right: 1em;

            @media (max-width: 768px) {
                margin-bottom: 1em;
  }
        
            
        }

        & button span{
          font-size: 0.6em;
        }

        & button img{
          margin-right: 0.5em;
          margin-top: 0.5em;
        }

`;



export const LeftContentContainer = styled.div` 
   & p {
    width: 900px;
    font-weight: 100;
    @media (max-width: 768px) {
         width: 150%;
  }

   }

   & h6 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-weight: 600;
   }

   & h4 {
    font-weight: 600;
   }

   & p span {
        color: red;
    }

      
`;

export const RightContainer = styled.div` 
    width: 500px;
     margin-left: 1.5em;

     @media (max-width: 768px) {
  width: 200%;
  margin: auto;
  }
    & ul {
        margin-top: 1em;
        line-height: 2em;
     } 

     & h5 {
        font-weight: 600;
     }

     & h5:nth-of-type(2n) {
        margin-top: 3.5em;
     }

`;

export const EmptyLine = styled.div` 
    height: 0.2px;
    width: 95%;
    background: black;
    margin-top: 2em;

    @media (max-width: 768px) {
         width: 120%;
  }

`;

export const CallBox = styled.div` 
   margin-top: 2em;
   margin-bottom: 2em;
   & button {
        background-color: transparent;
        width: 6em;
        height: 3em;
        font-weight: 600;
        margin-top: 1em;
        border-width: 1px;
    
   }

   & button:hover {
        background-color: #d8d8d8;
        transition: 0.3s;
        
    
   }

`;


export const LiveChatBox = styled.div` 
   margin-top: 2em;
   margin-bottom: 2em;
   & button {
        background-color: transparent;
        width: 10em;
        height: 3em;
        font-weight: 600;
        margin-top: 1em;
        border-width: 1px;
    
   }

   & button:hover {
        background-color:#d8d8d8;
        transition: 0.3s;
        
    
   }

`;
