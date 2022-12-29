import React from 'react'
import { Link } from 'react-router-dom'
import {  FooterMain, FooterLinks, FooterCopyright, FooterMainContainer } from './Footer.style'

export default function Footer() {
  return (
    <FooterMainContainer>
        <FooterMain>
            <h6>Questions? Call 0808 196 5391</h6> 
        </FooterMain>
        <FooterLinks>
            <ul>
                <li><Link to="/prices">Prices</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><a href='/'>Ways to Watch</a></li>
                <li><a href='/'>Corporate informations</a></li>
                <li><a href='/'>Legal notices</a></li>
            </ul>
            <ul>
                <li><a href="/">Help center</a></li>
                <li><a href="/">Terms of use</a></li>
                <li><a href="/">Jobs</a></li>
            </ul>
            <ul>
                <li><a href="/">Account</a></li>
                <li><a href="/">Privacy</a></li>
                <li><a href="/">Media Centre</a></li>
            </ul>
            <ul>
                <li><a href="/">Buy gift cards</a></li>
                <li><a href="/">Privacy</a></li>
                <li><a href="/">Cookie Preferencies</a></li>
                <li><a href="/">Legal Guareantee</a></li>
            </ul>
        </FooterLinks>
        <FooterCopyright>
            <p>&#169;. 2023 NETFLIX.Inc</p >
        </FooterCopyright>
    </FooterMainContainer>
  )
}
