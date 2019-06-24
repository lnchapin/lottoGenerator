import React from 'react';
import styled from 'styled-components';

const Ball = styled.div`
  background-color: tomato;
  border-radius: 50%;
  color: white;
  display: inline-block;
  width: 3em;
  height: 3em;
  padding-top: 0.75em;
  text-align: center;
  margin-right: 0.5em;
  font-weight: bold;
  font-size: 1.5em;
  margin: auto;
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
