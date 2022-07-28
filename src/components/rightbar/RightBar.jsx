import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function RightBar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src={`${PF}gift.png `} alt="giftIcon" className="birthdayImg" />
          <span className="birthdayText">
            <b>pahri paiz</b> and <b>2 others friend</b> have a birthday today
          </span>
        </div>
        <img src={`${PF}ad.png `} alt="adsimage" className="rightbarAds" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user, index) => (
            <Online key={index} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">RelationShip: </span>
            <span className="rightbarInfoValue">
              {user.status ? user.status : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/1.jpeg `}
              alt="userpicture"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Naruto Uzumaki</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/1.jpeg `}
              alt="userpicture"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Naruto Uzumaki</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/1.jpeg `}
              alt="userpicture"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Naruto Uzumaki</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/1.jpeg `}
              alt="userpicture"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Naruto Uzumaki</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
