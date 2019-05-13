import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

// A promise is an object that gives us a notification when
// some amount of work is completed, like a network request
class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID ee45f3b0b4ff95301843eb2d3a0226ecab2ec5771b7cd1fe0dc921a82c5b9ce0',

      }
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>

    )
  }
}

export default App;
