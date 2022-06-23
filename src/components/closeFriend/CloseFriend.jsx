import "./closefriend.css";

export default function CloseFriend({ user }) {
  return (
    <div>
      <li className="sidebarFriend">
        <img
          src={user.profilePicture}
          alt="userprofileimage"
          className="sidebarFriendImg"
        />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  );
}
