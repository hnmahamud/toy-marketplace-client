import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Gallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div>
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        <a href="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg">
          <img alt="img1" src="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg" />
        </a>
        <a href="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg">
          <img alt="img1" src="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg" />
        </a>
        <a href="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg">
          <img alt="img1" src="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg" />
        </a>
        <a href="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg">
          <img alt="img1" src="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg" />
        </a>
        <a href="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg">
          <img alt="img1" src="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg" />
        </a>
        <a href="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg">
          <img alt="img1" src="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg" />
        </a>
        <a href="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg">
          <img alt="img1" src="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg" />
        </a>
        <a href="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg">
          <img alt="img1" src="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg" />
        </a>
        <a href="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg">
          <img alt="img1" src="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg" />
        </a>
        <a href="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg">
          <img alt="img1" src="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg" />
        </a>
        <a href="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg">
          <img alt="img1" src="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg" />
        </a>
        <a href="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg">
          <img alt="img1" src="https://i.ibb.co/1nf5h4W/Math-Mastermind.jpg" />
        </a>
      </LightGallery>
    </div>
  );
};

export default Gallery;
