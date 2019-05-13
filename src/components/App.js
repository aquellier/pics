import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';

// A promise is an object that gives us a notification when
// some amount of work is completed, like a network request
class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
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
