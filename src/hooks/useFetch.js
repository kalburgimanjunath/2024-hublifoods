import axios from "axios";
import { useState, useEffect } from "react";
const useFetch = async (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    try {
      const response = axios.get(url);
      setData(response);
    } catch (error) {
      console.error(error);
    }
  }, [url]);
  return data;
};
export { useFetch };
