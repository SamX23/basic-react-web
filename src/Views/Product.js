import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

export default function Product() {
  const { id } = useParams();
  const url = `https://5fd2c4168cee610016adfa25.mockapi.io/products/${id}`;
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false,
  });
  const item = product.data;
  const errorCheck = product.error;

  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((res) =>
        setProduct({
          loading: false,
          data: res.data,
          error: false,
        })
      )
      .catch((e) => {
        console.log(e);
        setProduct({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  return (
    <div>
      {errorCheck ? (
        <p>There was an error, please try to refresh browser ...</p>
      ) : item ? (
        <div>
          <h4 className="font-bold text-2xl mb-3">{item.name}</h4>
          <img src={item.images[0].imageUrl} alt={item.name} />
          <div className="font-bold text-xl mb-3">$ {item.price}</div>
          <div>{item.description}</div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
