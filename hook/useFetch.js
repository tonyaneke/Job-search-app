import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c4f9586ed7msh31b417c1e7ce4e0p19ca85jsn070b2e1b1f68",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetchData = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetchData };
};

export default useFetch;
