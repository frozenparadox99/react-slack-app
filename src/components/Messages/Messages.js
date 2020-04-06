import React, { Component, Fragment } from "react";
import firebase from "../../firebase";
import { Segment, Comment } from "semantic-ui-react";
import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";

class Messages extends Component {
  state = {
    messagesRef: firebase.database().ref("messages"),
    channel: this.props.currentChannel,
    user: this.props.currentUser,
  };
  render() {
    const { messagesRef, channel, user } = this.state;
    return (
      <Fragment>
        <MessagesHeader />

        <Segment>
          <Comment.Group className="messages"></Comment.Group>
        </Segment>
        <MessageForm
          messagesRef={messagesRef}
          currentUser={user}
          currentChannel={channel}
        />
      </Fragment>
    );
  }
}

export default Messages;
