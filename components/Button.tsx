import { FC } from 'react';

interface ButtonProps {
  children: string;
  type: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({ children, type, disabled, loading }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="py-3 px-9 w-full font-Josefin font-bold border border-solid border-tertiary rounded bg-hoverMedium hover:bg-hoverLight ease-buttonHover duration-500 shadow-formShadow hover:shadow-formShadowHover shadow-tertiary disabled:opacity-80 disabled:bg-hoverLight disabled:hover:shadow-formShadow"
    >
      {loading ? (
        <svg
          id="loader-pencil"
          xmlns="http://www.w3.org/2000/svg"
          width="667"
          height="182"
          viewBox="0 0 677.34762 182.15429"
          className="h-6 fill-current"
        >
          <g>
            <path
              id="body-pencil"
              d="M128.273 0l-3.9 2.77L0 91.078l128.273 91.076 549.075-.006V.008L128.273 0zm20.852 30l498.223.006V152.15l-498.223.007V30zm-25 9.74v102.678l-49.033-34.813-.578-32.64 49.61-35.225z"
            ></path>
            <path
              id="line"
              d="M134.482 157.147v25l518.57.008.002-25-518.572-.008z"
              className="animate-[linePencil_0.8s_infinite_linear]"
            ></path>
          </g>
        </svg>
      ) : (
        <div>{children}</div>
      )}
    </button>
  );
};

export default Button;
