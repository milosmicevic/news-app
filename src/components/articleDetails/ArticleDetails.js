import { useParams } from "react-router-dom";
import "./articleDetails.scss";
import CircularProgress from "@mui/material/CircularProgress";
import unavailable from "../../images/unavailable.svg";

const ArticleDetails = ({ news }) => {
  const id = parseInt(useParams().id);
  if (news.length <= 0) {
    return <CircularProgress color="inherit" thickness={4} size="6rem" />;
  }

  return (
    <div className="article-details-section">
      <img
        className="article-image"
        src={Boolean(news[id].urlToImage) ? news[id].urlToImage : unavailable}
        alt="article"
      />
      <div className="article-text-container">
        <h2 className="article-title">{news[id].title}</h2>
        <p className="article-description">{news[id].description}</p>
        <div className="article-additional-info">
          <span className="article-source">{news[id].source.name}</span>
          <span className="article-date">
            {news[id].publishedAt.slice(0, 10)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
