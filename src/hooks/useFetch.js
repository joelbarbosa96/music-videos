import { useState, useEffect } from "react";
import paginate from "../utils";
const url =
  "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getVideos = async () => {
    const response = await fetch(url);
    const data = await response.json();

    /*  console.log(data); */
    setData(paginate(data.videos.splice(0, 100)));
    setLoading(false);
  };

  useEffect(() => {
    getVideos();
  }, []);
  return { loading, data };
};
