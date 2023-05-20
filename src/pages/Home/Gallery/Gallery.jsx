import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { useEffect, useState } from "react";

import "./gallery.css";

const Gallery = () => {
  const [images, setImages] = useState();
  useEffect(() => {
    fetch("/gallery.json")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((error) => console.log(error));
  }, []);

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="space-y-8 mt-16 md:mt-16 mb-8 md:mb-32">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="md:w-[70%] md:mx-auto md:text-center space-y-4"
      >
        <h2 className="text-2xl md:text-4xl text-blue-500 font-extrabold">
          Play with <br className="hidden md:block" /> Captivating Educational
          Toy Gallery
        </h2>
        <p className="text-gray-500">
          Immerse yourself in a visual feast of educational toys designed to
          spark curiosity, inspire learning, and foster creativity. Our gallery
          showcases a wide range of educational toys carefully curated to engage
          young minds and encourage a love for exploration. From science kits to
          language games, math puzzles to interactive storytelling, our
          collection offers endless possibilities for educational fun. Browse
          through the captivating images below and find the perfect toys that
          combine entertainment with knowledge, making learning an enjoyable
          adventure for children of all ages.
        </p>
      </div>
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {images
          ? images.map((image) => (
              <a
                className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-sm"
                key={image.id}
                href={image.imageUrl}
              >
                <img
                  className="max-w-xs transition duration-300 ease-in-out hover:scale-110 h-full w-full hover:opacity-40 rounded-sm"
                  alt={`img${image.id}`}
                  src={image.imageUrl}
                />
              </a>
            ))
          : ""}
      </LightGallery>
    </div>
  );
};

export default Gallery;
