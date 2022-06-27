import React from 'react'
import { Button, IconButton, InputBase, Paper } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';

const useStyle = makeStyles((theme) => ({
    card: {
        paddingBottom: theme.spacing(5),
        margin: theme.spacing(0, 1, 1, 1)
    },
    input: {
        margin: theme.spacing(1)
    },
    btn: {
        background: '#5AAC44',
        color: '#fff',
        "&:hover":{
            background: fade('#5AAC44', 0.5)
        }
    },
    confirm: {
        margin: theme.spacing(0, 1, 1, 1)
    }
}))

function InputCard({setOpen}) {

    const classes = useStyle();

  return (
    <>
        <div>
            <Paper className={classes.card}>
                <InputBase 
                    multiline 
                    onBlur={()=> setOpen(false)}
                    fullWidth 
                    placeholder="Enter"
                    inputProps={{
                        classes: classes.input
                    }}
                />
            </Paper>
        </div> 
        <div className={classes.confirm}>
            <Button 
                className={classes.btn} 
                onClick={()=> setOpen(false)}
            >
                Add Card
            </Button>
            <IconButton onClick={()=> setOpen(false)}>
                <ClearIcon />
            </IconButton>
        </div>
    </>
  )
}

export default InputCard