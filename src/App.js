import React from "react";
import './App.scss';
import intro from "./Content/Videos/55OVER34-1280x720.mp4";
import Container16x9 from './Components/Container16x9/Container16x9';
import Video from './Components/Video/Video';

function App() {
  return (
    <div className="App">
        <Container16x9>
          <Video video={intro}/>
        </Container16x9>
        <p>WWW.55OVER34.COM | COMING SOON</p>
    </div>
  );
}
export default App;
