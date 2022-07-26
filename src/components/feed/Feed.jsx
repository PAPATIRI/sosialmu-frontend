import { useEffect, useState } from "react";
import CardFeed from "../cardfeed/CardFeed";
import Share from "../share/Share";
import "./feed.css";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* {Posts.map((post, index) => (
          <CardFeed key={index} post={post} />
        ))} */}
      </div>
    </div>
  );
}
