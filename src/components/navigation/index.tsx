import React, { useEffect, useState } from "react";

import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useNavigate } from "react-router-dom";
import { Content, Carrosel, Cards, Title, Subtitle, Info, Favorite, Rating } from "./style";

import "swiper/css";
import 'swiper/css/navigation'; 
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import getConfig from "../../config/key";

  register()

  const Navigation: React.FC = () => {

    const navigate = useNavigate();
    const config = getConfig();
    const [movies, setMovies] = useState<any>([]);
    const image_path = 'https://image.tmdb.org/t/p/w500'
    const apiUrl = "https://api.themoviedb.org/3/authentication/session/new";
    

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${config.apiKey}&request_token=${config.requestToken}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
      })
    }, [])

    const handleDetailsClick = (movieId: number) => {
      navigate(`/detail/${movieId}`);
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const requestToken = await getRequestToken();
          const accessToken = await authenticateUser(requestToken);
    
          const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${config.apiKey}&request_token=${config.requestToken}`);
          const data = await response.json();
          setMovies(data.results);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    }, [config.apiKey, config.requestToken]);
  
    const handleFavoriteClickLocal = async (movieId: number) => {
      const apiKey = '9f153230ddd091a424667b32459449c3';
      const url = `https://api.themoviedb.org/3/account/null/favorite?api_key=${apiKey}&request_token=${config.requestToken}`;
    
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            media_type: 'movie',
            media_id: movieId,
            favorite: true,
          }),
        });
    
        const data = await response.json();
        console.log('Movie added to favorites:', data);
      } catch (error) {
        console.error('Error adding movie to favorites:', error);
      }
    };

    const getRequestToken = async () => {
      const apiKey = '9f153230ddd091a424667b32459449c3';
      const response = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}&request_token=${config.requestToken}`);
      const data = await response.json();
      return data.request_token;
    };
    
    const LoginPage: React.FC = () => {
      const navigate = useNavigate();
    
      useEffect(() => {
        const redirectToTmdbLogin = async () => {
          const requestToken = await getRequestToken();
          window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}`;
        };
    
        redirectToTmdbLogin();
      }, [navigate]);
    
      return <div>Redirecionando para a página de login do TMDb...</div>;
    };

    const authenticateUser = async (requestToken: string) => {
      const apiKey = '9f153230ddd091a424667b32459449c3';
      const response = await fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${config.requestToken}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          request_token: requestToken,
        }),
      });
    
      const data = await response.json();
      return data.session_id;
    };
    
    
      return(
          <Content>
            <h1>Most Popular</h1>
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
                          <Title>
                            {movie.title}
                          <Subtitle>
                            {movie.release_date}
                          </Subtitle>
                          </Title>
                          <Info>
                            <Favorite onClick={() => handleFavoriteClickLocal(movie.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                                <span>List</span>
                            </Favorite>
                            <Rating>
                               <svg onClick={() => handleDetailsClick(movie.id)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                            </Rating>
                          </Info>
                      </Cards>
                      </SwiperSlide>
                    ))}
                  </Swiper>
              </Carrosel> 
          </Content>
      )
  }

  export default Navigation