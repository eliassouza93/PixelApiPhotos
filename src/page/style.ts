import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #f8f9fa;
`;

export const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 30px 20px;
  background-color: #ffffff;
`;

export const PhotoCard = styled.div`
  border: 1px solid #e9ecef;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  width: 320px;
  height: 600px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }
`;

export const PhotoImage = styled.img`
  width: 100%;
  height: 540px;
  object-fit: cover;
  display: block;
`;

export const PhotographerText = styled.p`
  text-align: center;
  color: #6c757d;
  font-size: 0.9em;
  padding: 10px 0;
  margin: 0;
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #727b85ff;
  padding: 40px 0 15px 0;
  margin: 0;
  position: relative;
  letter-spacing: 2px;
  text-transform: uppercase;

  span {
    font-weight: 700;
    color: #3498db;
    margin-left: 5px;
  }

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background-color: white;
    margin: 10px auto 0 auto;
    border-radius: 2px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 25px 0 30px 0;
  background-color: #f8f9fa;
`;

export const PaginationButton = styled.button`
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  background-color: "black";
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.2s, transform 0.1s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: "gray";
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: #e9ecef;
    color: #6c757d;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`;
