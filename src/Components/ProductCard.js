import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border mb-4 rounded overflow-hidden">
      <Link to={`/products/${product.id}`}>
        <img
          className="object-cover h-60 w-full"
          src={product.images[0].imageUrl}
          alt={product.name}
        />
      </Link>
      <div className="p-3">
        <h3 className="font-bold text-xl mb-3">
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <div className="font-bold mb-3">$ {product.price}</div>
        <Link
          to={`/products/${product.id}`}
          className="bg-blue-500 text-white p-2 flex justify-center"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
