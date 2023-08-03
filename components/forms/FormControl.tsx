import { FC, ReactNode } from 'react';

interface FormControlProps {
  children: ReactNode;
  error?: boolean;
}

const FormControl: FC<FormControlProps> = ({ children, error }) => {
  return (
    <div
      className={`bg-white flex items-start mb-4 py-1.5 px-3 gap-2.5 border border-tertiary border-solid rounded-md shadow-formShadow focus-within:shadow-formShadowHover ease-buttonHover duration-500 shadow-tertiary ${
        error && 'shadow-error border-error'
      }`}
    >
      {children}
    </div>
  );
};

export default FormControl;
