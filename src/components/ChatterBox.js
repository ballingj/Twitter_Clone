import React from 'react';
import "../css/ChatterBox.css";
import { Avatar, Button } from "@material-ui/core";

function ChatterBox() {
  return (
    <div className="chatterBox">
      <form>
        <div className="chatterBox__input">
          <Avatar src="../../public/images/jeff.png" />
          <input type="text" placeholder="What's up?" />
        </div>
        <input type="text" className="chatterBox__imageInput" placeholder="Optional: Enter image url" />
        <Button className="chatterBox__Button">Chatter</Button>
      </form>
    
      
    </div>
    
  )
}

export default ChatterBox;
