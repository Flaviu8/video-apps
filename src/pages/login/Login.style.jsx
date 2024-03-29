import styled from "@emotion/styled";



export const LoginContainer = styled.div`
    background-image: url("https://help.nflxext.com/396a2a39-8d34-4260-b07a-6391fe04ded5_what_is_netflix_2_en.png");
    background-size: cover;
    width: 100%;
    background-position: center;
    padding-bottom: 5em;
`;


export const LoginInput = styled.div`
        display: flex;
        flex-direction: column;
        align-items:center;

        padding-bottom: 6rem;
        padding-top: 2rem /* 32px */;
        background-color: var(--black20);

        height: 33.333333%;
        padding-left: 3rem /* 48px */;
        padding-right: 3rem /* 48px */;

        border-radius: 0.375rem /* 6px */;
        min-width: 240px;

  & h1 {
    margin: auto;
    color: white;
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: 0.5em;
    
  }

  & input {
    margin: auto;
    padding-top: 0.5rem /* 8px */;
     padding-bottom: 0.5rem /* 8px */;
     padding-left: 0.8em;
    border-radius: 0.4em;

    padding-right: 0.5rem /* 8px */;

    color: var(--black30);

    

    height: 3rem /* 48px */;
    min-width: 240px;
    font-size: 1.2rem;
  }


  & input:hover {
      outline: none;
      border: none;
  }



`;

export const SignInBtn = styled.div`
    display: flex;
    justify-content: center;
   
    
    & button {
    width: 150px;
    background-color: white;
    color: rgba(252, 64, 64, 0.966);
    height: 3em;
    cursor: pointer;
    border: none;
    border-radius: 0.8em;
    box-shadow: 1,2,2,4 rgba(1,0,3,5);
    font-size: 0.9em;
    letter-spacing: 1px;
    font-weight: 800;
  } 

  & button:hover {
        background-color: rgba(252, 64, 64, 0.966);
        color: black;
        transition: 0.5s;
    } 


`;
export const CardOffersMainContainer = styled.div`
     display: flex;

  @media (max-width: 768px) {
    display: block;
  }
`;


export const CardOffersContainer = styled.div`
      width: 40%;
      height: 550px;
      background: linear-gradient(#eb1f1fb3, #d33232);
      margin: auto;
      margin-top: 2em;
      border-radius: 3%;
      margin-bottom: 2em;

      @media (max-width: 768px) {
          width: 80%;
          height: 325px;
          
    
  }
`;


export const CardOffer = styled.div`
    display: flex;
    
    
    flex-direction: column;
      & h1 {
        color: white;
        margin:auto;
        padding-top: 1em;

        @media (max-width: 768px) {
            font-size: 1.5em;
  }
      }

      & ul li {
          color: white;
          margin-top: 2em;
          font-weight: 600;
          font-size: 2em;

          @media (max-width: 768px) {
            font-size: 1em;
  }
      }
          & a {
            width: 8em;
            background-color: white;
            color: rgba(252, 64, 64, 0.966);
            height: 3em;
            cursor: pointer;
            border: none;
            border-radius: 0.8em;
            box-shadow: 1,2,2,4 rgba(1,0,3,5);
            font-size: 0.9em;
            letter-spacing: 1px;
            font-weight: 800;
            margin: auto;
            text-align: center;
            padding-top: 0.6em;
            text-decoration: none;
  } 

          & a:hover {
                background-color: rgba(252, 64, 64, 0.966);
                color: black;
                transition: 0.5s;
            } 

 


      `;


export const MonthlyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 5em;
    & p {
       margin-top: 2em;
        font-weight: 600;
        font-size: 2em;
        color: white;

        @media (max-width: 768px) {
            font-size: 1em;
  }
    }


`;
