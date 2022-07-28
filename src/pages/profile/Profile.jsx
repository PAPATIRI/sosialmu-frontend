import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import SideBar from "../../components/sidebar/SideBar";
import { useEffect, useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };

    fetchUser();
  }, [username]);

  return (
    <div>
      <Topbar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={user.coverPicture || `${PF}person/banner.png `}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={user.profilePicture || `${PF}person/no_avatar.png `}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <RightBar user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}
