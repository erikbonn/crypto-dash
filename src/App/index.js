import React, { Component } from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage'
import AppLayout from './AppLayout'
// import styled, { css } from 'styled-components';

// const MyButton = styled.div`
//   color: green;
//   ${props => props.primary && css`
//     color: palevioletred;
//   `}
// `;

// const TomatoButton = styled(MyButton)`
//   color: tomato;
//   border-color: tomato;
// `;
class App extends Component {
  render() {
    return (
      <AppLayout>
        <WelcomeMessage/>
      </AppLayout>
    );
  }
}

export default App;
