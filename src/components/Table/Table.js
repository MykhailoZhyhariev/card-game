import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Table.css';

import Card from '../Card/Card';

class Table extends Component {
  componentDidMount() {
    window.addEventListener('start-game', this.props.startGame());
  }

  componentWillUnmount() {
    window.removeEventListener('start-game', this.props.startGame());
  }

  render() {
    const { table } = this.props;

    return (
      <div className="maingame__table">
        {Object.keys(table.cardsState)
               .map((item, key) => <Card name={item} index={key} key={key} />)
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    table: state.table
  }
}

export default connect(mapStateToProps)(Table);
