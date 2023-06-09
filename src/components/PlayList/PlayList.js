import React from 'react'
import './PlayList.css'
import TrackList from '../TrackList/TrackList.js'

class PlayList extends React.Component {

    constructor(props) {
        super(props)

        this.handleNameChange = this.handleNameChange.bind(this)
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value)
    }

    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'} onChange={this.handleNameChange} />
                <TrackList playlistName={this.props.playlistName} tracks={this.props.playlistTracks} onAdd={this.props.onAdd} isRemoval={true} onRemove={this.props.onRemove} />
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default PlayList;