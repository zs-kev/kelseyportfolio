import Image from 'next/image';
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
  // Return each image with its url and width and height and add to variable
  const postElements = posts.map((post) => {
    const imageUrl = urlFor(post.mainImage).url();
    const { width, height } = extractImageDimensions(imageUrl);

    return (
      <div key={post._id} className="w-full mb-5">
        <Image
          src={imageUrl}
          alt={post.mainImage.alt}
          width={width}
          height={height}
          className="max-w-full rounded-2xl"
        />
      </div>
    );
  });

  // Return array of images with correct widths and heights
  return (
    <div className="my-5 mx-auto md:columns-2 lg:columns-3 2xl:columns-4 gap-x-5 break-inside-avoid w-[calc(100%-8rem)]">
      {postElements}
    </div>
  );
}

export default Posts;
