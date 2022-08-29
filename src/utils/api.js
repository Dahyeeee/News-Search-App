import axios from "axios";

const getUrl = (keyword, page) =>
  `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&sort=newest&page=${page}&api-key=TJdabzukPLFuSQGAmkEliJ1fAkVgWCrm`;

export const request = async (word, page) => {
  try {
    const res = await axios.get(getUrl(word, page));
    return res.data.response.docs;
  } catch (error) {
    console.log(error);
  }
};
