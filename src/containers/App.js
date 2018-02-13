import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as appActions from '../actions/appActions';

import StartGame from '../components/StartGame/StartGame.js'
import MainGame from '../components/MainGame/MainGame.js'
import EndGame from '../components/EndGame/EndGame.js'

class App extends Component {
  render() {
    const { changeGameState } = this.props.appActions;
    const { app } = this.props;

    const screen = () => {
      switch (app.gameState) {
        case 'game':
          return <MainGame />

        case 'end':
          return <EndGame />

        default:
          return <StartGame startGame={changeGameState} />
      }
    }

    return screen();
  }
}

function mapStateToProps(state) {
  return {
    app: state.app
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
