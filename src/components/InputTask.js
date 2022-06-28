import React, { useContext, useState } from 'react'
import { Button, IconButton, InputBase, Paper } from '@material-ui/core'
import ClearIcon from "@material-ui/icons/Clear"
import { fade, makeStyles } from '@material-ui/core/styles';
import storeAPI from '../data/storeAPI';

const useStyle = makeStyles((theme) => ({
    card:{
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottom: theme.spacing(4),
    },
    input:{ 
        margin: theme.spacing(1),
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

function InputTask({setOpen, listId}) {

    const classes = useStyle();
    const [taskTitle, setTaskTitle] = useState('');
    const {addTask} = useContext(storeAPI);

    const handleOnChange = (e) => {
        setTaskTitle(e.target.value)
    }

    const handleConfirm = () => {
        if (taskTitle !== ''){
            addTask(taskTitle, listId); 
        }
        setTaskTitle('');
    }

  return (
    <>
        <div>
            <Paper className={classes.card}>
                <InputBase
                    onChange={handleOnChange}
                    multiline
                    onBlur={()=> setOpen(false)}
                    fullWidth
                    placeholder='Enter a task'
                    inputProps={{
                        classes: classes.input,
                    }}  
                    value={taskTitle}
                />
            </Paper>
        </div>
        <div className={classes.confirm}>
            <Button className={classes.btnConfirm} onClick={handleConfirm}>
                Add Task
            </Button>
            <IconButton onClick={()=> setOpen(false)}>
                <ClearIcon />
            </IconButton>
        </div>
    </>
  )
}

export default InputTask