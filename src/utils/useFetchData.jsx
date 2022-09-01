import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchData(query, page) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let cancel;
    axios({
      method: "GET",
      url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&sort=newest&page=${page}&api-key=TJdabzukPLFuSQGAmkEliJ1fAkVgWCrm`,
      cancelToken: new axios.CancelToken(
        (c) => (cancel = c),
      ),
    })
      .then((res) => {
        const data = res.data.response.docs.map((each) => {
          return { ...each, clipped: false };
        });
        setData(data);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
      });
    return () => cancel();
  }, [query, page]);

  return data;
}
