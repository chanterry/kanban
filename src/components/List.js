import React from 'react';
import Title from './Title';
import Card from './Card';
import InputContainer from './InputContainer';

import { CssBaseline, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    root:{
        width: "300px",
        backgroundColor: "#EBECF0",
        marginLeft : theme.spacing(1)
    }
}))

function List({}) {

  const classes = useStyle();

  return (
    <Paper className={classes.root}>
      <CssBaseline />
      <Title />
      <Card />
      <InputContainer />
    </Paper>
  )
}

export default List;