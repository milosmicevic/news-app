import { useState } from "react";
import "./hero.scss";
import heroImage from "../../images/hero.svg";
import { BsFillPlayCircleFill } from "react-icons/bs";
import VideoDialog from "../../dialogs/VideoDialog";

const Hero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialogHandler = () => {
    setDialogOpen(true);
  };

  const closeDialogHandler = () => {
    setDialogOpen(false);
  };

  return (
    <div className="hero-section">
      <div className="hero-left">
        <h1>
          Daily coverage. <br />
          Delivered straight <br />
          to your ears.
        </h1>
        <p>
          Discover and share the stories that shape your world.
          <br />
          Stay up to date.
        </p>
        <div className="hero-buttons">
          <a href="#news-container">
            <button className="explore-btn">Explore Now</button>
          </a>
          <button className="watch-btn" onClick={openDialogHandler}>
            <BsFillPlayCircleFill />
            Watch Video
          </button>
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="hero-section" />
      </div>

      <VideoDialog open={dialogOpen} onClose={closeDialogHandler} />
    </div>
  );
};

export default Hero;
