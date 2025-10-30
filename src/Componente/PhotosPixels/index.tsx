import React from "react";
import { PhotoCard, PhotoImage, PhotographerText } from "./styles";

interface Photo {
  id: number;
  url: string;
  photographer: string;
  src: {
    original: string;
  };
}
//photo
interface PhotoPixelProps {
  photo: Photo;
}

export const PhotoPixel: React.FC<PhotoPixelProps> = ({ photo }) => {
  const handleClick: () => void = () => {
    window.open(photo.src.original, "_blank");
  };
  return (
    <PhotoCard onClick={handleClick}  key={photo.id}>
      <PhotoImage
        src={photo.src.original}
        alt={`Foto por ${photo.photographer}`}
      />
      <PhotographerText>
        Fotógrafo: <strong>{photo.photographer}</strong>
      </PhotographerText>
    </PhotoCard>
  );
};
