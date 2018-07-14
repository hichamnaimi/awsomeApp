import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { AppBar, Toolbar, Typography, withStyles, Button} from '@material-ui/core';

const styles = {
  headerTitle: {
    flex: 1
  },
  navBtn: {
    color: 'white',
    textDecoration: 'none'
  }
}

const Navigation = (props) => {
  const handleNavigation = (route) => () => {
    props.history.push(route);
  }
  const applyActiveStyle = (route) => {
    return route === props.location.pathname ? {background: 'rgb(5, 118, 175)'} : { background: 'none' };
  }
  return (
    <div>
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
            Welcome to Awsome
          </Typography>
          <Navigation {...props}/>
        </Toolbar>
      </AppBar>
      {props.children}
   </div>
  );
};

export default withStyles(styles)(withRouter(Header));