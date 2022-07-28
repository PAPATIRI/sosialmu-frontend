import "./cardfeed.css";
import { MoreVert } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export default function CardFeed({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };

    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="cardfeed">
      <div className="cardfeedWrapper">
        <div className="cardTop">
          <div className="cardTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                src={user.profilePicture || PF + "person/no_avatar.png"}
                alt=""
                className="cardProfileImg"
              />
            </Link>
            <span className="cardProfileName">{user.username}</span>
            <span className="cardDate">{format(post.createdAt)}</span>
          </div>
          <div className="cardTopRight">
            <MoreVert htmlColor="gray" />
          </div>
        </div>
        <div className="cardCenter">
          <span className="cardText">{post?.desc}</span>
          <img src={PF + post.img} className="cardImg" alt="" />
        </div>
        <div className="cardBottom">
          <div className="cardBottomLeft">
            <img
              className="likeIcon"
              src="/assets/like.png"
              onClick={likeHandler}
              alt="likeIcon"
            />
            <img
              className="likeIcon"
              src="/assets/heart.png"
              onClick={likeHandler}
              alt="loveIcon"
            />
            <span className="postLikeCounter">{like} liked it</span>
          </div>
          <div className="cardBottomRight">
            <span className="postCommentCounter">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
