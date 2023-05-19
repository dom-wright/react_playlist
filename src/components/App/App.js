import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js'
import PlayList from '../PlayList/PlayList.js'
import SearchResults from '../SearchResults/SearchResults.js'
import Spotify from '../../util/Spotify.js'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      playlistName: 'Playlist Name',
      playlistTracks: []
    }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
  }

  // { id: 100, name: 'Track100', artist: 'Art1', album: 'Alb1' },
  // { id: 101, name: 'Track200', artist: 'Art2', album: 'Alb2' },
  // { id: 102, name: 'Track300', artist: 'Art3', album: 'Alb3' }
  // { id: 1, name: 'Track1', artist: 'Art1', album: 'Alb1' },
  // { id: 2, name: 'Track2', artist: 'Art2', album: 'Alb2' },
  // { id: 3, name: 'Track3', artist: 'Art3', album: 'Alb3' }

  addTrack(track) {
    if (!this.state.playlistTracks.includes(track.id)) {
      const tracks = this.state.playlistTracks
      tracks.push(track)
      this.setState({
        playlistTracks: tracks
      })
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks
    tracks = tracks.filter(song => {
      return song.id !== track.id;
    })
    this.setState({
      playlistTracks: tracks
    })
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    })
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri)
    const playlistName = this.state.playlistName
    Spotify.savePlaylist(playlistName, trackURIs)
      .then(() => {
        this.setState({
          playlistName: 'Playlist Name',
          playlistTracks: []
        })
      })
  }

  search(term) {
    Spotify.search(term)
      .then(results => {
        this.setState({
          searchResults: results
        })
      })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar
            onSearch={this.search}
          />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <PlayList
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
