import React from 'react';
import { makeStyles } from '@mui/styles';
import { 
    Typography,
    Box,
    Button,
    Divider
} from '@mui/material';
import FarmImage from '../assets/farm.png';

const useStyles = makeStyles(theme => ({
    timeText: {
        fontSize: '10px',
        color: '#4C5862',
        opacity: '0.5',
    },
    button: {
        background: '#BF0C1A!important',
        boxShadow: '0px 2px 10px rgba(205, 19, 34, 0.08)!important',
        fontWeight: '600!important',
        fontSize: '12px!important',
        letterSpacing: '0.01em!important',
        textTransform: 'capitalize!important',
        minHeight: '37px',
    },
}));

const Tournament = () => {
    const classes = useStyles();
    return (
        <Box sx={{
            position: 'relative',
            backgroundColor: '#fff',
            boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.06)',
            borderRadius: '8px',
            marginBottom: '24px'
        }}>
            <Typography sx={{
                fontWeight: '500',
                fontSize: '15px',
                lineHeight: '22px',
                letterSpacing: '0.01em',
                color: '#192A3E',
                padding: '16px 24px',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                Tournament #1
                <span className={classes.timeText}>
                    Start in 8 hours 40 mins
                </span>
            </Typography>
            <Divider />
            <Box sx={{ padding: '24px 24px 32px' }}>
                <img src={FarmImage} alt="" width="100%" />
                <Typography
                    sx={{
                        fontSize: '15px',
                        lineHeight: '22px',
                        textAlign: 'center',
                        letterSpacing: '0.01em',
                        color: '#4C5862',
                        margin: '16px 0'
                    }}
                >
                    <b>1.325</b> Registered Roosters
                </Typography>
                <Button
                    variant="contained"
                    fullWidth
                    className={classes.button}
                >
                    Register your Roosters (2)
                </Button>
            </Box>
        </Box>
    )
}

export default Tournament;