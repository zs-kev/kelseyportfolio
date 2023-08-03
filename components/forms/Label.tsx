import { FC } from 'react';

interface LabelProps {
  children: any;
}

const Label: FC<LabelProps> = ({ children }) => {
  return <label className="inline-block h-6 w-6 mt-2">{children}</label>;
};

export default Label;
