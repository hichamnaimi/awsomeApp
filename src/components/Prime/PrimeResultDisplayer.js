import React from 'react';

const styles = {
  container: {
    border: '2px solid grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    background: '#e6f7ff',
    fontSize: '1.5em',
    marginTop: '20%',
    padding: '7% 0'
  }
};

const PrimeResultDisplayer = (props) => {
  return props.primeNumber ?
    <div style={styles.container}>
      { props.primeNumber }
    </div> : null;
};

export default PrimeResultDisplayer;