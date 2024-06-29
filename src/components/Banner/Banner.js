import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import requests from '../../api/request';

const Banner = () => {

  const [movie, setMovie] =useState([]);

  useEffect(()=> {
    fatchData();
  },[])

  const fatchData= async()=>{
    const nowPlaying = await axios.get(requests.fetchNowPlaying);

    const movieId= nowPlaying.data.results[
      Math.floor(Math.random() * nowPlaying.data.results.length)
    ].id

    const {data:movieDetail}=await axios.get(`movie/${movieId}`, {
      params:{append_to_response:"videos"}
    })
    setMovie(movieDetail);
  }

  return (
    <div>Banner</div>
  )
}

export default Banner