import { FC } from 'react';

interface ContactSubmitProps {
  state: string;
}

const ContactSubmit: FC<ContactSubmitProps> = ({ state }) => {
  return (
    <div className="text-center">
      {state === 'success' && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="rgb(16 185 129)"
            className="w-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>
            Your message has been sent successfully, and I will get back to you
            as soon as possible
          </p>
        </>
      )}
      {state === 'error' && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="hsla(0, 100%, 66%, 1)"
            className="w-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          <p className="pb-6">
            Something went wrong, please try again a little later
          </p>
        </>
      )}
    </div>
  );
};

export default ContactSubmit;
