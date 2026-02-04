import type { FC } from "react";

interface Props {
  message: string;
  refetch: () => void;
}

const Error: FC<Props> = () => {
  return <div>Error</div>;
};

export default Error;
