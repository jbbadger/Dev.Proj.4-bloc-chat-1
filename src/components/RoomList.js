import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props){
    super(props);
    this.roomsRef = this.props.firebase.database().ref('rooms');
    this.state = {
      rooms: [],
      newRoom: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat( room ) });
     });
   }

   handleChange(e) {
     this.setState({ newRoom: e.target.value })
   }

   handleSubmit(e) {
     e.preventDefault();
     if (!this.state.newRoom) {return};
     this.setState({ rooms: [...this.state.rooms, this.state.newRoom], newRoom: ''});
     this.roomsRef.push({ name: this.state.newRoom});
   }


  render(){
    return(
      <div className="room-list">
        <h1>Bloc Chat</h1>
        {this.state.rooms.map((roomItem, index) =>
          <ul key={index} className="room-num">
          <li key={index}
            onClick={() => this.props.setActiveRoom(roomItem) }>
          { roomItem.name }</li> </ul>)}
        <form type="submit" onClick={ this.handleSubmit }>
          <input type="text" value={ this.state.newRoom } onChange={ this.handleChange } />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default RoomList;
