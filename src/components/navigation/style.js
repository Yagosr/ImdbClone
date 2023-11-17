import styled from "styled-components";

export const Content = styled.div`
    color: white;
`
export const Carrosel = styled.div`
    background-color:#121212;
    margin-top: 2rem;
`
export const Cards = styled.div`
    display: flex;
    flex-direction:column;
    gap:1rem;
`
export const Nota = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`
export const Title = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    font-size:12px;
    padding: 1  rem 0;
`
export const Subtitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:15px
`
export const Info = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-around;
    cursor: pointer;
`

export const Rating = styled.div`
    &:hover{
        color: yellow;
    }
`

export const Favorite = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    gap:0.2rem;

    svg{

        &:hover{
            color:yellow;
            fill: yellow;
        }
    }
`

