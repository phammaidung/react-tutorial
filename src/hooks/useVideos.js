import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchValue) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchValue);
  }, [defaultSearchValue]);

  const search = async (term) => {
    const resp = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    setVideos(resp.data.items);
    
  };
  
  return [videos, search];
}

export default useVideos;