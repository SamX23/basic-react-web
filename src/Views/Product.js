import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const url = `https://5fd2c4168cee610016adfa25.mockapi.io/products/${id}`;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setProduct(res.data))
      .catch((e) => console.log(e));
  }, [url]);

  return (
    <div>
      {product && (
        <div>
          <h4 className="font-bold text-2xl mb-3">{product.name}</h4>
          <img src={product.images[0].imageUrl} alt={product.name} />
          <div className="font-bold text-xl mb-3">$ {product.price}</div>
          <div>{product.description}</div>
        </div>
      )}
    </div>
  );
}
