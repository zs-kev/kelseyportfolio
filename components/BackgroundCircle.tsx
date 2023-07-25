import { FC } from 'react';

interface BackgroundCircleProps {}

const BackgroundCircle: FC<BackgroundCircleProps> = () => {
  return (
    <div className="absolute rounded-full bg-gradient-to-b from-secondary via-hoverMedium to-white opacity-25 w-full h-full"></div>
  );
};

export default BackgroundCircle;
