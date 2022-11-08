import React, { useState } from "react";
import BotImage from "../../Assets/bot-img.svg";
import VideoImg from "../../Assets/video.svg";
import "./ChatBody.css";

const ChatBody = () => {
  let link1 = "https://www.youtube.com/embed/INRncaJ6Dxc";
  let link2 = "https://www.youtube.com/embed/ENuhxcbIh-k";
  let link3 = "https://www.youtube.com/embed/ekgUjyWe1Yc";

  const [videlink, setNewLink] = useState(
    "https://www.youtube.com/embed/D0UnqGm_miA"
  );

  const handleLink = (link) => {
    setNewLink(link);
  };

  return (
    <div className="chatbot-body">
      <ul className="chat-body">
        <li className="chat-msg-box-left">
          <div className="chat-msg-img">
            <img src={BotImage} />
          </div>
          <div className="chat-msg-text">
            <p>
              Hello, I'm Jad 👋🏻, the Enterprenreur ChatBot. How I can help you ?
            </p>
          </div>
        </li>
        <li className="chat-msg-box-right">
          <p>What is business Plan?</p>
        </li>
        <li className="chat-msg-box-left">
          <div className="chat-msg-img">
            <img src={BotImage} />
          </div>
          <div className="chat-msg-text">
            <p>
              A format setting out the business's future objectives and
              strategies for achieving them{" "}
            </p>
          </div>
        </li>
        <li className="chat-msg-box-right">
          <p>Show me other options</p>
        </li>
        <li className="chat-msg-box-left">
          <div className="chat-msg-img">
            <img src={BotImage} />
          </div>
          <div className="chat-msg-text">
            <p>
              I found these relevant data might help you to find answer of your
              question.{" "}
            </p>
          </div>
        </li>
        <li className="chat-msg-links">
          <div className="chat-msg-link">
            <a href="">Virtual Beings By Virbe</a>
          </div>
          <div className="chat-msg-link">
            <a href="">Ready Player Me</a>
          </div>
          <div className="chat-msg-link">
            <a href="">Unreal Meta Human</a>
          </div>
        </li>
        <li className="chat-msg-video-box">
          <div className="chat-msg-video">
            <iframe width="100%" height="100%" src={videlink}></iframe>
          </div>
          <div className="next-videos">
            <img src={VideoImg} onClick={() => handleLink(link1)} />
            <img src={VideoImg} onClick={() => handleLink(link2)} />
            <img src={VideoImg} onClick={() => handleLink(link3)} />
          </div>
        </li>
        <li className="chat-msg-box-left">
          <div className="chat-msg-img">
            <img src={BotImage} />
          </div>
          <div className="chat-msg-text">
            <p>Do you need more inforation? </p>
          </div>
        </li>
        {/* <li className="" >
            {recordingList.map(data =>{
                return  <audio 
                className="audioFile"
                id="audio"
                controls
                src={data ? data.url : null}
              ></audio>
            })}
           
          </li> */}
      </ul>
    </div>
  );
};

export default ChatBody;
