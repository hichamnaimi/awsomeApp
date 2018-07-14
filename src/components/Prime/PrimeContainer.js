import React, { Component } from 'react';
import PrimeHistory from './PrimeHistory'
import PrimeCalculator from './PrimeCalculator'
import PrimeResultDisplayer from './PrimeResultDisplayer'

const styles = {
  container: {
    width: '90%',
    margin: '1% auto'
  },
  calculationContainer: {
    float: 'left',
    width: '25%',
    display: 'flex',
    flexDirection: 'column'
  }
}

const savePrimeHistory = (history) => {
  localStorage.setItem("primeHistory", JSON.stringify(history));
}
class PrimeContainer extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = { primeNumber: null, history: []};
    this.nPrimeNumberCache = {};
  }

  componentDidMount() {
    const savedHistory = localStorage.getItem("primeHistory");
    if (savedHistory) {
      this.setState({ history: JSON.parse(savedHistory)});
    }
  } 

  componentWillUnmount() {
    savePrimeHistory(this.state.history);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.primeNumber !== nextState.primeNumber) return true;
    if (this.state.history.length !== nextState.history.length) return true;
    return false;
  }

  isPrime = (number) => {
    for(let i = 2, limit = Math.sqrt(number); i <= limit; i++) {
        if(number % i === 0) return false;
    } 
    return number !== 1;
  }

  findNPrimeNumber = (nPrimeInputValue) => {
    let primeNumberCounter = 0;
    let numberIterator = 0;
    let lastFoundPrimeNumber = 0;
    while(primeNumberCounter <= nPrimeInputValue) {
      if (this.isPrime(numberIterator)) {
        lastFoundPrimeNumber = numberIterator;
        primeNumberCounter++;
      }
      numberIterator++;
    } 
    return lastFoundPrimeNumber;
  }

  getCachedNPrimeNumber = (nPrimeInputValue) => {
    return this.nPrimeNumberCache[nPrimeInputValue];
  }

  cacheNPrimeNumber = (nPrimeInputValue, result) => {
    this.nPrimeNumberCache[nPrimeInputValue] = result;
  }

  feedHistory = (nPrimeInputValue, result) => {
    const content = {
      id: +Date.now(),
      message: `${nPrimeInputValue}ème nombre premier: `,
      value: result
    };
    const newHistory = [content, ...this.state.history];
    this.setState({ history: newHistory });
  }

  calculateNPrimeNumber = () => {
    const nPrimeInputValue = this.inputRef.current.value;
    if (nPrimeInputValue > 0) {
      const cachedNPrimeNumber = this.getCachedNPrimeNumber(nPrimeInputValue);
      if (!cachedNPrimeNumber) {
        const result = this.findNPrimeNumber(nPrimeInputValue);
        this.cacheNPrimeNumber(nPrimeInputValue, result);
        this.feedHistory(nPrimeInputValue, result);
        return this.setState({ primeNumber: result });
      }
      this.feedHistory(nPrimeInputValue, cachedNPrimeNumber);
      this.setState({ primeNumber: cachedNPrimeNumber });
    }
  }

  render() {
    console.log(this.state.primeNumber)
    return (
      <div style={styles.container}>
        <div style={styles.calculationContainer}>
          <PrimeCalculator
            ref={this.inputRef}
            calculateNPrimeNumber={this.calculateNPrimeNumber}
          />
          <PrimeResultDisplayer
            primeNumber={this.state.primeNumber}
          />
        </div>
        <PrimeHistory
          history={this.state.history}
        />
      </div>
    );
  }
}

export default PrimeContainer;