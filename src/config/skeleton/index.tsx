import React, { useEffect, useState } from "react";

import {Carrosel, Content, ContentRight, Home, Card, List, ListRight, Next, Play, Title, Description} from "../../pages/homePage/style.js";

import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Menu from "../../components/menu/index.tsx";
import Navigation from "../../components/navigation/index.tsx";


const Skeleton: React.FC = () => {
    return(
        <div>
            <Menu/>
            <Content>
              <Home>
                <Card>
                  <Carrosel>
                    <Skeleton></Skeleton>
                  </Carrosel>
                </Card>
            
                <ContentRight>
                  <Next>
                    
                  </Next>
                    <List>
                        <ListRight>
                          <Play>
                           
                          </Play>
                          <Title>
                            
                          <Description>
                            
                          </Description>
                          </Title>
                        </ListRight>
                    </List>
                    <List>
                        
                        <ListRight>
                          <Play>
                            
                          </Play>
                          <Title>
                            
                          <Description>
                            
                          </Description>
                          </Title>
                        </ListRight>
                    </List>
                
                
                    <List>
                        
                        <ListRight>
                          <Play>
                            
                          </Play>
                          <Title>
                           
                          <Description>
                            
                          </Description>
                          </Title>
                        </ListRight>
                    </List>
                </ContentRight>
              </Home>
            </Content>
            <Navigation/>
        </div>
    )   
}

export default Skeleton