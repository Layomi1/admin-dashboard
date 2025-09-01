import "./navbar.scss";
import logo from "/logo.svg";
import searchIcon from "/search.svg";
import appIcon from "/app.svg";
import expandIcon from "/expand.svg";
import settingIcon from "/setting.svg";
import notification from "/notifications.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>Iamadmin</span>
      </div>
      <div className="icons">
        <img src={searchIcon} alt="search" />
        <img src={appIcon} alt="app icon" />
        <img src={expandIcon} alt="expand" />
        <div className="notification">
          <img src={notification} alt="notification" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="user"
          />
          <span>Jane</span>
        </div>
        <img src={settingIcon} alt="setting" />
      </div>
    </div>
  );
};

export default Navbar;
