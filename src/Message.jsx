import React, {Component} from 'react';


class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    //loop through the dummy data array
    var messageList=this.props.messages.map(( message, i) => {

    return (

    //add a key to identify each initial state

    <div key={i} className="message">
        <span className="message-username">{message.username}</span>
        <span className="message-content">{message.content}</span>
    </div>

      );
    });
      return (<div>{
        messageList
      }</div>)
    }
}


export default Message;