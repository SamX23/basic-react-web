import { useParams } from "react-router-dom";
import useAxios from "../Hooks/HttpsRequests";
import Loader from "../Components/Loader";

export default function Product() {
  const { id } = useParams();
  const url = `https://5fd2c4168cee610016adfa25.mockapi.io/products/${id}`;
  let products = useAxios(url);
  let item = products.data;
  let errorCheck = products.error;

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
