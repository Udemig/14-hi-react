"use client";

import { FC } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const Error: FC<Props> = ({ error, reset }) => {
  return (
    <div className="my-60 text-center space-y-5">
      <h1 className="font-bold">Üzgünüz Bir Sorun Oluştu</h1>
      <h5 className="text-red-500 font-semibold">{error.message}</h5>
      <button onClick={reset} className="border px-4 py-1 rounded-md">
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
