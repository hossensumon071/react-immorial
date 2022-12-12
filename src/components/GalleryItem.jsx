import React, { useRef } from 'react';
import { 
  useGsapGalleryTitle,
  useGsapGalleryCategory,
  useGsapGalleryImage,
} from "../Hooks/gsap";

const GalleryItem = ({image}) => {
  const galleryTitleRef = useRef(null);
  const galleryCategoryRef = useRef(null);
  const galleryImageRef = useRef(null);

  useGsapGalleryTitle(galleryTitleRef, galleryImageRef)
  useGsapGalleryCategory(galleryCategoryRef, galleryImageRef)
  useGsapGalleryImage(galleryImageRef)

  return (
      <div className="gallery-item">
        <h1 className="gallery-item-title" ref={galleryTitleRef}>{image.title}</h1>
        <p className="gallery-item-category" ref={galleryCategoryRef}>{image.category}</p>
        <div className="gallery-item-img" style={{backgroundImage: `url(${image.src})`}} ref={galleryImageRef}></div>
      </div>
  );
};

export default GalleryItem;