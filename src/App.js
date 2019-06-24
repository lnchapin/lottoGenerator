import React, { Component } from "react";
import "./App.css";
import Lottery from "./Components/Lotto";
import { Container } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <Container className='App'>
        <Lottery />
        <Lottery title='Mini Daily' maxNum={10} numBalls={4} />
      </Container>
    );
  }
}

export default App;
