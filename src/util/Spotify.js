let accessToken;
const clientID = process.env.REACT_APP_CLIENT_ID;
const redirectURI = process.env.REACT_APP_REDIRECT_URI;

const Spotify = {
    getAccessToken() {
        // if accessToken already exists, return it
        if (accessToken) {
            return accessToken;
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1]
            const expiresIn = Number(expiresInMatch[1])
            // Below clears the parameters, allowing us to grab a new access token when it expires.
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
        }
    },
    search(term) {
        const accessToken = Spotify.getAccessToken()
        const url = `https://api.spotify.com/v1/search?type=track&q=${term}`

        return fetch(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(response => {
                return response.json()
            })
            .then(jsonResponse => {
                console.log('jsonResponse = ', jsonResponse)
                if (!jsonResponse.tracks) {
                    return [];
                } else {
                    const tracks = jsonResponse.tracks.items.map(track => ({
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri
                    }))
                    return tracks
                }
            })
    },
    savePlaylist(playlistName, trackURIs) {
        if (!playlistName || !trackURIs) {
            return;
        }
        const accessToken = Spotify.getAccessToken()
        const headers = { Authorization: 'Bearer ' + accessToken }
        let userID = ''
        return fetch('https://api.spotify.com/v1/me', { headers: headers })
            .then(response => response.json())
            .then(jsonResponse => {
                userID = jsonResponse.id
                return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({ name: playlistName })
                })
            })
            .then(response => response.json())
            .then(jsonResponse => {
                const playlistID = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({ uris: trackURIs })
                })
            })
    }
}

export default Spotify;