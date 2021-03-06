import React from 'react'
import "../css/Post.css"
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
  displayName,
  userName,
  verified,
  text,
  image,
  avatar
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="../../public/images/jeff.png"/>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Jeff Ballinger {" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />@jeffB
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Get some Chatter going!</p>
          </div>
        </div>
        <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="coding" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
    );
  }

export default Post;