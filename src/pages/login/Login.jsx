import React, {useState, useEffect} from 'react'
import { LoginContainer, LoginInput, SignInBtn, MonthlyContainer, CardOffer, CardOffersContainer, CardOffersMainContainer } from './Login.style'
import { magic } from '../../components/library/magic-client'
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import './spinner.css'




export default function Login() {
  const [email,setEmail] = useState ("");
  const [userMsg, setUserMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);


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

  return (
    <>
    {
      loading ? (
        <div className='main_spinner'>
             <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
      ) :
      <>
      <LoginContainer>
      <LoginInput > 
        <form style={{paddingBottom: "5em"}} onSubmit="submit">
        <h1>Sign In</h1>
          <input onSubmit="submit" type= "email" placeholder="E-mail address" 
            onChange={handleOnChangeEmail}
            />
            <p style={{color:"white", marginTop: "12px"}}>{userMsg}</p>
            <SignInBtn>
              <button  onClick={handleLoginWithEmail}> { isLoading ? "Loading..." : "Sign In"}</button>
            </SignInBtn>
        </form>
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
              <p>£4.99</p>
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
              <a href='https://buy.stripe.com/test_14k0117bRdgLbcIfZ0'>Subscribe</a>
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
              <p>£10.99</p>
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
            <a href="https://buy.stripe.com/test_cN2eVV67N7WrdkQ6oo">Subscribe</a>
        </CardOffer>
      </CardOffersContainer>
      </CardOffersMainContainer>
    </LoginContainer>
    <Footer />
    </> 
    }
    </>
  )
  }
