import axios from "axios";

export const newMessage = (message: {
  name: string;
  message: string
}) => axios.post("http://localhost:8080/new-message", message)

export const allMessages = () => {
  return axios.get('http://localhost:8080/messages')
}