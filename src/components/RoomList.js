import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props){
    super(props);
    this.state = {
      rooms: []
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');

  }

  componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat( room ) });
     });
   }

  render(){
    return(
      <div className="room-list">
        <h1>Bloc Chat</h1>
        {this.state.rooms.map((roomItem, index) =>
          <ul key={index} className="room-num"><li> { roomItem.name }</li> </ul>)}
      </div>
    );
  }
}

export default RoomList;