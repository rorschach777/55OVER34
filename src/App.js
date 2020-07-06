import React from "react";
import './App.scss';

import Container16x9 from './Components/Container16x9/Container16x9';
import Video from './Components/Video/Video';
import Typography from  './Components/Typography/Typography';
function App() {
  return (
    <div className="App">
      <Typography>
        <Container16x9>
          <Video video="https://www.youtube.com/watch?v=erQ_9yEz0ls"/>
        </Container16x9>
        <h6>WWW.55OVER34.COM | COMING SOON</h6>
      </Typography>
    </div>
  );
}
export default App;
