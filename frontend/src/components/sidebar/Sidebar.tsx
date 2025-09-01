import { Link } from "react-router-dom";
import "./siderbar.scss";
import { menu } from "../../data";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((link) => (
            <Link to={link.url} className="list-item" key={link.id}>
              <img src={link.icon} alt="home" />
              <span className="list-item-title">{link.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
