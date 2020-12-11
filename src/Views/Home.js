import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import useAxios from "../Hooks/HttpsRequests";

export default function Home() {
  const url = `https://5fd2c4168cee610016adfa25.mockapi.io/products/`;
  let products = useAxios(url);
  let items = products.data;
  let errorCheck = products.error;

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
