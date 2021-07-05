import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import '../App.css';

function App() {
  return (
    <div className="app">
      {/*Sidebar component - contains the side menu*/}
      <Sidebar />
      {/*Feed components - contains the Chatterbox and posts components*/}
      <Feed />
      {/*Widgets contains the twitter channel feed*/}
      <Widgets />
    
    </div>
  );
}

export default App;