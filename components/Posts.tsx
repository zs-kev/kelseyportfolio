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
      <div key={post._id} className="w-full">
        <Image
          src={imageUrl}
          alt={post.mainImage.alt}
          width={width}
          height={height}
          layout="responsive"
        />
      </div>
    );
  });

  // Return array of images with correct widths and heights
  return (
    <div className="grid grid-cols-3 auto-rows-auto relative">
      {postElements}
    </div>
  );
}

export default Posts;
