import React from 'react';
import "../css/Feed.css";
import ChatterBox from "./ChatterBox";
import Post from "./Post";
import "../App.css";



function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
            
      {/* ChatterBox */}
      <ChatterBox />

      {/* Post */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
        
        
      
    </div>  
  );
}

export default Feed
