import { BrowserRouter as Router } from "react-router-dom";
import Toastifier from "./components/helpers/Toastifier";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AppRoutes from "./routing/AppRoutes";

function App() {
  return (
    <div
      className="App font-default min-w-full min-h-screen"
      data-theme="forest"
    >
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
      {/* toast alerts */}
      <Toastifier />
    </div>
  );
}

export default App;
