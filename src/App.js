import React from "react";
import './App.scss';
import intro from "./Content/Videos/55OVER34-1280x720.mp4";
import Container16x9 from './Components/Container16x9/Container16x9';
import Video from './Components/Video/Video';
import Typography from  './Components/Typography/Typography';
function App() {
  return (
    <div className="App">
      <Typography>
        <Container16x9>
          <Video video={intro}/>
        </Container16x9>
        <h6>WWW.55OVER34.COM | COMING SOON</h6>
      </Typography>
    </div>
  );
}
export default App;
