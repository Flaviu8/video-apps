import React, { useEffect, useState } from 'react'
import { MovieCardMain, MovieCardContainer } from './MovieCard.style'
import axios from 'axios'
import  { useNavigate} from "react-router-dom"
import SearchBar from '../search-bar/SearchBar'


export default function MovieCard() {
    const [movie, setMovie] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const API_KEY = String(process.env.REACT_APP_MOVIE_APP_KEY)
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


  const handleChange = (event) => {
    event.preventDefault()
    setSearchTerm(event.target.value)

  }
    

  return (
    <>
    <SearchBar changeValue={handleChange} valueChanged={searchTerm}/>
    
    <div style={{
        display: "flex",
        flexWrap: "wrap",
        
  
    }}>

        {movie.filter((movies) => {
          if (searchTerm === "" ) {
              return movies
          } else if (movies.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return movies
          } else return null
        }).map(movies => {
            return (
                <MovieCardMain key={movies.id}>
                  
                <MovieCardContainer>
                  <img src="https://t4.ftcdn.net/jpg/03/48/81/77/360_F_348817789_25OWzJSmz8pbFOc8HRhxEeMpdYBPeu7X.jpg" width="640" height="350px" alt=""/>
                    <p>{movies.name}</p>
                </MovieCardContainer>
                <button onClick={()=>(navigate(`/movie/${movies.key}`))}>Play</button>
            </MovieCardMain>
            )  
        })
        
        }
    </div>
    </>
  )




  }