import React, {Fragment} from 'react'
import PizzaContainer from './PizzaContainer';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function Home() {

  return (
      <Fragment> 
        <AppBar position="static">
        <Toolbar position="static">
        <Typography variant="title" color="inherit">Welcome to NewAgePizza</Typography>
        </Toolbar>
        </AppBar>
        <br></br>
        <PizzaContainer/>
      </Fragment>
)
}