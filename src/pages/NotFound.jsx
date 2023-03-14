import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import notFoundAnimation from "../assets/error-404-animation.json";

const NotFound = () => {
  return (
    <div className="hero min-h-screen bg-base-200 rounded-box">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <div className="container relative">
            <div className="absolute bg-primary w-full h-full blur-xl opacity-5 animate-pulse"></div>
            <Lottie animationData={notFoundAnimation} />
          </div>
          <Link to="/" className="btn btn-primary mt-10">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
