import React, { useEffect, useState } from "react";
import { Container } from "./styled";
import { allMessages, newMessage } from "./rest-api";
import { ws } from "./webSockets";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { data, isLoading, refetch } = useQuery<
    {
      id: number;
      name: string;
      message: string;
    }[]
  >({
    queryKey: ["all-messages"],
    queryFn: () => {
      return allMessages().then((response) => {
        return response.data;
      });
    },
  });

  const [message, setMessage] = useState({
    name: "",
    message: "",
  });

  useEffect(() => {
    const onNewMessage = (event: MessageEvent<any>) => {
      if (event.data === "messages-updated") {
        refetch()
      }
    };
    ws.addEventListener("message", onNewMessage);

    return () => {
      ws.removeEventListener("message", onNewMessage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendNewMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    newMessage(message).then(() => {
      setMessage({ ...message, message: "" });
    });
  };

  return (
    <Container>
      <div className="chat-app">
        <div className="list">
          {data && !isLoading ? (
            data.map((item) => {
              return (
                <div className="item" key={item.id + item.name}>
                  <div className="name">{item.name}</div>
                  <div className="text">{item.message}</div>
                </div>
              );
            })
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <form onSubmit={sendNewMessage}>
          <div>
            <input
              placeholder="Name"
              value={message.name}
              required
              onChange={({ target }) =>
                setMessage({ ...message, name: target.value })
              }
            ></input>
            <textarea
              placeholder="Message"
              required
              value={message.message}
              onChange={({ target }) =>
                setMessage({ ...message, message: target.value })
              }
            ></textarea>
          </div>
          <button>Send</button>
        </form>
      </div>
    </Container>
  );
}

export default App;
