import { useEffect, useState } from 'react'
import "./Banner.css";
import axios from '../../axios'
import { API_KEY, IMAGE_URL } from '../../Constants/Constant';


function Banner() {
    const [ trending, setTrending ] = useState([])

    useEffect(() => {
        axios.get(`/movie/popular?language=en-US&page=1&api_key=${ API_KEY }`)
        .then(( response ) => {
            const results = response.data.results
            const randonIndex = Math.floor(Math.random() * results.length)
            const randonTrending = results[randonIndex]
            setTrending(randonTrending)

        })
        .catch(( err ) => {
            console.log( err.message );
        })
    },[])

  return (
    <div
      className="banner bg-cover flex flex-col items-start justify-center text-white pl-8"
      style={{
        backgroundImage: `url(${ trending ? IMAGE_URL + trending.backdrop_path : ""})`
      }}
    >
      <div className="title">
        <h1 className="font-extrabold text-4xl w-1/3 mb-4 drop-shadow-2xl">{ trending ? trending.original_title : "" }</h1>
      </div>
      <div className="buttons flex flex-row mb-4">
        <button className=" cursor-pointer">
          <i class="fa-solid fa-play" style={{ color: "#ffffff" }}></i> Play
        </button>
        <button className=" cursor-pointer">
          <i class="fa-solid fa-plus" style={{ color: "#ffffff" }}></i> My list
        </button>
      </div>
      <div className="description w-1/3">
        <div className="description-head font-bold">description</div>
        <div className="description-content">
          <p className='drop-shadow-2xl'>
            { trending ? trending.overview : "" }
          </p>
        </div>
      </div>
      <div className="bottom-fade"></div>
    </div>
  );
}

export default Banner;
