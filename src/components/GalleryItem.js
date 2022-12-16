import { useRef } from "react";
import {
  useGsapGalleryImg,
  useGsapGalleryTitle,
  useGsapGalleryCategory,
} from "../hooks/gsap";

const GalleryItem = ({ src, title, category }) => {
  const galleryImg = useRef(null);
  const galleryTitle = useRef(null);
  const galleryCategory = useRef(null);

  useGsapGalleryImg(galleryImg);
  useGsapGalleryTitle(galleryTitle, galleryImg);
  useGsapGalleryCategory(galleryCategory, galleryImg);

  return (
    <div className="gallery-item">
      <h1 className="gallery-item-title" ref={galleryTitle}>
        {title}
      </h1>
      <p className="gallery-item-category" ref={galleryCategory}>
        {category}
      </p>
      <div
        ref={galleryImg}
        style={{ backgroundImage: `url(${src})` }}
        className="gallery-item-image"
      ></div>
    </div>
  );
};

export default GalleryItem;
