import "./top-box.scss";
import { topDealUsers } from "../../data";

const TopBox = () => {
  return (
    <div className="top-box">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="list-item" key={user.id}>
            <figure className="user">
              <img src={user.img} alt="user" />
              <figcaption className="user-texts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </figcaption>
            </figure>

            <span className="amount"> ${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
