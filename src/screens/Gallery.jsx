import React ,{useState ,useCallback} from "react";

import Gallery from "react-photo-gallery";
import { albums } from "../assets/gallery";
import { useParams } from "react-router-dom";
import Carousel, { Modal, ModalGateway } from "react-images";
/* popout the browser and maximize to see more rows! -> */
const GalleryPage = () => {
  const { album } = useParams();
  const photos =
    album === "all"
      ? Object.entries(albums).reduce(
          (prev, curr) => prev.concat(curr[1].photos),
          []
        )
      : albums[album]?.photos;
  
  
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <>
      <div className="head">
        <h2 className="text">{albums[album].title}</h2>
      </div>
      <Gallery photos={photos}  onClick={openLightbox} />



      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
};

export default GalleryPage;
