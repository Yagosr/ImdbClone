  import React, { useEffect, useState } from "react";
  import getConfig from "../../config/key";

  import "swiper/css";
  import 'swiper/css/navigation';
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";

  import { Link } from "react-router-dom";
  import {register} from 'swiper/element/bundle';
  import { Swiper, SwiperSlide} from 'swiper/react';
  import {Content, Carrosel, Cards, Title, Subtitle} from "./style";

  register()

  const Navigation: React.FC = () => {

    const config = getConfig();
    const [movies, setMovies] = useState<any>([]);
    const image_path = 'https://image.tmdb.org/t/p/w500'

        useEffect(() => {
          fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${config.apiKey}`)
          .then(response => response.json())
          .then(data => {
            setMovies(data.results)
          })
        }, [])

      return(
          <Content>
            <h1>Os mais Populares</h1>
            <Carrosel>
                  <Swiper
                    style={{width:"100%", background:'#121212'}}
                    slidesPerView={5}
                    spaceBetween={25}
                    navigation={true}
                  >
                    {movies.map((movie) => (
                      <SwiperSlide key={movie.id} style={{border:"1px solid black"}}> 
                      <Link to={`detail/${movie.id}`}>
                          <img 
                            width={'100%'}
                            height={'100%'}
                            src={`${image_path}${movie.poster_path}`} 
                            alt="Slider"
                            />
                      </Link>
                      <Cards>
                          <Subtitle>
                            {movie.release_date}
                          </Subtitle>
                          <Title>
                            {movie.title}
                          </Title>
                      </Cards>
                      </SwiperSlide>
                    ))}
                  </Swiper>
              </Carrosel> 
          </Content>
      )
  }

  export default Navigation