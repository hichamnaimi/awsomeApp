import React from 'react';
import { Typography } from '@material-ui/core'

const styles = {
  container: {
    float: 'right',
    width: '40%'
  },
  title: {
    display: 'flex',
    margin: ' 3% 0px'
  },
  tileIcon: {
    color: '#445258',
    marginRight: '2%',
  },
  item: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.2em',
    padding: '0 1%'
  },
  itemResult: {
    fontWeight: 'bold',
    marginLeft: '2%'
  }
}

const PrimeHistoryItem = (props) => {
  const { id, message, value } = props.item;
  const backgroundStyle = props.index % 2 === 0 ? { background: '#dedede'} : { background: 'white' };
  return (
    <div 
      style={{ ...styles.item, ...backgroundStyle }}
      key={id}
    >
      <span>{message}</span>
      <span style={styles.itemResult}>{value}</span>
    </div>
  )
}

const PrimeHistory = ({ history }) => {
  return history.length > 0 && (
    <div style={styles.container}>
      <div style={styles.title}>
        <i style={styles.tileIcon} className="fas fa-2x fa-history"></i>
        <Typography variant="headline">History</Typography>
      </div>
      <div>
        { 
          history.map((item, index) => <PrimeHistoryItem key={item.id} item={item} index={index} />)
        }
      </div>
    </div>
  );
};

export default PrimeHistory;