import React from 'react';
import { withRouter } from 'react-router-dom';
import { AppBar, Toolbar, Typography, withStyles, Button} from '@material-ui/core';

const styles = {
  headerTitle: {
    flex: 1,
    display: 'flex',
    alignItems: 'center'
  },
  headerIcon: {
    marginRight: '5%'
  },
  container: {
    flex: '6'
  },
  navBtn: {
    color: 'white',
    textDecoration: 'none',
  }
}

const Navigation = (props) => {
  const handleNavigation = (route) => () => {
    props.history.push(route);
  }
  const applyActiveStyle = (route) => {
    return route === props.location.pathname ? {background: '#00aaff'} : { background: 'none' };
  }
  return (
    <div style={styles.container}>
      <Button
        onClick={handleNavigation("/music")} style={applyActiveStyle("/music")} size="large" color="inherit">
        Music
      </Button>
      <Button onClick={handleNavigation("/prime")} style={applyActiveStyle("/prime")}  size="large" color="inherit">
        Prime
      </Button>
      <Button onClick={handleNavigation("/graph")} style={applyActiveStyle("/graph")} size="large" color="inherit">
        Graph
      </Button>
  </div>
  )
};

const Header = (props) => {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.headerTitle}>
          <i className="fas fa-2x fa-sun" style={styles.headerIcon}></i> Awsome !
          </Typography>
          <Navigation {...props}/>
        </Toolbar>
      </AppBar>
      {props.children}
   </div>
  );
};

export default withStyles(styles)(withRouter(Header));