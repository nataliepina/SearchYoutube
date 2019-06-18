import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {

    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    // UPDATING STATE WHEN USER SUBMITS THE FORM AND THE API REQUEST RECEIVED A RESPONSE
    // THE ONLY INFORMATION NEEDED IS THE DATA FROM THE RESPONSE
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;