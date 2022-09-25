import "./share.css";
import { useContext, useRef, useState } from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
  const [file, setFile] = useState(null);
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + "-" + file.name;

      console.log("file data: ", fileName);
      data.append("file", file);
      data.append("name", fileName.substring(0, fileName.lastIndexOf(".")));
      newPost.img = fileName;

      try {
        await axios.post("/upload", data);
        console.log("sukses upload");
      } catch (err) {
        console.log(err);
      }
    }
    console.log("data form: ", newPost);

    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + " /assets/person/1.jpeg"
            }
            alt=""
            className="shareProfileImg"
          />
          <textarea
            type="text"
            className="shareInput"
            placeholder={"what's is in your mind " + user.username + "?"}
            rows="3"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onScroll={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="lightgreen" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="coral" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="orange" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button onClick={submitHandler} className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
