import { Product } from "@/types";
import { FC } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Props {
  product: Product;
}

const Rating: FC<Props> = ({ product }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="flex items-center">
        {[...Array(5)].map((i, key) => {
          const fullCount = Math.floor(product.rating);
          const hasHalf = product.rating % 1 >= 0.5;

          // tam yıldız
          if (key < fullCount) return <FaStar key={key} className="size-5 fill-yellow-500" />;

          // yarım yıldız
          if (key === fullCount && hasHalf) return <FaStarHalfAlt key={key} className="size-5 fill-yellow-500" />;

          // boş yıldız
          return <FaStar key={key} className="size-5 fill-zinc-500" />;
        })}
      </div>

      <span className="text-sm text-gray-600 ml-2">
        {product.rating} ({product.reviews_count})
      </span>
    </div>
  );
};

export default Rating;
