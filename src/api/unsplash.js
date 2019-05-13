import axios from 'axios';

// Create an instance of axios client with some default properties
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ee45f3b0b4ff95301843eb2d3a0226ecab2ec5771b7cd1fe0dc921a82c5b9ce0',
  }
});

