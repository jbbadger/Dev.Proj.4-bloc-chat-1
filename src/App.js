import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList.js';

var config = {
apiKey: "AIzaSyAcNE93Rk9nK1xtMoMZB7Sq454thOnJS0Y",
authDomain: "dev-proj-4-bloc-chat-1.firebaseapp.com",
databaseURL: "https://dev-proj-4-bloc-chat-1.firebaseio.com",
projectId: "dev-proj-4-bloc-chat-1",
storageBucket: "dev-proj-4-bloc-chat-1.appspot.com",
messagingSenderId: "442820706089"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
          <RoomList firebase={firebase} />
      </div>
    );
  }
}

export default App;
