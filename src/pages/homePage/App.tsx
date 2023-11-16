import React, { useEffect, useState } from "react";

import {Carrosel, Content, ContentRight, Home, Card, List, ListRight, Next, Play, Title, Description} from "./style";
import { Swiper, SwiperSlide} from 'swiper/react'
import {register} from 'swiper/element/bundle'

import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import getConfig from "../../config/key";
import Menu from "../../components/menu/index.tsx";
import Navigation from "../../components/navigation/index.tsx";

register()

const App: React.FC = () => {
  
  const [movies, setMovies] = useState<any>([])
  
  const image_path = 'https://image.tmdb.org/t/p/w500'
  const config = getConfig();
  const firstMovie = movies.length > 0 ? movies[0] : null;
  const secondMovie = movies.length > 0 ? movies[1] : null;
  const threMovie = movies.length > 0 ? movies[2] : null;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${config.apiKey}`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results.slice(0,3))
    })
  }, [])

  return (
    <div>
      <Menu/>
        <Content>
          <Home>
            <Card>
              <Carrosel>
                <Swiper
                  style={{width:"800px", marginLeft:"1rem",}}
                  slidesPerView={1}
                  pagination={{clickable:true}}
                  navigation
                >
                  {movies.map((movie) => (
                    <SwiperSlide key={movie.id}> 
                        <img 
                          style={{marginTop:"4rem"}}
                          width={'800px'}
                          height={'500px'}
                          src={`${image_path}${movie.poster_path}`} 
                          alt="Slider"
                        />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Carrosel>
            </Card>
        
            <ContentRight>
              <Next>
                <span>A seguir</span>
              </Next>
              {firstMovie && (
                <List>
                    <div>
                      <img src={`${image_path}${firstMovie.poster_path}`} alt="Banner Serie Scoot pilgrin" width={'100px'} height={'150px'} />
                    </div>
                    <ListRight>
                      <Play>
                        <a className="link" href="https://www.youtube.com/watch?v=Rt0kp4VW1cI">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play-circle"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                        </a>
                        <p style={{color: 'gray'}}>1:57</p>
                      </Play>
                      <Title>
                        <strong>{firstMovie.title}</strong>
                      <Description>
                        <p>Watch the new trailer</p>
                      </Description>
                      </Title>
                    </ListRight>
                </List>
              )}
              {secondMovie && (
                <List>
                    <div>
                      <img src={`${image_path}${secondMovie.poster_path}`} alt="Banner Serie Scoot pilgrin" width={'100px'} height={'150px'} />
                    </div>
                    <ListRight>
                      <Play>
                        <a className="link" href="https://www.youtube.com/watch?v=t3PzUo4P21c">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play-circle"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                        </a>
                        <p style={{color: 'gray'}}>2:21</p>
                      </Play>
                      <Title>
                        <strong>{secondMovie.title}</strong>
                      <Description>
                        <p>Watch the new trailer</p>
                      </Description>
                      </Title>
                    </ListRight>
                </List>
              )}
              {threMovie && (
                <List>
                    <div>
                      <img src={`${image_path}${threMovie.poster_path}`} alt="Banner Serie Scoot pilgrin" width={'100px'} height={'150px'} />
                    </div>
                    <ListRight>
                      <Play>
                        <a className="link" href="https://www.youtube.com/watch?v=jzQn0-WH4WM">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play-circle"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                        </a>
                        <p style={{color: 'gray'}}>2:17</p>
                      </Play>
                      <Title>
                        <strong>{threMovie.title}</strong>
                      <Description>
                        <p>Watch the new trailer</p>
                      </Description>
                      </Title>
                    </ListRight>
                </List>
              )}
            </ContentRight>
          </Home>
        </Content>
        <Navigation/>
    </div>
  );
}

export default App;
