import React from 'react'
import "../css/Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Chatter" type="text" />
      </div>
      
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        
        <TwitterTweetEmbed />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="BreakingNews"
          options={{ height: 600 }}
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Reuters"
          options={{ height: 600 }}
        />
      </div>
    </div>
  )
}

export default Widgets
