import "./cardfeed.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function CardFeed({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="cardfeed">
      <div className="cardfeedWrapper">
        <div className="cardTop">
          <div className="cardTopLeft">
            <img
              src={
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePicture
              }
              alt=""
              className="cardProfileImg"
            />
            <span className="cardProfileName">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="cardDate">5 minutes ago</span>
          </div>
          <div className="cardTopRight">
            <MoreVert htmlColor="gray" />
          </div>
        </div>
        <div className="cardCenter">
          <span className="cardText">{post?.desc}</span>
          <img src={PF + post.photo} className="cardImg" alt="" />
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
