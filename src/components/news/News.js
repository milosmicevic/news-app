import "./news.scss";
import { NavLink } from "react-router-dom";
import RenderNews from "../renderNews/RenderNews";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { IoIosArrowBack } from "react-icons/io";

const News = ({ news, category, setCategory }) => {
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="all-news-section">
      <h1 className="heading">Latest News</h1>
      <div className="filter-container">
        <NavLink className="back-btn" to="/">
          <IoIosArrowBack />
          Return
        </NavLink>
        <FormControl sx={{ m: 3, minWidth: 200 }}>
          <InputLabel>Select Category</InputLabel>
          <Select
            value={category}
            label="Select Category"
            onChange={handleChange}
          >
            <MenuItem value="general">General</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="sports">Sports</MenuItem>
            <MenuItem value="music">Music</MenuItem>
            <MenuItem value="science">Science</MenuItem>
            <MenuItem value="health">Health</MenuItem>
            <MenuItem value="technology">Technology</MenuItem>
            <MenuItem value="entertainment">Entertainment</MenuItem>
          </Select>
        </FormControl>
      </div>
      <RenderNews news={news} />
    </div>
  );
};

export default News;
