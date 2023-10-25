import React, { useState } from "react";
import DetailModal from "./detailModal";


import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {Content, Carrosel, Cards, Nota, Title, Footer, Play, Information} from "./style";
import { Swiper, SwiperSlide} from 'swiper/react';
import {register} from 'swiper/element/bundle';

register()

const Navigation: React.FC = () => {

    const [openModal, setOpenModal] = useState<boolean>(false)

    const list = [
        {id: '1', image: 'https://img.elo7.com.br/product/original/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg', star:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="yellow" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, nota:'6,8', name:'Capitã Marvel', Play:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>, trailer:'Trailer', info:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>},
        {id: '2', image: 'https://img.elo7.com.br/product/original/2747CBC/big-poster-filme-aladdin-2019-lo01-tamanho-90x60-cm-nerd.jpg', star:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="yellow" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, nota:'6,8', name:'Aladdin', Play:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>, trailer:'Trailer', info:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>},
        {id: '3', image: 'https://uauposters.com.br/media/catalog/product/3/2/322320211103-uau-posters-filmes-back-to-the-future-de-volta-para-o-futuro.jpg', star:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="yellow" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, nota:'6,8', name:'De volta pro futuro', Play:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>, trailer:'Trailer', info:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg> },
        {id: '5', image: 'https://img.elo7.com.br/product/main/259A7AA/big-poster-filme-vingadores-ultimato-lo001-tamanho-90x60-cm-poster-marvel.jpg', star:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="yellow" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, nota:'6,8', name:'Vingadores: Ultimato', Play:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>, trailer:'Trailer', info:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>},
        {id: '6', image: 'https://s2-techtudo.glbimg.com/FGUM3Rq3oJpF-tUkma6y9gdOQ7w=/0x0:620x914/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/c/k/MRk3mCRhuYKtX5GhnbeQ/2012-09-05-10.jpg', star:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="yellow" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, nota:'6,8', name:'Homem Aranha 2', Play:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>, trailer:'Trailer', info:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>},
        {id: '7', image: 'https://legadodadc.com.br/wp-content/uploads/2023/04/poster-the-flash-legadodadc.webp',  star:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="yellow" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, nota:'6,8', name:'The flash', Play:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>, trailer:'Trailer', info:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>},
        {id: '8', image: 'https://www.europanet.com.br/posteres-filmes-series/img/capas/107198.jpg',  star:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="yellow" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, nota:'6,8', name:'The last of us', Play:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>, trailer:'Trailer', info:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>},
      ]

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
                  {list.map((item) => (
                    <SwiperSlide key={item.id} style={{border:"1px solid black"}}> 
                        <img 
                          width={'100%'}
                          height={'100%'}
                          src={item.image} 
                          alt="Slider"
                          />
                    <Cards>
                        <Nota>
                          {item.star}
                          {item.nota}
                        </Nota>
                        <Title>
                          {item.name}
                        </Title>
                        <Footer>
                          <Play>
                            {item.Play}
                            {item.trailer}
                          </Play>
                          <Information>
                            <p onClick={() => { setOpenModal(true)}}>
                              {item.info}
                            </p>
                          </Information>
                          <DetailModal
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                          >
                          </DetailModal>
                        </Footer>
                    </Cards>
                    </SwiperSlide>
                  ))}
                </Swiper>
            </Carrosel> 
        </Content>
    )
}

export default Navigation