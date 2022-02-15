import "./videoDialog.scss";
import Dialog from "@mui/material/Dialog";

const VideoDialog = ({ onClose, selectedValue, open }) => {
  const handleClose = () => {
    onClose(selectedValue);
  };
  return (
    <Dialog
      className="hero-dialog"
      open={open}
      onClose={handleClose}
      maxWidth={false}
    >
      <iframe
        src="https://www.youtube.com/embed/D0UnqGm_miA"
        allowFullScreen
        className="hero-video"
        title="Dummy Video"
      ></iframe>
    </Dialog>
  );
};

export default VideoDialog;
