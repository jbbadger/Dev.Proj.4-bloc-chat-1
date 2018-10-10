import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';

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
  constructor(props){
    super(props);
    this.state = { activeRoom: '' };
    this.setActiveRoom = this.setActiveRoom.bind(this);
  }

  setActiveRoom(roomItem){
    this.setState({ activeRoom: roomItem.name });
    console.log('room activated');
  }

  render() {
    return (
      <div className="App">
          <RoomList
            firebase={firebase}
            setActiveRoom={(roomItem) => this.setActiveRoom(roomItem) }
          />
          <h2> { this.state.activeRoom } </h2>
          <MessageList
            firebase={firebase}
            messageActiveRoom={ this.state. activeRoom } />
      </div>
    );
  }
}

export default App;
