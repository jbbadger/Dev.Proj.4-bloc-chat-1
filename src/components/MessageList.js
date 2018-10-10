import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = {
                   messages: [{
                   username: "<USERNAME HERE>",
                   content: "<CONTENT OF THE MESSAGE HERE>",
                   sentAt: "<firebase.database.ServerValue.TIMESTAMP>",
                   roomId: "<ROOM UID HERE>"}]
                 };
    this.messagesRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount() {
     this.messagesRef.on('child_added', snapshot => {
       const message = snapshot.val();
       message.key = snapshot.key;
       this.setState({ message: this.state.message.concat( message ) });
     });
   }

  render(){
    return(
      <div>

        <div>
        { this.state.messages.map( (messageItem, index) =>
          { return (
            <p key={index}>
            {messageItem.roomID === this.props.messageActiveRoom.key ? messageItem.content : '' }
            </p>);})}
        </div>
      </div>

    );
  }
}

export default MessageList;
