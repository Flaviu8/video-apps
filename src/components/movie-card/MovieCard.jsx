import React, { useEffect, useState } from 'react'
import { MovieCardMain, MovieCardContainer } from './MovieCard.style'
import axios from 'axios'
import YouTube from 'react-youtube'

export default function MovieCard() {
    
    const [movie, setMovie] = useState([])
    // const API_KEY = process.env.MOVIE_APP_KEY
    
        

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/157336?api_key=7c53f0c0f44c4c0fd2a1494e24a3b86d&append_to_response=videos,images`)
        .then(function (response) {
          // handle success
          setMovie(response.data.videos.results)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
  
    }, [])

    console.log(movie)




  return (
    <div style={{
        display: "flex",
        flexWrap: "wrap"
    }}>
        {movie.map( movies => {
            return (
                <MovieCardMain key={movies.id}>
                <MovieCardContainer>
                    {/* <img src="https://sales.pahousing.co.uk/media/2863/helo-tower-cgi-2-1.png?anchor=center&mode=crop&quality=75&rnd=132919217060000000" /> */}
                    <YouTube videoId={movies.key} width='700px'
                    />
                    <p>{movies.type}</p>
                    <p>{movies.name}</p>
                </MovieCardContainer>
                <button>Play</button>
            </MovieCardMain>
            )  
        })
        
        }
    </div>
  )

  }