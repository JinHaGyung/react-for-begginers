import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
  const {id} = useParams();
  let [movie,setMovie]=useState("");
  const getMovie = async()=>{
    const json = await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json()
      setMovie(json.data.movie)
  }
  useEffect(()=>{
    getMovie();
  },[])
  console.log(movie)
  return (
    <>
      <h1>{movie.title}</h1>
      <img src={movie.medium_cover_image}></img>
      <p>{movie.description_intro}</p>
      <ul>
        {movie.genres.map(g=><li>{g}</li>)}
      </ul>

    </>
  )
}

export default Detail;