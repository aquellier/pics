import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID ee45f3b0b4ff95301843eb2d3a0226ecab2ec5771b7cd1fe0dc921a82c5b9ce0',

      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>

    )
  }
}

export default App;
