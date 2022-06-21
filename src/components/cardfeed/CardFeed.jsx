import "./cardfeed.css";
import { MoreVert } from "@mui/icons-material";

export default function CardFeed() {
  return (
    <div className="cardfeed">
      <div className="cardfeedWrapper">
        <div className="cardTop">
          <div className="cardTopLeft">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="cardProfileImg"
            />
            <span className="cardProfileName">bambang</span>
            <span className="cardDate">5 minutes ago</span>
          </div>
          <div className="cardTopRight">
            <MoreVert htmlColor="gray" />
          </div>
        </div>
        <div className="cardCenter">
          <span className="cardText">hey! it's my first post...</span>
          <img src="/assets/post/1.jpeg" className="cardImg" alt="" />
        </div>
        <div className="cardBottom">
          <div className="cardBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="likeIcon" />
            <img className="likeIcon" src="/assets/heart.png" alt="loveIcon" />
            <span className="postLikeCounter">23 liked it</span>
          </div>
          <div className="cardBottomRight">
            <span className="postCommentCounter">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
