'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import urlFor from '../lib/urlFor';
import { Post } from '../typings';

type Props = {
  posts: Post[];
};

function extractImageDimensions(url: string) {
  // Extract the dimensions from the URL using regular expression
  const regex = /-(\d+x\d+)\./;
  const match = url.match(regex);

  if (match && match[1]) {
    const [width, height] = match[1].split('x');
    return { width: parseInt(width), height: parseInt(height) };
  }

  return { width: 0, height: 0 };
}

function Posts({ posts }: Props) {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  useEffect(() => {
    // Add an event listener to the document body to handle clicks outside of the lightbox
    const handleBodyClick = (e: MouseEvent) => {
      if (lightboxIsOpen && e.target) {
        const lightbox = document.querySelector('.lightbox-popup');
        if (lightbox && !lightbox.contains(e.target as Node)) {
          closeLightbox();
        }
      }
    };

    // Attach the event listener when the lightbox is open
    if (lightboxIsOpen) {
      document.body.addEventListener('click', handleBodyClick);
    }

    // Remove the event listener when the component is unmounted
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [lightboxIsOpen]);

  const images = posts.map((post) => {
    const imageUrl = urlFor(post.mainImage).url();
    const { width, height } = extractImageDimensions(imageUrl);
    return {
      src: imageUrl,
      alt: post.mainImage.alt,
      width,
      height,
    };
  });

  return (
    <div className="my-5 mx-auto md:columns-2 lg:columns-3 2xl:columns-4 gap-x-5 break-inside-avoid xl:px-8 px-4 relative">
      {images.map((image, index) => (
        <div key={index} className="w-full mb-5">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority={true}
            className="max-w-full cursor-pointer"
            onClick={() => openLightbox(index)}
          />
        </div>
      ))}
      {lightboxIsOpen && (
        <div className="lightbox-popup absolute top-0 left-0 z-[9999]">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p
              className="cursor-pointer w-fit font-Josefin hover:text-secondary transition duration-150 ease-in-out"
              onClick={closeLightbox}
            >
              Close
            </p>
            <Carousel showArrows selectedItem={selectedImageIndex}>
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="max-h-screen w-auto object-contain"
                />
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
}

export default Posts;
