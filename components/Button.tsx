import { FC } from 'react';

interface ButtonProps {
  children: string;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className="py-3 px-9 w-full font-Josefin font-bold border border-solid border-tertiary rounded bg-hoverMedium shadow-formShadow shadow-tertiary">
      {children}
    </button>
  );
};

export default Button;
