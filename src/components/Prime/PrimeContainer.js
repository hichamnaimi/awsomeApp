import React, { Component } from 'react';
import PrimeHistory from './PrimeHistory'

class PrimeContainer extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = { primeNumber: null, history: []};
    this.nPrimeNumberCache = {};
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
      message: `${nPrimeInputValue}ème nombre premier: ${result}`
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
    return (
      <div>
        <div className="calculator">
          <input type="number" placeholder="N-ième nombre premier" ref={this.inputRef} />
          <button onClick={this.calculateNPrimeNumber}>Calculer</button>
        </div>
        <div className="resultDisplayer">
          { this.state.primeNumber }
        </div>
        <div className="history">
          <PrimeHistory
            history={this.state.history}
          />
        </div>
      </div>
    );
  }
}

export default PrimeContainer;