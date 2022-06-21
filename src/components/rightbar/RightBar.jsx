import "./rightbar.css";

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
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/person/3.jpeg"
                alt="profileuserimg"
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="righbarUsername">joko</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/person/3.jpeg"
                alt="profileuserimg"
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="righbarUsername">joko</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/person/3.jpeg"
                alt="profileuserimg"
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="righbarUsername">joko</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
