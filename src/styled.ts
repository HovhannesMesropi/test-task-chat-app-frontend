import styled from 'styled-components';

export const Container = styled.div`
  .chat-app {
    max-width: 800px;
    width: 100%;
    margin: 50px auto;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 18px 18px 20px 0px #57b367;
    .list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      height: 400px;
      overflow: auto;
      .item {
        font-family: "Roboto";
        .name {
          font-size: 1rem;
          font-weight: bold;
        }
        .text {
          font-size: 0.8rem;
        }
      }
    }
    form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 15px;
      textarea {
        width: 90%;
        margin-top: 10px;
        resize: none;
        height: 50px;
        outline: 0;
        font-family: "Roboto";
        font-size: 1rem;
        margin: 0;
      }
      button {
        border-color: #4ca566;
        outline: 0;
        color: #4ca566;
        border-radius: 100%;
        width: 50px;
        height: 50px;
        font-weight: bold ;
      }
    }
  }
`