import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import News from "./components/news/News";
import ArticleDetails from "./components/articleDetails/ArticleDetails";
import Footer from "./components/footer/Footer";

const App = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=cbdba62af5b84b53923d1f8d1549d7d2`
      );

      setNews(result.data.articles);
    };

    fetchItems();
  }, [category]);
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home news={news.slice(0, 3)} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/news"
            element={
              <News news={news} category={category} setCategory={setCategory} />
            }
          />
          <Route path="/details/:id" element={<ArticleDetails news={news} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
