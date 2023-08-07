import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { MainContainerMovie, DescriptionContainer,MovieCards, BackHome  } from './MovieContainer.style'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import likeIcon from "../../assets/like.png"
import dislikeIcon from "../../assets/thumb-down.png"
import { useNavigate } from 'react-router-dom'

export default function MovieContainer() {
  const { id } = useParams()
  let [like, setLike] = useState(localStorage.getItem(0)) 
  const [movie, setMovie] = useState([])
  const [description, setDescription] = useState([])
  const API_KEY = process.env.REACT_APP_MOVIE_APP_KEY
  const navigate = useNavigate()
  
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


useEffect(()=>{
  axios.get(`https://dummyjson.com/posts`)
  .then(function (response) {
    // handle success
    setDescription(response.data.posts)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

}, [])



const likeButton = () => {
  setLike(like = 0)
  setLike( like + 1 )

}

const dislikeButton = () => {
  setLike( like = 0)
}

useEffect(() => {
  localStorage.setItem('0', (like));
}, [like]);

useEffect(() => {
  const like = (localStorage.getItem('0'));
  if (like) {
   setLike(like);
  }
}, []);


  const backHome = () => {
    navigate("/")
  }

  return (

    <div style={{backgroundColor: "rgba(19, 17, 17, 0.966)", height: "961px"}}>
        <BackHome>
          <p onClick={backHome}>Back To Home Page</p>
        </BackHome>
        <MovieCards>
          {movie.filter(movies => movies.key === id).map((movies) => {

            return (
              <MainContainerMovie key={id}>
              <YouTube videoId={id} width= "700px" height= "600px"/>
              <h4>{movies.published_at}</h4>
              <h5>{movies.name}</h5>
              <div style={{display: "flex",
                          alignItems: "center",
                          marginTop: "1em"   }}>
              <button onClick={likeButton}><img src={likeIcon} width="40px" height="30px" alt='icon'/></button>
              <button onClick={dislikeButton}><img src={dislikeIcon} width="40px" height="30px" alt='icon'/></button>
              <input value={like} readOnly></input>

              </div>
            </MainContainerMovie>
           
        )
      })}

      {description.splice(0,1).map((descriptions)=>{
          return (
            <DescriptionContainer key={descriptions.id}>
            <h1>Description: </h1>
            <p> {descriptions.body}</p>
            {API_KEY}
          </DescriptionContainer>
          )

      })}
    </MovieCards>
  </div>   
  )
}
