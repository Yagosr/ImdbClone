import React, { useEffect, useState } from "react";
import getConfig from "../../config/key";
import { useParams } from "react-router";
import DetailSkeleton from "../../components/detailSkeleton/index.tsx";
import { Container, Content, DetailRight, Title, Info, Avaliation, Percent, Footer, TagLine, Sinopse, Credits, Button, Bilheteria, } from "./style";


const Detail: React.FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true); 
  const image_path = 'https://image.tmdb.org/t/p/w500';
  const config = getConfig();

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  useEffect(() => {
    setIsLoading(true); 

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1&api_key=${config.apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        const movieGenres = data.genres.map((genre) => genre.name);
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
          budget: data.budget,
          releaseDateYears: data.release_date.slice(0, 4),
        };
        setMovie(movie);
        setIsLoading(false); 
      });
  }, [id]);

  return (
    <>
      <Container>
        <h1>Film details</h1>
        {isLoading ? (
          <DetailSkeleton />
        ) : (
          <Content>
            <img src={movie.image} alt={movie.sinopse} width={'400px'} height={'500px'} />
            <DetailRight>
              <Title>
                <h1>
                  {movie.title} <span style={{ color: 'gray' }}>({movie.releaseDateYears})</span>
                </h1>
                <Info>
                  <span className="certification">16</span>
                  <span>{movie.releaseDate}</span>
                  <span>({movie.language})</span> • <span>{movie.genres}</span> • <span>{movie.runtime}</span>
                </Info>
              </Title>

              <Avaliation>
                <Percent>
                  <div>
                    <span className="vote">
                      {' '}
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="yellow" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>{' '}
                      {movie.votePercentage}%
                    </span>
                    <span style={{ margin: '0 0.5rem' }}>User review </span>
                  </div>
                </Percent>
              </Avaliation>
              <Footer>
                <TagLine>
                  <span>{movie.tagline}</span>
                </TagLine>
                <Sinopse>
                  <Credits>
                    <strong>Sinopse</strong>
                  </Credits>
                  <span>{movie.sinopse}</span>
                </Sinopse>

                <Bilheteria>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-popcorn">
                    <path d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4" />
                    <path d="M10 22 9 8" />
                    <path d="m14 22 1-14" />
                    <path d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z" />
                  </svg>
                  <span>R${movie.budget}</span>
                </Bilheteria>
              </Footer>
            </DetailRight>
          </Content>
        )}
        <Button>
          <a className="link" href="http://localhost:3000/">
            Back
          </a>
        </Button>
      </Container>
    </>
  );
};

export default Detail;