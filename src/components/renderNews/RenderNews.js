import "./renderNews.scss";
import { NavLink } from "react-router-dom";
import unavailable from "../../images/unavailable.svg";

const RenderNews = ({ news }) => {
  return (
    <div className="news-section">
      <div id="news-container">
        {news.map((article, index) => (
          <NavLink to={`/details/${index}`} className="article" key={index}>
            <img
              src={
                Boolean(article.urlToImage) ? article.urlToImage : unavailable
              }
              alt="article"
              className="article-image"
            ></img>
            <div className="article-title">
              <h4>{article.title}</h4>
              <div className="article-source">
                <span>{article.source.name}</span>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default RenderNews;
