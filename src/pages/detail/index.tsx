import React, { useEffect, useState } from "react";
import getConfig from "../../config/key";

import { useParams } from "react-router";
import { Container, Content } from "./style";

const Detail: React.FC = () => {

    const { id } = useParams();
    const [movies, setMovie] = useState<any>([])
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
            setMovie(movie)
        })
    },[id])

    return(
       <>
        <Container>
            <h1>Detalhes Do Filme</h1>
            <Content>
                
            </Content>

        </Container>
       </>
    )
}

export default Detail