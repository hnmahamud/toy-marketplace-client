import bannerPhoto from "../../../assets/photos/banner-photo.jpg";

const Banner = () => {
  return (
    <div className="md:h-[calc(100vh-69px)] grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4 my-8 md:my-0">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="space-y-4"
      >
        <h2 className="text-2xl md:text-4xl text-gray-500 font-extrabold">
          Unlock the Joy of Learning with Educational Toys
        </h2>
        <p className="text-gray-500">
          Welcome to BrainBounce, your ultimate destination for educational toys
          that spark curiosity and inspire learning. Explore our wide range of
          interactive and engaging toys designed to foster creativity, critical
          thinking, and problem-solving skills in children of all ages. From
          science kits to puzzles, coding games to building blocks, we offer a
          diverse collection of educational toys that make learning enjoyable
          and meaningful. Fuel your childs imagination and watch them grow while
          having fun with our carefully curated selection of toys. Join us on
          this exciting journey of exploration and discovery. Start learning
          through play today!
        </p>
        <button className="btn btn-active btn-ghost btn-wide btn-sm md:btn-md">
          More Info
        </button>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="md:ml-auto"
      >
        <img className="md:h-[500px] rounded-md" src={bannerPhoto} alt="" />
      </div>
    </div>
  );
};

export default Banner;
