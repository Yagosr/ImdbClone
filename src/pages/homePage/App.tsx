import React from "react";
import {CardImage, Carrosel, Content, ContentRight, Home, Card, List, ListRight, Next, Play, Title, Description, Banner, TitleCard, DescriptionCard, BannerRight } from "../../style";
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide} from 'swiper/react'
import {register} from 'swiper/element/bundle'

register()

const App: React.FC = () => {

  const list = [
    {id: '1', image: 'https://www.syfy.com/sites/syfy/files/styles/hero_image__large__computer__alt/public/2022/03/invi_s1_fg_104_00033023.still202.jpg', cardimage: 'https://uploads.metropoles.com/wp-content/uploads/2022/01/05091839/Invencible.jpg', title: '"invicible" Returns for season 2', description: 'Watch the New Trailer' },
    {id: '2', image: 'https://olhardigital.com.br/wp-content/uploads/2022/01/scott-pilgrim-game-1536x1022.webp'},
    {id: '3', image: 'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQaEBw_mb1g_Ec8IPfYLW0WLFBIo3sMT5dj-fa-6PvZxxAg4-qQsQjICGWR5bjPgkAzZ77LhQAj4HzptCTByOnrDOnXlC465ZxYCWS4NjcT2Ky1nmjzqHul1ivi7aEiPJY807sR1wYwIf0iLYrrnLuZ11E48.jpg?r=2b3  ' },
    {id: '4', image: 'https://portalpopline.com.br/wp-content/uploads/2023/04/trailer-a-cantiga-dos-passaros-e-das-serpentes.jpg'},
  ]

  return (
    <div>
        <Content>
          <Home>
            <Card>
              <Carrosel>
                <Swiper
                  slidesPerView={1}
                  pagination={{clickable:true}}
                  navigation
                >
                  {list.map((item) => (
                    <SwiperSlide key={item.id}> 
                        <img 
                          width={'1000px'}
                          height={'550px'}
                          src={item.image} 
                          alt="Slider"
                        />
                        <img 
                            src={item.cardimage} 
                            alt="imagem do Card"
                            width={"150px"}
                            height={"200px"}
                         />
                          <svg style={{ cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play-circle"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                          <span>{item.title}</span>
                          <span>{item.description}</span>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Carrosel>
            </Card>
            <ContentRight>
              <Next>
                <span>A seguir</span>
              </Next>
              <List>
                  <div>
                    <img src="./img/scott.jpg" alt="Banner Serie Scoot pilgrin" width={'100px'} height={'150px'} />
                  </div>
                  <ListRight>
                    <Play>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play-circle"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                      <p style={{color: 'gray'}}>1:57</p>
                    </Play>
                    <Title>
                      <strong>Scott Pilgrim: A Série</strong>
                    <Description>
                      <p>Watch the new trailer</p>
                    </Description>
                    </Title>
                  </ListRight>
              </List>
              <List>
                  <div>
                    <img src="./img/squidGame.jpg" alt="Banner Serie Scoot pilgrin" width={'100px'} height={'150px'} />
                  </div>
                  <ListRight>
                    <Play>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play-circle"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                      <p style={{color: 'gray'}}>1:57</p>
                    </Play>
                    <Title>
                      <strong>Squid Game: The new chalenge</strong>
                    <Description>
                      <p>Watch the new trailer</p>
                    </Description>
                    </Title>
                  </ListRight>
              </List>
              <List>
                  <div>
                    <img src="./img/vorazesw.jpg" alt="Banner Serie Scoot pilgrin" width={'100px'} height={'150px'} />
                  </div>
                  <ListRight>
                    <Play>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play-circle"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                      <p style={{color: 'gray'}}>1:57</p>
                    </Play>
                    <Title>
                      <strong>The Hunger Games</strong>
                    <Description>
                      <p>Watch the new trailer</p>
                    </Description>
                    </Title>
                  </ListRight>
              </List>
            </ContentRight>
          </Home>
        </Content>
    </div>
  );
}

export default App;
