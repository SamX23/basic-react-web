import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import axios from "axios";

export default function Home() {
  const url = `https://5fd2c4168cee610016adfa25.mockapi.io/products/`;
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false,
  });
  const items = products.data;
  const errorCheck = products.error;

  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((res) =>
        setProducts({
          loading: false,
          data: res.data,
          error: false,
        })
      )
      .catch((e) => {
        console.log(e);
        setProducts({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl">Random Product</h1>
      {errorCheck ? (
        <p>There was an error, please try to refresh browser ...</p>
      ) : items ? (
        items.map((item, key) => <ProductCard product={item} key={key} />)
      ) : (
        <Loader />
      )}
    </div>
  );
}
