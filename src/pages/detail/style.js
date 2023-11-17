import styled from "styled-components";

export const Container = styled.div`
    color:white;
`
export const Content = styled.div`
    display:flex;
`
export const DetailRight = styled.div`

`
export const Title = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;
    font-size:20px;
    margin: 0 2rem;
    h1 {
        margin: 0;
    }
`

export const Info = styled.div`
    display:flex;
    align-items:center;
    gap:0.5rem;
    
    .certification{
        display:flex;
        border:1px solid gray;
        width:20px;
        color:gray
    }

`
export const Avaliation = styled.div`
    display:flex;
    align-items:center;
    margin: 1rem 2rem;
`

export const Percent = styled.div`
    font-size:20px;

    .vote{
        
    }
`
export const Footer = styled.div`
   margin: 0 2rem;
`
export const TagLine = styled.div`
   color:gray;
`
export const Sinopse = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:center;
   gap:1rem;
`
export const Credits = styled.div`
   font-size: 20px;
`
export const Button = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    margin: 1rem 0;
    border: 1px solid white;
    width: 10%;
    cursor:pointer;
    
    .link{
        text-decoration: none;
        color: white;
        &:hover{
            color: black;
            background-color: white;
        }
    }

    &:hover{
        background-color: white;
        color:black;
    }
`

export const Bilheteria = styled.div`
    display: flex;
    align-items:center;
    margin: 1.5rem 0;
    gap: 0.5rem;

    span{
        color: green;
    }
`