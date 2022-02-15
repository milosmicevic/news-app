import "./home.scss";
import Hero from "../hero/Hero";
import TopNews from "../topNews/TopNews";
import Newsletter from "../newsletter/Newsletter";
import Customers from "../customers/Customers";
import CircularProgress from "@mui/material/CircularProgress";

const Home = ({ news }) => {
  return (
    <div className="container">
      <Hero />
      <Customers />
      {news.length <= 0 ? (
        <CircularProgress color="inherit" thickness={4} size="6rem" />
      ) : (
        <TopNews news={news} />
      )}

      <Newsletter />
    </div>
  );
};

export default Home;
