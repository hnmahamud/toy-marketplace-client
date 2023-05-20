const Hero = ({ title }) => {
  return (
    <div
      className="hero h-[150px] md:h-[250px]"
      style={{
        backgroundImage: `url("https://i.ibb.co/RB7G4Vj/hero.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
