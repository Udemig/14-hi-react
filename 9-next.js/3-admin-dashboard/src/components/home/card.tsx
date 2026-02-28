import { CardItem } from "@/types";
import Image from "next/image";
import { FC } from "react";

interface Props {
  item: CardItem;
}

const Card: FC<Props> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg p-3 flex justify-between items-center shadow-md gap-3">
      <div>
        <h4 className="text-gray-700 whitespace-nowrap text-base sm:text-sm">{item.label}</h4>
        <p className="font-bold text-xl max-md:text-2xl">{item.value}</p>
      </div>

      <Image src={item.icon} alt={item.label} width={56} height={56} />
    </div>
  );
};

export default Card;
