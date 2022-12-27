import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/movie-card/MovieCard'
import Navbar from '../../components/navbar/Navbar'
import  { magic } from "../../components/library/magic-client";
import { useNavigate } from 'react-router-dom';
import Loading from "../../components/loading/loading";




export default function Home() {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
      async function fetchData () {
        const isLoggedIn = await magic.user.isLoggedIn()
        if (isLoggedIn) { 
          return navigate("/")
        } else return navigate("/login")

      }   
      fetchData()
      

    },[navigate])

    const handleComplete = () => {
      setIsLoading(false)
  }; 



  return (
    <div>
        <Navbar  />
        <MovieCard /> 
    </div>
  )
}
