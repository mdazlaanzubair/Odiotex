import { Link } from "react-router-dom";
import AppLogoFull from "../../assets/app-logo-full.png";
import AuthNav from "../navbar/AuthNav";
import OpenNav from "../navbar/OpenNav";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <OpenNav />
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={AppLogoFull} className="w-24" />
        </Link>
      </div>
      <div className="navbar-end">
        <AuthNav />
      </div>
    </div>
  );
};

export default Header;
