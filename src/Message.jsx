import React, {Component} from 'react';


class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var messageList=this.props.messages.map(( message, i) => {

    return (

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