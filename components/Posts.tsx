'use client';

import Image from 'next/image';
import { useState } from 'react';
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
    <div className="my-5 mx-auto md:columns-2 lg:columns-3 2xl:columns-4 gap-x-5 break-inside-avoid xl:px-8 px-4">
      {images.map((image, index) => (
        <div key={index} className="w-full mb-5">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority={true}
            className="max-w-full"
          />
        </div>
      ))}
      <Carousel>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Posts;
