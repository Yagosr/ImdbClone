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
    justify-content: center;
    align-items: center;
`
export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const Play = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;
    &:hover{
        border: 1px solid #252323f5;
        background: #252323f5;
        border-radius: 5px;
        padding: 0.5rem;
    }
`
export const Information = styled.div`
    cursor: pointer;
    &:hover{
        border: 1px solid #252323f5;
        background: #252323f5;
        border-radius: 100%;
        padding: 0px 17px;
    }
`
