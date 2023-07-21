import { FC } from 'react';

interface BackgroundLinesProps {
  numberOfLines: number;
}

const BackgroundLines: FC<BackgroundLinesProps> = ({ numberOfLines }) => {
  return (
    <div className="absolute w-full h-full lg:flex top-0 left-0 justify-end hidden">
      <div className="absolute left-0 top-0 right-0 bottom-0 flex w-full h-full justify-around items-start">
        {[...Array(numberOfLines)].map((line, index) => (
          <div
            key={index}
            className="relative w-px h-full bg-backgroundLines z-[-1]"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundLines;
