import React, { useContext, useState } from 'react'
import { Button, IconButton, InputBase, Paper } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import storeAPI from '../../utils/storeAPI';

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

function InputCard({setOpen, listId}) {

    const classes = useStyle();
    const {addCard} = useContext(storeAPI);
    const [cardTitle, setCardTitle] = useState('');

    const handleOnChange = (e) => { 
        setCardTitle(e.target.value)
    }

    const handleBtnConfirm = () => {
        addCard(cardTitle, listId);
        setCardTitle('')
        setOpen(false)
    }

    const handleOnBlur = () => {
        setOpen(false);
        //setCardTitle('');
    }

  return (
    <>
        <div>
            <Paper className={classes.card}>
                <InputBase 
                    onChange={handleOnChange}
                    multiline 
                    onBlur={handleOnBlur}
                    fullWidth 
                    placeholder="Enter"
                    value={cardTitle}
                    inputProps={{
                        classes: classes.input
                    }}
                />
            </Paper>
        </div> 
        <div className={classes.confirm}>
            <Button 
                className={classes.btn} 
                onClick={handleBtnConfirm}
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