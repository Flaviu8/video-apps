import React, {useState} from 'react'
import { LoginContainer, LoginInput, SignInBtn, MonthlyContainer, CardOffer, CardOffersContainer, CardOffersMainContainer } from './Login.style'
import Navbar from '../../components/navbar/Navbar'
import { magic } from '../../components/library/magic-client'
import { useNavigate } from 'react-router-dom';



export default function Login() {
  const [email,setEmail] = useState ("");
  const [userMsg, setUserMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  // const [isLoggedIn, setIsLoggedIn] = useState(true)


  const handleOnChangeEmail = (e) => { 
    setUserMsg("")
    const email = e.target.value;
    setEmail(email);
};



  const handleLoginWithEmail = async (e) => {
    e.preventDefault();
    
    if (email) {
    
    if (email) {
    
        try {
           setIsLoading(true);
    
         const didToken = await magic.auth.loginWithEmailOTP({ email, });
         if (didToken) {
            return navigate("/")
         } else {
            return navigate("/login")
         }
         
          } catch(error) {
            console.error('Something went wrong logging in', error);
            setIsLoading(false);
    
    
          }
        }
               else {
            setIsLoading(false);
            setUserMsg("Something went wrong logging in");
            
               }
    
                }    else {
                    setIsLoading(false);
                    setUserMsg ('Enter a valid email address');
                
            }
            
    };

    const paymentBtn = () => {
      navigate("/payment")
    }


  return (
    <LoginContainer>
      <Navbar />
      <LoginInput>
        <h1>Sign In</h1>
      <input type= "email" placeholder="E-mail address" 
          onChange={handleOnChangeEmail}
          />
          <SignInBtn>
             <p style={{color:"white"}}>{userMsg}</p>
            <button onClick={handleLoginWithEmail}> { isLoading ? "Loading..." : "Sign In"}</button>
          </SignInBtn>
      </LoginInput>
      <CardOffersMainContainer>
      <CardOffersContainer>
        <CardOffer>
            <h1>NETFLIX PREMIUM</h1>
            <MonthlyContainer>
            <ul>
                  <li>
                    Monthly price
                  </li>
              </ul>
              <p>$4.99</p>
            </MonthlyContainer>
            <MonthlyContainer>
            <ul>
                  <li>
                  Video quality
                  </li>
              </ul>
              <p>1080</p>
            </MonthlyContainer>
            <MonthlyContainer>
            <ul>
                  <li>
                    Downloads
                  </li>
              </ul>
              <p>NO</p>
            </MonthlyContainer>
              <button onClick={paymentBtn}>Subscribe</button>
        </CardOffer>
      </CardOffersContainer>
      <CardOffersContainer>
        <CardOffer>
            <h1>NETFLIX FAMILY</h1>
            <MonthlyContainer>
            <ul>
                  <li>
                    Monthly price
                  </li>
              </ul>
              <p>$10.99</p>
            </MonthlyContainer>
            <MonthlyContainer>
            <ul>
                  <li>
                  Video quality
                  </li>
              </ul>
              <p>4k + HDR</p>
            </MonthlyContainer>
            <MonthlyContainer>
            <ul>
                  <li>
                  Downloads
                  </li>
              </ul>
              <p>YES</p>
            </MonthlyContainer>
            <button onClick={paymentBtn}>Subscribe</button>
        </CardOffer>
      </CardOffersContainer>
      </CardOffersMainContainer>
    </LoginContainer>
  )
  }
