import React from "react";
import cross from "../../Assets/cross.svg";
import undo from "../../Assets/undo.svg";
import mute from "../../Assets/mute.svg";
import speaker from "../../Assets/speaker.svg";
import BG from "../../Assets/bg.svg";
import './ChatBotHead.css'

const ChatBotHead = ({ muteAudio, handleMute, handleCloseChat }) => {
  return (
    <div className="chatbot-head">
      <img src={BG} className="bg-image" />
      <div className="circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="chatbot-head-nav">
        <div className="img-box">
          {muteAudio ? (
            <img src={mute} onClick={handleMute} />
          ) : (
            <img src={speaker} onClick={handleMute} />
          )}
        </div>
        <div className="flex">
          <img src={undo} />
          <img src={cross} onClick={handleCloseChat} />
        </div>
      </div>
    </div>
  );
};

export default ChatBotHead;
