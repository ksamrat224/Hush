import { io } from "socket.io-client";

let socket = null;

export function connectWS() {
  if (!socket) {
    socket = io("http://localhost:4600");
  }
  return socket;
}
