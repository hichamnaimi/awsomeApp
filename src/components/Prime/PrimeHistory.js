import React from 'react';

const styles = {
  item: {
    borderBottom: '1px solid dimgrey',
    height: '42px',
    display: 'flex',
    alignItems: 'center',
  }
}

const PrimeHistoryItem = (props) => {
  const { id, message } = props.item;
  const backgroundStyle = props.index % 2 === 0 ? { background: '#f1f1f1'} : { background: 'white' };
  return (
    <div 
      style={{ ...styles.item, ...backgroundStyle }}
      key={id}
    >
      {message}
    </div>
  )
}

const PrimeHistory = ({ history }) => {
  return history.length && (
    <div>
      { 
        history.map((item, index) => <PrimeHistoryItem key={item.id} item={item} index={index} />)
      }
    </div>
  );
};

export default PrimeHistory;