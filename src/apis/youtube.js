import axios from "axios";

const KEY = "AIzaSyAmrB-6v7WKhAmayUmmb48lNmKTguoHm8s";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 10,
        key: KEY
    }
});