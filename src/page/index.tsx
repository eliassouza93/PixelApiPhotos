// Home.tsx
import axios from "axios";
import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";

import { PhotoPixel } from "../Componente/PhotosPixels";
import {
  GalleryContainer,
  PaginationButton,
  PaginationContainer,
  Spinner,
  SpinnerContainer,
  Title,
} from "./style";

const GlobalStyle = createGlobalStyle`
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

interface Photo {
  id: number;
  url: string;
  photographer: string;
  src: {
    original: string;
  };
}

const LoadingSpinner: React.FC = () => (
  <SpinnerContainer>
    <Spinner />{" "}
  </SpinnerContainer>
);

export const Home: React.FC = () => {
  const pexelsKey = import.meta.env.VITE_PEXELS_API_KEY;
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setPhotos([]);

    if (!pexelsKey) {
      console.error("ERRO: Chave PEXELS não encontrada.");
      setLoading(false);
      return;
    }

    const apiUrl = `https://api.pexels.com/v1/curated?per_page=20&page=${page}`;

    axios
      .get(apiUrl, {
        headers: {
          Authorization: pexelsKey,
        },
      })
      .then((response: any) => {
        setPhotos(response.data.photos);
        setHasMore(!!response.data.next_page);
        console.log(`Página ${page} carregada.`, response.data);
      })
      .catch((error: any) => {
        console.error("Erro ao conectar à Pexels API:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pexelsKey, page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(1, prevPage - 1));
    window.scrollTo(0, 0);
  };

  if (loading || photos.length === 0) {
    return (
      <>
        <GlobalStyle />
        <LoadingSpinner />{" "}
      </>
    );
  }

  return (
    <>
      <GlobalStyle />{" "}
      <div>
        <Title> GALERIA PIXELS - Página {page} </Title>
        <PaginationContainer>
          <PaginationButton onClick={handlePrevPage} disabled={page === 1}>
            Página Anterior
          </PaginationButton>

          <PaginationButton onClick={handleNextPage} disabled={!hasMore}>
            Próxima Página
          </PaginationButton>
        </PaginationContainer>{" "}
        <GalleryContainer>
          {" "}
          {photos.map((photo) => (
            <PhotoPixel key={photo.id} photo={photo} />
          ))}{" "}
        </GalleryContainer>
        <PaginationContainer>
          <PaginationButton onClick={handlePrevPage} disabled={page === 1}>
            Página Anterior
          </PaginationButton>

          <PaginationButton onClick={handleNextPage} disabled={!hasMore}>
            Próxima Página
          </PaginationButton>
        </PaginationContainer>{" "}
      </div>{" "}
    </>
  );
};
