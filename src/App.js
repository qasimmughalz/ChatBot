import { useEffect, useState } from "react";
import "./App.css";
import ChatBot from "./Containers/ChatBot/ChatBot";
import axios from "axios";
import { URL } from "./Api/Api";

function App() {
  const token = localStorage.getItem("token");
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  // Login the user
  useEffect(() => {
    const Login = async () => {
      const result = await axios({
        method: "POST",
        baseURL: `${URL}/token`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {username:'"Entreviable', password:'GH@55321aA'},
      })
        .then((resp) => {
          if (!resp.ok) {
            throw Error('There was a problem in the login request')
          }
          if(resp.status === 401){
            throw("Invalid credentials")
            }
            else if(resp.status === 400){
            throw ("Invalid email or password format")
            }
          return resp.json()}).then(function(data){
            localStorage.setItem("jwt-token",  data.token);
           
        })
        .catch((error) => console.log(error));
    };
  }, []);



  return (
    <div className="App">
      <div className="chat-btn" onClick={handleShow}>
        <div class="chat-chad">
          <div class="chat-chad_wrap">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p style={{ cursor: "pointer" }}>Chat with JAD!</p>
        </div>
      </div>

      {show ? <ChatBot close={handleShow} /> : null}
    </div>
  );
}

export default App;
