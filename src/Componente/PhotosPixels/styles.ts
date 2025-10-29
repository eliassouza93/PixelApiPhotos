import styled from "styled-components";

export const PhotoCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;
export const PhotoImage = styled.img`
  width: 100%;
  height: 550px;
  object-fit: cover;
  display: block;
`;

export const PhotographerText = styled.p`
  text-align: center;
  color: gray;
  font-size: 0.9em;
  padding: 8px 0;
  margin: 0;
`;
