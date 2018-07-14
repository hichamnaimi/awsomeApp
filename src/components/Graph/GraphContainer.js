import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux'; 
import { fetchComptabilityIfNeeds } from '../../logic/actionCreators/comptability/comptability'

const fillGraphData = (comptabilityData = {}) => {
  return {
    labels: comptabilityData.date,
    datasets: [
      {
        label: 'Credit',
        borderColor: 'rgb(19, 189, 140)',
        backgroundColor: 'rgb(19, 189, 140)',
        fill: false,
        lineTension: 0.2,
        data: comptabilityData.credit
      },
      {
        label: 'Debit',
        borderColor: 'rgb(185, 41, 11)',
        backgroundColor: 'rgb(185, 41, 11)',
        fill: false,
        lineTension: 0.2,
        data: comptabilityData.debit
      },
      {
        label: 'Balance',
        borderColor: 'rgb(11, 163, 185)',
        backgroundColor: 'rgb(11, 163, 185)',
        fill: false,
        lineTension: 0.2,
        data: comptabilityData.balance
      }
    ]
  }
};

const options = {
  title: {
    display: true,
    text: 'Comptabilité 2016',
    fontSize: 25
  },
  elements: {
    line: {
        tension: 0
    }
  },
  animation: {
    duration: 0,
  },
  hover: {
    animationDuration: 0,
  },
  responsiveAnimationDuration: 0,
  pointRadius: 1,
  lineTension: 0.1,
  responsive: true,
  maintainAspectRatio: false
}

class GraphContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.fetchComptabilityIfNeeds();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.comptabilityData.data.length !== nextProps.comptabilityData.data.length) return true;
    return false;
  }

  fetchComptabilityIfNeeds = () => {
    this.props.fetchComptabilityIfNeeds();
  }

  render() {
    const data = this.props.comptabilityData.data.length ? fillGraphData(...this.props.comptabilityData.data) : {};
    return (
      <Line
          data={data}
          width={100}
          height={50}
          options={options}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comptabilityData: state.comptabilityData
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchComptabilityIfNeeds: () => dispatch(fetchComptabilityIfNeeds())
});

export default connect(mapStateToProps, mapDispatchToProps)(GraphContainer);