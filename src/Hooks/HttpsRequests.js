import axios from "axios";
import { useEffect, useState } from "react";

export default function useAxios(url) {
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setRequest({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((res) =>
        setRequest({
          loading: false,
          data: res.data,
          error: false,
        })
      )
      .catch((e) => {
        console.log(e);
        setRequest({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  return request;
}
