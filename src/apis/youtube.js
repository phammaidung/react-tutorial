import axios from 'axios';

const KEY = 'AIzaSyBycHu8HNrJz9Nc12dgcv-l23R8z4OUOxM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
