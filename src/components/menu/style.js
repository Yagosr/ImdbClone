import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    background-color:#121212;
    height:70px;
    color: white;
    margin: -1rem -0.5rem;
`
export const NavMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:1rem;
    &:hover{
        background-color: #363839;
        border-radius: 0.5rem;
        padding:5px;
    }
`
export const Input = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    position: relative;
    border: 1px solid yellow;
`
export const Favorite = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    gap:0.5rem;
    cursor:pointer;
    &:hover{
        background-color: #363839;
        border-radius: 0.5rem;
        padding:5px;
    }
`
export const Login = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    gap:1rem;   
    cursor: pointer;
    &:hover{
        background-color: #363839;
        border-radius: 0.5rem;
        padding:10px;
    }
`