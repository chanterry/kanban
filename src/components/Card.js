import React from 'react'
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyle = makeStyles((theme) => ({
    card:{
        padding:  theme.spacing(1, 1, 1, 3),
        margin : theme.spacing(1)
    }
}))

function Card({card}) {

    const classes = useStyle();

  return (
    <Paper className={classes.card}>{card.title}</Paper>
  )
}

export default Card;
