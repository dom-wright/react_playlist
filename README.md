# 🎧 Playlist API 🎧

## What is this?
A React app that enables users to create playlists within their Spotify accounts. User's can search for songs by title, view full details about the returned songs (title, artist, and album), create and name a playlist, add selected songs to playlist, and finally export the playlist to their Spotify accounts. 

### Process:
- **Spotify Login**: the first time the user searches for a song, they will be redirected to Spotify to login and authorise the application.
- **Search tracks**: user enters a pattern into the search bar and clicks `SEARCH` to search for songs by title.
- **Populate Results List**: the application displays the tracks that are returned from the query.
- **Add songs**: users add chosen tracks to their playlist by clicking the `'+'` sign. Tracks can be removed from the playlist by clicking the `'-'` sign.
- **Playlist title**: user can name their playlist.
- **Save playlist**: user saves their custom playlist by clicking `SAVE TO SPOTIFY`.
- **Spotify**: The new playlist can now be located and played within the user's Spotify account.

The application uses HTML, CSS, JavaScript, and ReactJS. Oauth Authentication is used to authenticate and authorise the user with Spotify, and the Fetch API is used for communication.

### Requirements:
To use this service, you must have a personal account with Spotify. It need not be a premium account.

## **Disclaimer**
This is an end-of-course project for Codecademy's ReactJS course. Guidance and HTML/CSS snippets were provided by Codecademy.

- - -
## Setup Instructions
### API
1. Before using the application, you must create a developer account at [Spotify](https://developer.spotify.com/).
2. After you have created a developer account, you will be in the Dashboard page. Click the `Create app` button in the top right.
3. Complete the form and agree to the T&Cs. Some suggested values are provided below.
   
   | Field           | Value                            |
   | --------------- | -------------------------------- |
   | App name        | Playlist API                     |
   | App description | An app to create music playlists |
   | Website         | http://localhost:3000/           |
   | Redirect URIs   | http://localhost:3000/           |

4. In the landing page for your new application, click the `Settings` button in the top right. You should now be able to see your Client ID. Copy it to your clipboard.

### Clone Project
1. Clone this project to a local directory.
2. The cloned project will not initially have the `node_modules` required to run the application. While in the root directory of your React application (same directory as the package.json file), in the command line, run `npm install` to download these modules.
3. Still in the root directory, create a `.env` file. Inside the `.env` file, add the Client ID from your Spotify developer account, and the redirect URI you selected above as key-value pairs like so:
```
    REACT_APP_CLIENT_ID="<Client ID>"
    REACT_APP_REDIRECT_URI="<redirect URI>"
```
4. Run `npm start` to start the application. The application should open up automatically in a new tab in your browser, but if this fails, visit http://localhost:3000/.
5. See below for more ReactJS related guidance.

- - -

# React - Setup Instructions

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.