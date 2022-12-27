import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ContactUsContainer, BackHome, ContentContainer, CallBox,LiveChatBox, RightContainer, LeftContentContainer, EmptyLine, SearchContainer, DownloadButton } from './ContactUs.style'
import iconSearch  from "../../assets/search.png"
import googleIcon from "../../assets/google-play.png"
import Footer from '../../components/footer/Footer'


export default function ContactUs() {
const navigate = useNavigate()


  const backHome = () => {
    navigate("/")
  }

  return (
    <>
      <ContactUsContainer>
        <div style={{marginLeft: "10em"}}>
          <BackHome>
            <p onClick={backHome}><span>&#8592;</span> Back To Home Page</p>
            <h1>Contact Customer Service</h1>
          </BackHome>
          <ContentContainer>
            <LeftContentContainer>
              <h4>Call us from the Netflix app</h4>
              <p>Contacting Netflix is now easier than ever when you contact us from the Netflix app on your 
                Android or iOS phone or tablet! Calling through the app is free - all you need is an internet or cellular connection.</p>
                <h6>Download the Netflix app:</h6>
                  <DownloadButton>
                     <button>
                        <img src={googleIcon} width="20px" alt='icon'/>
                      <span>GET IT ON</span> 
                      <div style={{fontSize: "0.8em", marginLeft: "3em", fontWeight: "700"}}>Google Play</div>
                      </button>
                    <button>
                    <img src="https://yt3.googleusercontent.com/ytc/AMLnZu9a6wmBXHHW48ZOYrIb__apvgZAZ6qxQFB11e124w=s900-c-k-c0x00ffffff-no-rj" width="20px" alt='icon'/>
                      <span>Download on the</span> 
                      <div style={{fontSize: "0.8em", marginLeft: "3em", fontWeight: "700"}}> App Store</div>
                      </button>
                  </DownloadButton>
                  <p>Questions? <span>Learn how to contact us from Netflix app!</span></p>
                  <EmptyLine></EmptyLine>
                  <CallBox>
                      <h4>Call us from any phone</h4>
                      <p>You will need a landline or cellular phone service.</p>
                      <button>CALL US</button>
                  </CallBox>
                  <EmptyLine></EmptyLine>
                  <LiveChatBox>
                      <h4>Live Chat</h4>
                      <p>You will need an internet or mobile phone connection.</p>
                      <button>START LIVE CHAT</button>
                  </LiveChatBox>
            </LeftContentContainer>
            <RightContainer>
              <h5>Popular Questions</h5>
              <ul>
                <li>How do I reset my password?</li>
                <li>How can I request a TV show or a movie?</li>
                <li>How do I cancel my account?</li>
                <li>Why isn't Netflix Working?</li>
                <li>What is Netflix?</li>
              </ul>
              <h5>Find a different answer</h5>
                <SearchContainer>
                  <img src={iconSearch} width="25px" height="25px" alt=""/>
                  <input type="text" placeholder='Search'></input>
                </SearchContainer>
            </RightContainer>
          </ContentContainer>
        </div>
      </ContactUsContainer>
      <Footer />
    </>
  )
}
