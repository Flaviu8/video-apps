import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/movie-card/MovieCard'
import Navbar from '../../components/navbar/Navbar'
import  { magic } from "../../components/library/magic-client";
import { useNavigate } from 'react-router-dom';
import { createContext } from 'react';
import './spinner.css'

export const ThemeContext = createContext()


export default function Home() {
    const navigate = useNavigate()
    const [bgColor, setBgColor] = useState(  JSON.parse(localStorage.getItem('bgColor')) || true)
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 6000);
    }, []);
    

    useEffect(() => {
      async function fetchData () {
        const isLoggedIn = await magic.user.isLoggedIn()
        if (isLoggedIn) { 
          return navigate("/")
        } else return navigate("/login")

      }   
      fetchData()
      

    },[navigate])

  const handleBgChange = () => {
    setBgColor(!bgColor)
    if(bgColor === true) {
      document.body.style.backgroundColor = "rgba(19, 17, 17, 0.966)"
      document.body.style.color = "#fff9f9"
       

    } else {
      document.body.style.backgroundColor = "#fff9f9"
      document.body.style.color = "rgba(19, 17, 17, 0.966)"
    
    }
  }    
        
  useEffect(() => {
    window.localStorage.setItem('bgColor', JSON.stringify(bgColor));
  }, [bgColor]);

console.log(bgColor)
    
  
 
  
  return (
    <>
    {
      loading ? (
        <div className='main_spinner'>
             <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
      ) :
    <div>
      <Navbar handleBgChange = {handleBgChange} />
      <MovieCard bgColor= {bgColor}/> 
    </div>
 }
 </>
  )
}
