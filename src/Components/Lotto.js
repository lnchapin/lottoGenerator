import React, { Component } from 'react'
import styled from 'styled-components'
import LottoBall from './Ball'
import { Row, Button } from 'reactstrap'

const LottoDiv = styled.div`
  border: 1px solid grey;
  border-radius: 20px;
  padding: 15px;
  margin: 2%;
`

const SpacedButton = styled(Button)`
  margin: auto;
`

class Lotto extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 40
  };
  constructor(props){
    super(props)
    this.state = {
      numbers:Array.from({length: this.props.numBalls})
    }
  }

  getNumbers=()=>{
    // let newNumbers = [];
    // for (var i = 0; i < this.props.numBalls; i++) {
    //   newNumbers.push(Math.floor(Math.random()* this.props.maxNum)+1)
    // }
    // this.setState({numbers: newNumbers})
    // 
    //because we used the Array.from method we don't have to do this because we have something to map over
    this.setState(curState =>({
      numbers: curState.numbers.map(
        n=>Math.floor(Math.random()* this.props.maxNum)+1
      )
    }));
  }

  render(){
    return(
    <LottoDiv>
      <h2>{this.props.title}</h2>
      <Row>
        {this.state.numbers.map(ball => <LottoBall number={ball} />)}
      </Row>
      <Row>
        <SpacedButton onClick={this.getNumbers}>Generate</SpacedButton>
      </Row>
    </LottoDiv>
  )}


}

export default Lotto;
