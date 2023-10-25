import React from "react";
import { Content, Input, NavMenu, Favorite, Login} from "./style";

const Menu: React.FC = () => {
    return(
        <Content>
              <NavMenu>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                <strong>Menu</strong>
              </NavMenu>
              <img style={{borderRadius: '0.5rem'}} src="./img/download.png" alt="Logo-IMDB" width={'75px'} height={'35px'} />
              <Input>
                <input style={{ border:'none', borderRadius:'5px', width: "600px", height: "35px", paddingRight: "30px"}} type="search" placeholder="Pesquisar na IMDb"/>
                <i style={{position: "absolute", top: "0.2rem", right: "0.5rem", margin: "7px", cursor: "pointer"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 1 0 1.397-1.398l-3.85-3.85zM2 6.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/>
                  </svg>
              </i>
              </Input>
              <div>
                <strong style={{fontSize:'35px', color:'gray'}}>|</strong>
              </div>
              <Favorite>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z"></path></svg>
                <strong>Lista de favoritos</strong>
              </Favorite>
              <Login>
                <strong>Fazer Login</strong>
              </Login>
          </Content>
    )
}

export default Menu