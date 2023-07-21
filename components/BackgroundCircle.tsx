import { FC } from 'react';

interface BackgroundCircleProps {}

const BackgroundCircle: FC<BackgroundCircleProps> = () => {
  return (
    <div className="absolute rounded-full bg-gradient-to-b from-secondary via-hoverMedium to-white opacity-25 lg:w-[850px] lg:h-[850px] md:w-[650px] md:h-[650px] sm:w-[450px] sm:h-[450px] w-[300px] h-[300px] left-2/4 -translate-x-2/4 z-[-1] top-0"></div>
  );
};

export default BackgroundCircle;
