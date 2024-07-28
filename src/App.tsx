import React from "react";
import { Container } from "./styled";

function App() {
  return (
    <Container>
      <div className="chat-app">
        <div className="list">
          <div className="item">
            <div className="name">Hovhannes</div>
            <div className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
              sint nam possimus corporis quod porro et, perspiciatis, rem
              aperiam ullam totam nostrum ratione impedit assumenda ipsa eos
              tempora qui libero?
            </div>
          </div>
        </div>
        <form>
          <textarea></textarea>
          <button>Send</button>
        </form>
      </div>
    </Container>
  );
}

export default App;
