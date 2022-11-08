import React, { useEffect, useRef, useState } from "react";
import "./ChatBot.css";
import axios from "axios";
import { URL } from "../../Api/Api";
import ChatBody from "../../Components/ChatBody/ChatBody";
import ChatBotHead from "../../Components/ChatBotHead/ChatBotHead";
import ChatBotFooter from "../../Components/ChatBotFooter/ChatBotFooter";
import { RecordState } from "audio-react-recorder";

const ChatBot = (props) => {

  const [recordState, setRecordState] = useState(null);
  const [audioData, setAudioData] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingList, setRecordingList] = useState([]);
  const [muteAudio, SetMute] = useState(false);
  const [modal, setModal] = useState(false);

  const handleRecord = () => {
    setModal(true);
    setIsRecording(true);
    setRecordState(RecordState.START);
  };

  const handleStopRecord = () => {
    setIsRecording(false);
    setRecordState(RecordState.STOP);
    setModal(false);
  };

  const handleShowRecord = (data) => {
    setAudioData(data);
    sendDataToApi(data);
    recordingList.push(data);
    console.log("Audio bro ", data);
  };

  const handleDiscardRecording = () => {
    setIsRecording(false);
    setRecordState(RecordState.STOP);
    setRecordState(RecordState.NONE);
  };

  const handleMute = () => {
    SetMute(!muteAudio);
    const file = document.getElementsByClassName("audioFile");
    console.log("sdfsdf", file);
    file[0].muted = muteAudio;
    console.log("sdfsdf", file);
  };

  const handleCloseChat = () => {
    props.close();
  };

  const sendDataToApi = async (data) => {
    const token = localStorage.getItem("jwt-token");
    const result = await axios({
      method: "POST",
      baseURL: `${URL}/gettext`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
      body: data,
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
          return;
        }
        res.json();
      })
      .then(function (text) {
        // respond_related_question(text);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="chatbot">
      {modal ? <div className="modal" onClick={handleStopRecord}></div> : ""}
      
      <ChatBotHead
        muteAudio={muteAudio}
        handleMute={handleMute}
        handleCloseChat={handleCloseChat}
      />

      <div className="date-section">
        <p className="date">Wed 8:21 PM</p>
      </div>

      <ChatBody />

      <ChatBotFooter
        recordState={recordState}
        isRecording={isRecording}
        handleRecord={handleRecord}
        handleStopRecord={handleStopRecord}
        handleShowRecord={handleShowRecord}
        handleDiscardRecording={handleDiscardRecording}
      />
    </div>
  );
};

export default ChatBot;
