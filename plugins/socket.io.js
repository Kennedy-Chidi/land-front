import io from "socket.io-client";

const socket = io("https://land-production.up.railway.app");
// const socket = io("https://landmarkintegratedservices.com");

export default ({ app }, inject) => {
  inject("socket", socket);
};
