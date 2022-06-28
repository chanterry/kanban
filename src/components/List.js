import React from 'react';
import Title from './Title';
import Task from './Task';
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

function List({list}) {

  const classes = useStyle();

  return (
    <Paper className={classes.root}>
      <CssBaseline />
      <Title title={list.title}/>
      {list.tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <InputContainer listId={list.id} />
    </Paper>
  )
}

export default List;