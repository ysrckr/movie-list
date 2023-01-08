import axios from "axios";

export const request = axios.create({
  baseURL: "https://streaming-availability.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "cc1bdeecc6msh9b85c2bb0f96362p1df40fjsn3c4a0bcfd028",
    "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
  },
});
