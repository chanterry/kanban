import React, { useState } from 'react'
import { Collapse, Paper, Typography } from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles';
import InputCard from './InputCard';

const useStyle = makeStyles((theme) => ({
    root:{
        marginTop: theme.spacing(2),
    },
    addCard:{
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(0, 1, 1, 1),
        backgroundColor: "#EBECF0",
        "&:hover": {
            backgroundColor: fade('#000', 0.25 )
        }
    }
}))

function InputContainer() {

    const classes = useStyle();
    const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
        <Collapse in={open}>
            <InputCard setOpen={setOpen}/>
        </Collapse>
        <Collapse in={!open}>
            <Paper
                className={classes.addCard}
                elevation={0}
                onClick={() => setOpen(!open)}
            >
                <Typography>
                    + Add Task 
                </Typography>
            </Paper>
        </Collapse>

    </div>
  )
}

export default InputContainer