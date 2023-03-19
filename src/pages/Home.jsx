import GradientText from "../components/helpers/GradientText";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-3xl lg:text-5xl font-bold leading-normal">
            Welcome to <GradientText text="Odiotex" />
          </h1>
          <p className="py-3 text-sm md:text-base lg:text-lg leading-snug tracking-tight font-medium">
            The ultimate web application for transforming your YouTube
            experience!
          </p>
          <p className="pb-3 text-xs lg:text-sm leading-snug tracking-tight font-normal">
            Our cutting-edge tool allows you to convert YouTube videos to
            high-quality audio and extract scripts, all in a sleek and modern
            interface.
          </p>
          <button className="btn btn-primary text-neutral normal-case">Lets try it out</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
