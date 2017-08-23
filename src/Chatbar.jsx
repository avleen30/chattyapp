import React, {Component} from 'react';


class Chatbar extends Component {
  constructor(props) {
    super(props);
    //setting value as state
    this.state = {value: ""}
    //adding an event handler
    this.postMessage = this.postMessage.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event){
    this.setState({value: event.target.value})
  }

  postMessage(event){
    if (event.key === "Enter"){
      this.setState({value: ""})
      this.props.postMessage(this.state.value)
    }
  }


  render() {
    return (
      <footer className="chatbar">
      <input defaultValue={this.props.name} className="chatbar-username" placeholder="Your Name (Optional)" />
      <input className="chatbar-message" value= {this.state.value} onChange= {this.onChange} onKeyPress={this.postMessage} placeholder="Type a message and hit ENTER" />
    </footer>
    );
  }
}

export default Chatbar;