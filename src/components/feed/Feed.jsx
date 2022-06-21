import CardFeed from "../cardfeed/CardFeed";
import Share from "../share/Share";
import "./feed.css";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <CardFeed />
        <CardFeed />
        <CardFeed />
        <CardFeed />
      </div>
    </div>
  );
}
