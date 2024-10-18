// components/Card.tsx

import React from "react";

interface ProductDetails {
  productId: number;
  productImage: string | undefined;
  productTitle: string | undefined;
  productPrice: number | undefined;
  productRating: number | undefined;
}

const Card: React.FC<ProductDetails> = ({
  productId,
  productImage,
  productTitle,
  productPrice,
  productRating,
}) => {
  return (
    <div className="flex flex-col gap-1 md:gap-2 xl:gap-3  py-1 md:px-2 lg:px-3 border rounded-md shadow hover:shadow-xl w-full md:w-[20vmax] h-fit shrink-0 cursor-pointer">
      <img
        src={productImage || "https://via.placeholder.com/150"}
        alt={productTitle}
        className="h-52 lg:h-60 bg-red-100 w-full object-cover object-contain rounded"
      />
      <h2 className="w-full mb-1 h-16 lg:h-10  font-bold text-lg">{productTitle}</h2>
      <div className="w-full h-16 flex flex-row justify-between">
        <p className="text-gray-600 font-md">Price: ${productPrice}</p>
        <p className="text-gray-600 font-md">Rating: {productRating}</p>
      </div>
      <p>Product ID: {productId}</p>
    </div>
  );
};

export default Card;
