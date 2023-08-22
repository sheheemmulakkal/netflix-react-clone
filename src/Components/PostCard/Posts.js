import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import axios from "../../axios"
import './Posts.css'

function Posts({ title, poster, type, itemType }) {
    const [ movies, setMovies ] = useState([])
    useEffect(() => { 
        axios.get(type)
        .then(( response ) => {
            setMovies( response.data.results )
        })
        
},[])

  return (
    <div className="card text-white my-3 font-semibold text-2xl pl-6">
      <h1 className="my-3 mt-10">{ title }</h1>
      <div className="overflow-x-auto overflow-div">
        <div className="flex flex-row post-cards">
            {
                movies.map((item) => (
                    <PostCard 
                        item = { item } 
                        poster = { poster }
                        itemType = { itemType }
                        key = { item.id }
                        itemId = { item.id }
                    />
                ))
            }
          
        </div>
      </div>
    </div>
  );
}

export default Posts;
