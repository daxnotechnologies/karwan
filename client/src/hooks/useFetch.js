import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endPoint) => {
  const [isloading, setIsloading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const API = axios.create({ baseURL: "http://localhost:5000" });
    const fetchData = async (endPoint) => {
      try {
        const res = await API.get(endPoint);
        // console.log(res.data);
        setData(res.data);
        if (res.status === 200) {
          setIsloading(false);
        }
      } catch (err) {
        console.log(err);
        setErrorMessage(err.message);
      }
    };

    fetchData(endPoint);
  }, []);

  console.log(data);

  return { data, isloading, errorMessage };
};

export default useFetch;
