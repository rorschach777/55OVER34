import React from 'react';
import './Video.scss';
const Video = (props) => {
    return (
        <video autoPlay loop muted playsInline className="Video" >
            <source src={props.video} type="video/mp4"></source>
            Sorry, your browser doesn't support embedded videos.
        </video>
    );
};
export default Video;