import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/subcomponents/Header";
import Headline from "./components/Headline";
import Entertainment from "./components/Entertainment";
import Sport from "./components/Sport";
import Health from "./components/Health";
import "./styles/app.scss";
import image from "./assets/undraw_Stability_ball_b4ia.svg";

const MY_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [nigeriaNews, setNigeriaNews] = useState([]);

  useEffect(() => {
    const newsItems = async () => {
      const response = await axios({
        url: `https://newsapi.org/v2/top-headlines?country=ng&apiKey=aae2e42ffb5b44bda5856cdbb6abcca6`,
        method: "GET",
      });
      setNigeriaNews(response.data.articles);
    };

    newsItems();
  }, []);

  return (
    <div>
      <Header />
      <Headline articles={nigeriaNews} />
      <Entertainment />
      <Sport />
      <img src={image} alt="health" />
      <Health />
    </div>
  );
}

export default App;
