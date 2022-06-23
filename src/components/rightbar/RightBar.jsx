import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function RightBar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="giftIcon" className="birthdayImg" />
          <span className="birthdayText">
            <b>pahri paiz</b> and <b>2 others friend</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="adsimage" className="rightbarAds" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user, index) => (
            <Online key={index} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}
