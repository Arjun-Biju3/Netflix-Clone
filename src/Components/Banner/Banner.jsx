import React from 'react'
import "./Banner.css"
import { useEffect } from 'react'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import { useState } from 'react'

function Banner() {
  const random_num=Math.floor(Math.random() * (20 - 0 + 1)) + 0;
  console.log(random_num)
  const [movie,setMovie] = useState()
  useEffect(
    ()=>{
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[random_num])
        setMovie(response.data.results[random_num])
      })
    },
    []
  )
  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :""})`}}>
        <div className='content'>
            <h1 className='title'>{movie? movie.title || movie.name : ""}</h1>
            <div className='banner-btn'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie? movie.overview : ""}</h1>

        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner


