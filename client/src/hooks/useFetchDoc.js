import { useEffect, useState } from "react";
import axios from "axios";

const useFetchDoc = (endPoint) => {
  const [isloading, setIsloading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [docData, setDocData] = useState(null);

  useEffect(() => {
    const API = axios.create({ baseURL: "http://localhost:5000" });

    const fetchDoc = async (endPoint) => {
      try {
        const res = await API.get(endPoint);
        console.log(res.data);

        setDocData(res.data);
        if (res.status === 200) {
          setIsloading(false);
        }
      } catch (err) {
        console.log(err);
        setErrorMessage(err.message);
      }
    };

    fetchDoc(endPoint);
  }, []);
  console.log(docData);

  return { docData, isloading, errorMessage };
};

export default useFetchDoc;
