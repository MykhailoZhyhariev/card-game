import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Table.css';

import * as tableActions from '../../actions/tableActions';
import * as cardActions from '../../actions/cardActions';

import Card from '../Card/Card';

class Table extends Component {
  constructor(props) {
    super(props);

    this.getTableRow = this.getTableRow.bind(this);
  }

  componentDidMount() {
    window.addEventListener('start-game', this.props.startGame());
  }

  componentWillUnmount() {
    window.removeEventListener('start-game', this.props.startGame());
  }

  getTableRow(arr, from, to) {
    return (
      <div className="maingame__table-row">
        {Object.keys(arr)
               .slice(from, to)
               .map((item, key) => <Card name={item} key={key} />)
        }
      </div>
    )
  }

  render() {
    const { getTableRow } = this;
    const { table } = this.props;

    return (
      <div className="maingame__table">
        {getTableRow(table.cardsState, 0, 6)}
        {getTableRow(table.cardsState, 6, 12)}
        {getTableRow(table.cardsState, 12, 18)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    table: state.table,
    card: state.card
  }
}

function mapDispatchToProps(dispatch) {
  return {
    tableActions: bindActionCreators(tableActions, dispatch),
    cardActions: bindActionCreators(cardActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
