import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import getConfig from "../../config/key";

const Detail: React.FC = () => {

    const { id } = useParams();
    const [movies, setMovies] = useState<any>({})
    const image_path = 'https://image.tmdb.org/t/p/w500'
    
    const config = getConfig();

    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1&api_key=${config.apiKey}`)
        .then(response => response.json())
        .then(data => {
            const movie = {
                id,
                title: data.title,
                sinopse: data.overview,
                image: `${image_path}${data.poster_path}`,
                releaseDate: data.release_date 
            }
            setMovies(movie)
        })
    },[id])

    return(
       <>
            <h1 style={{color:'white'}}>Hello World</h1>
       </>
    )
}

export default Detail