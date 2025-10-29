import styled from "styled-components";

export const PhotoCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const PhotoImage = styled.img`
  width: 100%;
  height: 550px;
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    height: 100%;
    margin-top: 10px;
    cursor: none;
  }
`;

export const PhotographerText = styled.p`
   text-align: center;
  color: gray;
  font-size: 10px;
  padding: 8px 0;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 10px;
  }
`;
