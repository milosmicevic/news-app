import "./topNews.scss";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import RenderNews from "../renderNews/RenderNews";

const TopNews = ({ news }) => {
  return (
    <div className="top-news-section">
      <h1 className="heading">Top News</h1>
      <RenderNews news={news} />
      <NavLink className="read-more-btn" to="/news">
        Read more <BsArrowRight />
      </NavLink>
    </div>
  );
};

export default TopNews;
