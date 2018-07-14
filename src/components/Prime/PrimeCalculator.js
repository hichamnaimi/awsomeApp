import React from 'react';
import { TextField, Button } from '@material-ui/core'

const styles = {
  calculatorContainer: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gridColumn: 1/2
  },
  calculateBtn: {
    background: '#00aaff',
    color: 'white',
    marginLeft: '5%'
  }
}

const PrimeCalculator = React.forwardRef((props, ref) => (
  <div className="calculator" style={styles.calculatorContainer}>
    <TextField
        type="number"
        style={{ flex: '1' }}
        placeholder="Entrez un nombre entier"
        label="N-ième nombre premier"
        inputRef={ref}
      />
    <Button
      variant="contained"
      size="medium"
      onClick={props.calculateNPrimeNumber}
      style={styles.calculateBtn}
    >
        Calculer
    </Button>
  </div>
));

export default PrimeCalculator;