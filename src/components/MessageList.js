import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props){
    super(props);
    this.messagesRef = this.props.firebase.database().ref('messages');
    this.state = {
                   messages: [],
                 };
  }

  componentDidMount() {
     this.messagesRef.on('child_added', snapshot => {
       const message = snapshot.val();
       message.key = snapshot.key;
       this.setState({ message: this.state.messages.concat( message ) });
     });
   }

  render(){
    return(
      <div>
        <div>
        {this.state.messages.filter(messageItem =>
          messageItem.roomId === this.props.activeRoom.key).map((messageItem, index) =>
          <tr key={index}>
            <td>User: {messageItem.username}</td>
            <td>Message: {messageItem.content}</td>
            <td>Created: {messageItem.sentAt}</td>
          </tr>)
        }
        </div>
      </div>

    );
  }
}

export default MessageList;
