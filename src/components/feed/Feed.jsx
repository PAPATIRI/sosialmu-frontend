import { useEffect, useState } from "react";
import CardFeed from "../cardfeed/CardFeed";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios("posts/timeline/62adc819f09830ec7a952fb0");
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <CardFeed key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
