import React, { useState } from 'react';
import { InputBase, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizontal from '@material-ui/icons/MoreHoriz';

const useStyle = makeStyles((theme) => ({
    editTitleContainer: {
        margin: theme.spacing(1),
        display: "flex"
    },
    editTitle: {
        flexGrow: 1,
        fontSize: "1.2rem",
        fontWeight: "bold"
    },
    input: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        margin: theme.spacing(1),
        "&:focus":{
            background: '#ddd',
        }
    }
}))

function Title({title}) {

    const [edit, setEdit] = useState(false); 
    const classes = useStyle();
 
  return ( 
    <>
    {edit ? (
        <div>
            <InputBase 
                autoFocus
                value={title}
                inputProps={{
                    className: classes.input
                }}
                fullWidth
                onBlur={()=> setEdit(!edit)}
            />
        </div>
    ) : (
        <div className={classes.editTitleContainer}>
            <Typography 
                onClick={() => setEdit(!edit)} 
                className={classes.editTitle}
            >
                {title}
            </Typography>
            <MoreHorizontal />
        </div>
    )} 


    </>
  )
}

export default Title;