"use client";

import { BasketItem } from "@/types";
import { FC } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

interface Props {
  item: BasketItem;
}

const ItemActions: FC<Props> = ({ item }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center border border-gray-300 rounded-md mr-4">
        <button className="counter-button">
          <FaMinus />
        </button>

        <span className="px-3 py-1 border-x border-gray-300 min-w-9 text-center">{item.quantity}</span>

        <button className="counter-button">
          <FaPlus />
        </button>
      </div>

      <button className="text-red-600 hover:text-red-700">
        <FaTrash />
      </button>
    </div>
  );
};

export default ItemActions;
