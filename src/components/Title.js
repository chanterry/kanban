import { Typography, InputBase } from '@material-ui/core'
import React, { useState } from 'react'


import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyle = makeStyles((theme) => ({
    editTitleContainer:{
        margin : theme.spacing(1),
        display: "flex"
    },
    editTitle:{
        flexGrow: 1,
        fontSize: "1.2rem",
        fontWeight: "bold"
    },
    input:{
        margin : theme.spacing(1),
        "&:focus":{
            background: "#ddd",        
            fontSize: "1.2rem",
            fontWeight: "bold"
        } 
    }
}))

function Title() {

    const classes = useStyle();
    const [ open, setOpen] = useState(false);

  return (
    <>
        {open ? (        
            <div>
                <InputBase 
                    value="todo"
                    inputProps={{
                        className: classes.input,
                    }}
                    fullWidth
                    onBlur={()=> setOpen(!open)}
                    autoFocus
                />
            </div> 
        ) : (        
            <div className={classes.editTitleContainer}>
                <Typography
                    onClick={()=> setOpen(!open)}
                    className={classes.editTitle}
                >
                    Todo 
                </Typography>
                <MoreHorizIcon />
            </div>
        )}

    </>
  )
}

export default Title