import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import GradientText from "../components/helpers/GradientText";

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
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // form submission
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  console.log(errors);
  console.log(watch("url"));

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center w-full">
        <div className="w-2/4">
          <h1 className="text-3xl lg:text-5xl font-bold leading-normal">
            <GradientText text="URL Downloader" />
          </h1>
          <p className="py-3 text-sm md:text-base lg:text-lg leading-snug tracking-tight font-medium">
            Paste youtube url to proceed
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("url")}
              type="text"
              placeholder="Paste the URL here..."
              className="input bg-base-100 w-full"
            />
            <p
              className={`text-sm mt-2 ${
                errors.url ? "text-error" : "text-primary"
              }`}
            >
              {errors.url ? errors.url.message : "All Good"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Downloader;
