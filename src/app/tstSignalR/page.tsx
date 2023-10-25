"use client";
import { Proxy, hubConnection, signalR } from "signalr-no-jquery";
import { useState, useEffect } from "react";
import "./ticker.css";
export default function App() {
  interface ServerData {
    CNam: string;
    CLTP: number;
    CVol: number;
    ChngP: number;
    Chng: number;
    Exch: string;
  }
  const [chatHubProxy, SetChatHubProxy] = useState<Proxy>();
  const [chatMessage, SetChatMessage] = useState("");
  const [chatHistory, SetChatHistory] = useState("");

  const connection = hubConnection("https://ticker.berichbd.com:8088/signalr/");
  const hubProxy = connection.createHubProxy("SimpleHub");
  const [data, setData] = useState<ServerData[]>([]);
  const maxItems = 13; // Maximum number of items to display
  useEffect(() => {
    // set up event listeners i.e. for incoming "message" event
    hubProxy.on("addMessage", function (eventName, data) {
      console.log(data);
      const tData: ServerData[] = JSON.parse(data);
      SetChatHistory((prevChat) =>
        prevChat !== ""
          ? prevChat + "\n" + eventName + ":" + data
          : eventName + ":" + data
      );
      // const updatedData = tData.slice(-maxItems);
      setData((prevData) => [...prevData.slice(1), ...tData]);
    });
  }, []);
  function messageChange(e) {
    SetChatMessage(e.target.value);
    console.log(chatMessage);
  }

  function Connect() {
    connection
      .start({ jsonp: true })
      .done(function () {
        console.log("Now connected, connection ID=" + connection.id);
        SetChatHubProxy(hubProxy);
      })
      .fail(function () {
        console.log("Could not connect");
      });
  }
  function Send() {
    chatHubProxy.invoke("Send", chatMessage);
  }
  return (
    <div>
      <button onClick={Connect}>Connect</button>
      <br />
      <br />
      <label>Message:</label>
      <br />
      <input title="msg" type="text" id="message" onChange={messageChange} />
      <button className="btn-Send" onClick={Send}>
        Send
      </button>
      <br />
      <br />
      <label>Chat History:</label>
      <br />
      <textarea
        title="chatHist"
        defaultValue={chatHistory}
        rows={10}
        cols={50}
      ></textarea>
      <br />
      <div className="ticker">
        {data.map((item, index) => (
          <div
            key={index}
            className={`ticker-item ${
              item.Chng > 0
                ? "positive"
                : item.Chng < 0
                ? "negative"
                : "neutral"
            }`}
          >
            <div>{item.CNam}</div>
            <div>
              {item.CVol} @ {item.CLTP.toFixed(1)} ({item.ChngP.toFixed(2)}%)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
