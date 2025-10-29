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

interface PhotoPixelProps {
  photo: Photo;
}

export const PhotoPixel: React.FC<PhotoPixelProps> = ({ photo }) => {
  return (
    <PhotoCard key={photo.id}>
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
