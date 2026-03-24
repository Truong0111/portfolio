import React, { useState } from "react";
import styled from "styled-components";
import { type MediaItem, MediaType } from "../types";
import { Row } from "../Styles/StyledComponents";
const MediaWrapper = styled(Row)`
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const MediaIframe = styled.iframe`
  width: 70%;
  height: 100%;
  border: none;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MediaImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: contain;
  cursor: pointer;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupImage = styled.img`
  max-width: 70%;
  max-height: 70%;

  @media (max-width: 768px) {
    max-width: 90%;
    max-height: 90%;
  }
`;

const BigMedia: React.FC<MediaItem> = ({ source, type }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    if (type === MediaType.Image) {
      setIsPopupOpen(true);
    }
  };

  const getYouTubeEmbedUrl = (url: string) => {
    try {
      // watch?v=
      if (url.includes("watch?v=")) {
        const id = url.split("watch?v=")[1].split("&")[0];
        return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1`;
      }

      // shorts
      if (url.includes("shorts/")) {
        const id = url.split("shorts/")[1].split("?")[0];
        return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1`;
      }

      // youtu.be
      if (url.includes("youtu.be/")) {
        const id = url.split("youtu.be/")[1].split("?")[0];
        return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1`;
      }

      return url;
    } catch {
      return "";
    }
  };

  return (
    <>
      <MediaWrapper onClick={handleClick}>
        {type === MediaType.YouTube ? (
          <MediaIframe
            src={getYouTubeEmbedUrl(source)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <MediaImage src={`${source}`} alt="Game Media" />
        )}
      </MediaWrapper>

      {isPopupOpen && (
        <PopupOverlay onClick={() => setIsPopupOpen(false)}>
          <PopupImage src={`${source}`} alt="Enlarged Media" />
        </PopupOverlay>
      )}
    </>
  );
};

export default BigMedia;
