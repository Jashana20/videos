import axios from 'axios';

const KEY = 'AIzaSyABdCL89IZ2_RXuKubIDSPK0XKxFHacP28';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: KEY
   }
})