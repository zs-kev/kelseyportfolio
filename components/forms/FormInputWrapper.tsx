import { FC, ReactNode } from 'react';

interface FormInputWrapperProps {
  children: ReactNode;
}

const FormInputWrapper: FC<FormInputWrapperProps> = ({ children }) => {
  return (
    <div className="bg-white flex items-start mb-4 py-1.5 px-3 gap-2.5 border border-tertiary border-solid rounded-md shadow-formShadow shadow-tertiary">
      {children}
    </div>
  );
};

export default FormInputWrapper;
