import React, { useContext, useState } from 'react'
import { Button, IconButton, InputBase, Paper } from '@material-ui/core'
import ClearIcon from "@material-ui/icons/Clear"
import { fade, makeStyles } from '@material-ui/core/styles';
import storeAPI from '../data/storeAPI';

const useStyle = makeStyles((theme) => ({
    card:{
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottom: theme.spacing(5),
    },
    input:{ 
        marginLeft: theme.spacing(1),
    },
    btnConfirm:{
        background: "#5AAC44",
        color: "#fff",
        "&:hover":{
            background: fade("#5AAC44", 0.75)
        }
    },
    confirm:{
        margin: theme.spacing(0, 1, 1, 1)
    } 
}))

function InputTask({setOpen, listId, type}) {

    const classes = useStyle();
    const [title, setTitle] = useState('');
    const {addTask} = useContext(storeAPI);

    const handleOnChange = (e) => {
        setTitle(e.target.value)
    }

    const handleConfirm = () => {
        if (title !== ''){
            addTask(title, listId);
        }
        setTitle('');
    }

  return (
    <>
        <div>
            <Paper className={classes.card}>
                <InputBase
                    className={classes.input}
                    onChange={handleOnChange}
                    multiline
                    fullWidth
                    value={title}
                    placeholder={type == 'task' ? 'Enter a task' : 'Enter a list title'}
                />
            </Paper>
        </div>
        <div className={classes.confirm}>
            <Button className={classes.btnConfirm} onClick={handleConfirm}>
                {type == 'task' ? 'Add Task' : 'Add List'}
            </Button>
            <IconButton onClick={()=> setOpen(false)}>
                <ClearIcon />
            </IconButton>
        </div>
    </>
  )
}

export default InputTask