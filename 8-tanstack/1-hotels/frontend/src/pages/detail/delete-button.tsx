import type { FC } from "react";
import { useDeletePlace } from "../../services/hooks";

interface Props {
  id: string;
}

const DeleteButton: FC<Props> = ({ id }) => {
  const { isPending, mutate } = useDeletePlace();

  return (
    <div className="flex justify-end">
      <button
        disabled={isPending}
        onClick={() => mutate(id)}
        className="border border-red-500 text-red-500 py-1 px-4 rounded-md transition hover:bg-red-100"
      >
        {isPending ? "Siliniyo.." : "Sil"}
      </button>
    </div>
  );
};

export default DeleteButton;
