import { BrowserRouter as Router } from "react-router-dom";
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
    </div>
  );
}

export default App;
