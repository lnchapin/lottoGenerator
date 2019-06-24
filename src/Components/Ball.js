import React from 'react';
import styled from 'styled-components';
import { Col } from 'reactstrap'

const Ball = styled(Col)`
  background-color: tomato;
  border-radius: 50%;
  color: white;
  display: inline-block;
  width: 3em;
  height: 2.25em;
  padding-top: 0.75em;
  text-align: center;
  margin-right: 0.5em;
  font-weight: bold;
  font-size: 1.5em;
`

const LottoBall = props => {
  console.log(props);
  return(
    <Ball>
      {props.number}
    </Ball>
  )
}

export default LottoBall;
