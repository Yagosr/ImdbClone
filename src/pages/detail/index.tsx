import React, { useEffect, useState } from "react";
import getConfig from "../../config/key";

import { useParams } from "react-router";
import { Container, Content, DetailRight, Title, Info, Avaliation, Percent, Footer, TagLine, Sinopse, Credits, Button } from "./style";

const Detail: React.FC = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState<any>([])
    const image_path = 'https://image.tmdb.org/t/p/w500'
    
    const config = getConfig();

    const formatRuntime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours}h ${remainingMinutes}m`;
      };

    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1&api_key=${config.apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const movieGenres = data.genres.map(genre => genre.name);
            const movie = {
                id,
                title: data.title,
                sinopse: data.overview,
                image: `${image_path}${data.poster_path}`,
                releaseDate: data.release_date,
                language: data.original_language,
                genres: movieGenres.join(', '),
                runtime: formatRuntime(data.runtime), 
                adult: data.adult,
                voteAverage: data.vote_average,
                votePercentage: Math.round(data.vote_average * 10),
                Tagline: data.tagline,
            }
            setMovie(movie)
        })
    },[id])

    return(
    <>
        <Container>
            <h1>Film details</h1>
            <Content>
                <img src={movie.image} alt={movie.sinopse} width={'400px'} height={'500px'} />
                <DetailRight>
                        <Title>
                            <h1>{movie.title} <span style={{color:'gray'}}>(2023)</span></h1>    
                            <Info>
                                <span className="certification">16</span>
                                <span>{movie.releaseDate}</span>
                                <span>({movie.language})</span>
                                            •
                                <span>{movie.genres}</span>
                                            •
                                <span>{movie.runtime}</span>
                            </Info>
                        </Title>
                       
                       <Avaliation>
                            <Percent>
                                <div>
                                   <span className="vote">{movie.votePercentage}%</span>  
                                   <span style={{margin:'0 0.5rem'}}>User review</span>
                                </div>
                            </Percent>
                       </Avaliation>
                       <Footer>
                            <TagLine><span>{movie.tagline}</span></TagLine>
                            <Sinopse>
                            <Credits>
                                <strong>Sinopse</strong>
                            </Credits>  
                                <span>{movie.sinopse}</span>
                            </Sinopse>
                       </Footer>
                </DetailRight>
            </Content>
            <Button>
                <a className="link" href="http://localhost:3000/">
                    Voltar
                </a>
            </Button>
        </Container>
       </>
    )
}

export default Detail