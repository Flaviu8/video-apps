import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/movie-card/MovieCard'
import Navbar from '../../components/navbar/Navbar'
import  { magic } from "../../components/library/magic-client";
import { useNavigate } from 'react-router-dom';
// import Loading from "../../components/loading/loading";
import { createContext } from 'react';

export const ThemeContext = createContext()


export default function Home() {
    // const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const [bgColor, setBgColor] = useState(true)
    

    useEffect(() => {
      async function fetchData () {
        const isLoggedIn = await magic.user.isLoggedIn()
        if (isLoggedIn) { 
          return navigate("/")
        } else return navigate("/login")

      }   
      fetchData()
      

    },[navigate])

  //   const handleComplete = () => {
  //     setIsLoading(false)
  // }; 

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
        
        // useEffect(() => {
        //   localStorage.setItem('bgColor', (true));
        // }, [bgColor]);

        // useEffect(() => {
        //   const bgColor = localStorage.getItem(false);
        //   if (bgColor) {
        //     setBgColor(bgColor);
        //    }
          
        // }, []);

        // console.log(bgColor)
  
  return (
    <div>
        <Navbar handleBgChange = {handleBgChange} />
        <MovieCard bgColor= {bgColor}/> 
    </div>
  )
}
