import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    color: white;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  margin: 10px;
  width: 20%;
  border: 1px solid white;
  background-color: #121212;
`;

export const Info = styled.div`
  display: flex;
  color: white;
  justify-content: center
  align-items:center;
  gap: 0.1rem;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center
    align-items:center;
    margin: 1rem 0;
    font-size: 15
    px;
`;

export const Image = styled.div`
  width: 80%;
  height: auto;
  margin-bottom: 10px;
`;

export const Subtitle = styled.div`
    color: white;
    display: flex;
    align-items:baseline;
    justify-content: center;
    gap: 5px;
`

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
`