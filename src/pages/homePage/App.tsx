import React, { useEffect, useState } from "react";
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Carrosel, Content, ContentRight, Home, Card, List, ListRight, Next, Play, Title, Description } from "./style";
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import getConfig from "../../config/key";
import Menu from "../../components/menu/index.tsx";
import Navigation from "../../components/navigation/index.tsx";
import SkeletonLoader from "../../components/skeletonLoader/index.tsx";

register();

const App: React.FC = () => {
  const [movies, setMovies] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const image_path = 'https://image.tmdb.org/t/p/w500';
  const config = getConfig();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${config.apiKey}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results.slice(0, 3));
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Menu />
      <Content>
        <Home>
          <Card>
            <Carrosel>
              {isLoading ? (
                <SkeletonLoader />
              ) : (
                <Swiper
                  style={{ width: "800px", marginLeft: "1rem" }}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  navigation
                >
                  {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                      <img
                        style={{ marginTop: "4rem" }}
                        width={'800px'}
                        height={'500px'}
                        src={`${image_path}${movie.poster_path}`}
                        alt="Slider"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </Carrosel>
          </Card>

          <ContentRight>
          {isLoading ? (
                    <SkeletonLoader />
                  ) : (
            <Next>
              <span>Next</span>
            </Next>
                  )};
                {movies.map((movie, index) => (
                  <List key={index}>
                    <div>
                      {isLoading ? (
                        <SkeletonLoader />
                      ) : (
                        <img src={`${image_path}${movie.poster_path}`} alt={`Banner ${movie.title}`} width={'100px'} height={'150px'} />
                      )}
                    </div>
                    <ListRight  >
                      <Play>
                        <a className="link" href={`https://www.youtube.com/watch?v=${movie.videoId}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play-circle"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
                        </a>
                        <p style={{ color: 'gray' }}>{movie.duration}</p>
                      </Play>
                      <Title>
                        <strong>{movie.title}</strong>
                      </Title>
                      <Description>
                        <p>{isLoading ? 'Loading...' : 'Watch the new trailer'}</p>
                      </Description>
                    </ListRight>
                  </List>
                ))}
          </ContentRight>
        </Home>
      </Content>
      <Navigation />
    </div>
  );
}

export default App;
