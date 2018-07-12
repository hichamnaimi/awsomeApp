import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import fetch from 'cross-fetch';

const fillGraphData = (graphData) => ({
  labels: graphData.date,
  datasets: [
    {
      label: 'Credit',
      borderColor: 'rgb(19, 189, 140)',
      backgroundColor: 'rgb(19, 189, 140)',
      fill: false,
      lineTension: 0.2,
      data: graphData.credit
    },
    {
      label: 'Debit',
      borderColor: 'rgb(185, 41, 11)',
      backgroundColor: 'rgb(185, 41, 11)',
      fill: false,
      lineTension: 0.2,
      data: graphData.debit
    },
    {
      label: 'Balance',
      borderColor: 'rgb(11, 163, 185)',
      backgroundColor: 'rgb(11, 163, 185)',
      fill: false,
      lineTension: 0.2,
      data: graphData.balance
    }
  ]
});

const options = {
  title: {
    display: true,
    text: 'Comptabilité 2016',
    fontSize: 25
  },
  pointRadius: 1,
  lineTension: 0.1,
  responsive: true,
  maintainAspectRatio: false
}

class GraphContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { graphData: {} };
  }

  componentDidMount() {
    fetch('http://localhost:4000/comptability')
      .then(res => res.json())
      .then(json => this.setState({ graphData: fillGraphData(json) }))
  }

  render() {
    return (
      <Line
          data={this.state.graphData}
          width={100}
          height={50}
          options={options}
      />
    );
  }
}

export default GraphContainer;