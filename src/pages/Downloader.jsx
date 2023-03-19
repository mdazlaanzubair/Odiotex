import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import GradientText from "../components/helpers/GradientText";
import { useYTContext } from "../context/YoutubeContext";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  url: yup
    .string("URL must be a string.")
    .lowercase("URL must be in lower case.")
    .url("Please enter a valid URL.")
    .min(3, "URL must be at least 6 characters long."),
});

const Downloader = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // grabbing youtube url state from context
  const { setYtVideoId } = useYTContext();

  // form submission
  const onSubmit = (data) => {
    // generating error message if the provided youtube url doesn't have the video id
    if (!data.url.split("v=")[1]) {
      toast.error("The provided URL doesn't contain Youtube video ID.", {
        position: "bottom-center",
      });
    }

    setYtVideoId(data.url.split("v=")[1]);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center w-full">
        <div className="w-screen">
          <h1 className="text-3xl lg:text-5xl font-bold leading-normal">
            <GradientText text="URL Downloader" />
          </h1>
          <p className="py-3 text-sm md:text-base lg:text-lg leading-snug tracking-tight font-medium">
            Paste youtube url to proceed
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-3/4 lg:w-2/4 mx-auto"
          >
            <div className="form-control">
              <div className="input-group">
                <input
                  {...register("url")}
                  type="text"
                  placeholder="Paste your URL here..."
                  className={`input input-bordered w-full focus:outline-none focus:border-primary transition-colors ease-in-out duration-300 ${
                    errors.url ? "border-red-600" : ""
                  }`}
                />
                <button
                  type="submit"
                  className="btn btn-square hover:text-primary transition-colors ease-in-out duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -rotate-45"
                  >
                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                  </svg>
                </button>
              </div>
            </div>
            <p
              className={`text-sm mt-2 ${
                errors.url ? "text-error" : "text-primary"
              }`}
            >
              {errors.url ? (
                errors.url.message
              ) : (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 inline mr-2"
                  >
                    <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                  </svg>
                  All Good
                </span>
              )}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Downloader;
