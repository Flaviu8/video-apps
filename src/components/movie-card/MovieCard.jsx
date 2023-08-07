import React, { useEffect, useState } from 'react'
import { MovieCardMain, MovieCardContainer, MovieCardMainContainer, SearchBarMain } from './MovieCard.style'
import axios from 'axios'
import  { useNavigate} from "react-router-dom"
import "./MovieCard.css"



export default function MovieCard(props) {
    const [movie, setMovie] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const API_KEY = process.env.REACT_APP_MOVIE_APP_KEY
    const navigate = useNavigate();
    


    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/157336?api_key=${API_KEY}&append_to_response=videos,images`)
        .then(function (response) {
          // handle success
          setMovie(response.data.videos.results)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
  
    }, [API_KEY])

    console.log(movie)

  const handleChange = (event) => {
    event.preventDefault()
    setSearchTerm(event.target.value)

  }
    

  return (
    <>
      <SearchBarMain >
        <input className={ props.bgColor ? "light" : "" } type="search" placeholder="Search" onChange={handleChange} value={searchTerm}></input>
      </SearchBarMain>
    <MovieCardMainContainer>
        {movie.filter((movies) => {
          if (searchTerm === "" ) {
              return movies
          } else if (movies.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return movies
          } else return null
        }).map(movies => {
            return (
                <MovieCardMain className={ props.bgColor ? "light" : "" } key={movies.id}>
                <MovieCardContainer >
                  <img src="https://t4.ftcdn.net/jpg/03/48/81/77/360_F_348817789_25OWzJSmz8pbFOc8HRhxEeMpdYBPeu7X.jpg"  alt=""/>
                    <p className={ props.bgColor ? "light" : "" } >{movies.name}</p>
                </MovieCardContainer>
                <button className={ props.bgColor ? "light" : "" } onClick={()=>(navigate(`/movie/${movies.key}`))}>Play</button>
            </MovieCardMain>
            )  
        })
        
        }
    </MovieCardMainContainer>
    </>
  )
  }