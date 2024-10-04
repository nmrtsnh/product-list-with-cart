import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="relative">
      <div className="">
        <img
          srcSet={`
          ${product.image.mobile} 480w,
          ${product.image.tablet} 768w,
          ${product.image.desktop} 1200w
        `}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          src={product.image.thumbnail} // Fallback image
          alt={product.name}
          className=" w-80 h-62 object-cover rounded-lg mb-4"
        />
        <div className="absolute top-3/4 left-16 ">
          <button
            className="text-black border bg-white border-rose-900 rounded-full px-4 py-2 flex gap-4 items-center font-semibold hover:border-redCustom hover:text-redCustom mb-4 "
            onClick={() => addToCart(product)}
          >
            <img src="/assets/images/icon-add-to-cart.svg" alt="add to cart" />
            Add to Cart
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-sm text-rose-500">{product.category}</h3>
        <h2 className="text-lg font-bold text-black">{product.name}</h2>
        <p className=" text-redCustom font-semibold mb-4">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
