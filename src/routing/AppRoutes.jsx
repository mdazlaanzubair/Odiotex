import { Routes, Route } from "react-router-dom";
import YTProvider from "../context/YoutubeContext";
import Downloader from "../pages/Downloader";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<NotFound />} />
      <Route
        path="/downloader"
        element={
          <YTProvider>
            <Downloader />
          </YTProvider>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
