import React, { useEffect, useState } from "react";

import { Container } from "rsuite";
import { Button } from "../detail/style";
import { useParams } from "react-router-dom";
import { Cards, Content, Title, Image, Row, Info, Subtitle, Icon } from "./style";

import getConfig from "../../config/key";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Search: React.FC = () => {

  const [movies, setMovies] = useState<any>([])
  const { id } = useParams<{ id: string }>();
  const searchTerm = id ? decodeURIComponent(id) : "";
  const image_path = 'https://image.tmdb.org/t/p/w500'
  const config = getConfig();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${config.apiKey}`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
    })
  }, [searchTerm, config.apiKey])
  
  const getFirstTwoDigits = (voteAverage: number) => {
   
    const voteAverageString = voteAverage.toString();
    const parts = voteAverageString.split(".");

    if (parts.length > 1) {
      return parts[0] + "." + parts[1].charAt(0);
    }

    return voteAverageString;
  };

  return (
    <Container>
          <Row>
            <h1 style={{color:'white'}}>the search result for: {searchTerm}</h1>
          </Row>
      <Content>
          {movies.map((movie) => (
            <Cards key={movie.id}>
                  <Image>
                    <img style={{display:'flex', flexDirection:'row'}} width={'200px'} src={`${image_path}${movie.poster_path}` } alt="" />
                  </Image>
                    <Title>
                      <span>{movie.title} <span>({movie.original_language})</span></span>
                      <span style={{display:'flex', justifyContent:'center'}}>{movie.release_date.slice(0,4)}</span>
                    </Title>
                  <Info>
                      <Icon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="yellow" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      </Icon>
                    <Subtitle>
                      <span>
                        {getFirstTwoDigits(movie.vote_average)}
                      </span>
                    </Subtitle>
                  </Info>
            </Cards>
          ))}
      </Content>
           <Button>
                <a className="link" href="http://localhost:3000/">
                    Back
                </a>
            </Button>
    </Container>
  );
};

export default Search