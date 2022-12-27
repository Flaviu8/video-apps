import styled from "@emotion/styled"


export const  FooterMain =  styled.div`
        display: flex;
        justify-content: center;
    & h6 {
        color: white;
        margin-top: 2em;
        margin-top: 2em;
      
        
        @media (max-width: 768px) {
            margin: auto;
            display: flex;
            margin-top: 1em;
            margin-left: 2em;
            }
        
    }

`; 


export const  FooterLinks =  styled.div`
            display: flex;
            justify-content: space-evenly;
            margin-top: 1.5em;

             @media (max-width: 768px) {
            font-size: 0.8em;
            }
            
    & ul li a {
        color: white;
        text-decoration: none;
        
    }

    & ul li a:hover {
        color: red;
        text-decoration: underline;
        transition: 0.4s;
        
    }
    & ul li  {
       list-style: none;
       text-decoration: none;
       margin-top: 1em;
        
    }

`; 

export const  FooterCopyright =  styled.footer`
        display: flex;
        margin-bottom: 2em;
        justify-content: center;
    & p {
        color: white;
        margin-top: 2em;
        line-height: 5px;
        

        @media (max-width: 768px) {
            margin: auto;
            }
        
    }

`; 