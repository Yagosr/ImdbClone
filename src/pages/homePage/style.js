import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Home = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`

`;

export const Carrosel = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Next = styled.div`
  color: white;
  font-size: 30px;
  color: yellow;
  margin-top: 1rem;
`;

export const List = styled.div`
  display: flex;
  gap: 1rem;
  background-color: #121212;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    
  }
`;

export const ListRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Play = styled.div`
  display: flex;
  gap: 0.5rem;

  .link {
    cursor: pointer;
    color: white;

    &:hover {
      color: yellow;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

export const Description = styled.div`
  color: gray;
  margin-top: -1rem;
`;

