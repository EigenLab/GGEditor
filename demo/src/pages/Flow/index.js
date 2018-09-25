import React, {Component } from 'react';
import { FlowEditor } from "@src";

class FlowPage extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <FlowEditor/>
    );
  }
}

export default FlowPage;
