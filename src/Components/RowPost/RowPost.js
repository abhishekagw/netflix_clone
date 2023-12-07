import React, { useEffect, useState } from 'react'
import "./RowPost.css";
import YouTube from 'react-youtube'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../Constants/constants'


function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState()
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    })
  
    
  }, [props.url])
   const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,}}

        const handleyt=(id)=>{
          console.log(id)
          axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0)
            {
              setUrlId(response.data.results[0])
            }
          })

        }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
            <img onClick={()=>handleyt(obj.id)} className={props.isSmall?"smallposter":"poster"} src={props.iSmall ?`${imageUrl+obj.poster_path}`:`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )}
            

        </div>
        { urlId && <YouTube videoId={urlId.key} opts={opts}/>}
    </div>
  )
}

export default RowPost