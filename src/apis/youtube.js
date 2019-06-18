import axios from 'axios';

const KEY = 'AIzaSyBywLlnDTue4DZCtNVmd2r9Z8jkUvbbZKs';


// Accessing the youtube api with a GET request
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});