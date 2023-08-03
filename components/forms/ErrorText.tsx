import { FC } from 'react';

interface ErrorTextProps {
  message: string;
}

const ErrorText: FC<ErrorTextProps> = ({ message }) => {
  return <p className="text-error text-left text-base">{message}</p>;
};

export default ErrorText;
