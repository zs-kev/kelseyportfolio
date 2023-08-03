import { ChangeEvent } from 'react';

export interface InputProps {
  type: 'text' | 'number' | 'email' | 'password' | 'tel';
  required: boolean;
  placeholder: string;
  name: string;
  value: string | number;
  autoFocus?: boolean;
  pattern?: string;
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  required,
  placeholder,
  name,
  value,
  autoFocus,
  pattern,
  disabled,
  onChange,
}) => {
  return (
    <input
      type={type}
      required={required}
      placeholder={placeholder}
      name={name}
      value={value}
      id={name}
      autoFocus={autoFocus}
      pattern={pattern}
      disabled={disabled}
      onChange={onChange}
      className="py-2 px-3 w-full border-0 text-tertiary outline-0 placeholder-tertiary"
    />
  );
};

export default Input;
