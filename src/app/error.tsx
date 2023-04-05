"use client";

type ErrorMessage = {
  message: string;
};

interface IErrorProps {
  error: ErrorMessage;
  reset: () => void;
}

export default function Error({ error, reset }: IErrorProps) {
  return (
    <div>
      Sorry, Not loading up... {error.message}
      <button onClick={() => reset()}>Reload</button>
    </div>
  );
}
