import React from "react";
import Mic from "../../Assets/microphone.svg";
import WhiteMic from "../../Assets/white-mic.svg";
import Rocket from "../../Assets/rocket.svg";
import DeleteImg from "../../Assets/delete.svg";
import AudioReactReorder, { RecordState } from "audio-react-recorder";
import Loading from "../../Components/Laoding/Loading";
import "./ChatBotFooter.css";

const ChatBotFooter = ({
  recordState,
  isRecording,
  handleRecord,
  handleStopRecord,
  handleShowRecord,
  handleDiscardRecording,
}) => {
  return (
    <div className="chatbot-footer">
      <AudioReactReorder
        state={recordState}
        onStop={handleShowRecord}
        canvasWidth="0"
        canvasHeight="0"
      />
      <div style={{ display: isRecording ? "block" : "none" }}>
        <img src={DeleteImg} onClick={handleDiscardRecording} />
      </div>
      <div className={`footer-input ${isRecording ? "recording" : " "} `}>
        <div className="flex">
          {isRecording ? <Loading /> : <input placeholder="Type a message" />}
          {!isRecording ? (
            <img src={Mic} onClick={handleRecord} />
          ) : (
            <img src={WhiteMic} onClick={handleStopRecord} />
          )}
        </div>
      </div>
      <div style={{ display: isRecording ? "none" : "block" }}>
        <img src={Rocket} />
      </div>
    </div>
  );
};

export default ChatBotFooter;
