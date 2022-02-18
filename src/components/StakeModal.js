import React from 'react';
import { makeStyles } from '@mui/styles';
import { 
    Button,
    Dialog,
    Paper,
    Typography,
    Box
} from '@mui/material';
import food1Image from '../assets/food1.png';

const useStyles = makeStyles(theme => ({
    button: {
        background: '#BF0C1A!important',
        boxShadow: '0px 2px 10px rgba(205, 19, 34, 0.08)!important',
        fontWeight: '600!important',
        fontSize: '12px!important',
        letterSpacing: '0.01em!important',
        textTransform: 'capitalize!important',
        minHeight: '37px',
    },
    foodImage: {
        display: 'block',
        margin: '12px auto 16px'
    }
}));

const StakeModal = ({open, onClose}) => {
    const classes = useStyles();
    return (
        <Dialog onClose={onClose} open={open} sx={{
            "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
                maxWidth: 438,
                width: '100%'
            }
        }}>
            <Paper sx={{
                padding: '46px 24px 24px'
            }}>
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '15px',
                        lineHeight: '22px',
                        textAlign: 'center',
                        letterSpacing: '0.01em',
                        color: '#192A3E',
                    }}
                >
                    Stack to Boost your Egg Production
                </Typography>
                <Typography
                    sx={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        textAlign: 'center',
                        letterSpacing: '0.01em',
                        color: '#4C5862',
                    }}
                >
                    Stack 250 MATIC to increase by your Egg Rate.
                </Typography>
                <Typography
                    sx={{
                        fontSize: '10px',
                        lineHeight: '18px',
                        textAlign: 'center',
                        letterSpacing: '0.01em',
                        color: '#4C5862',
                        opacity: '0.5'
                    }}
                >
                    (1 minute / MATIC)
                </Typography>
                <img className={classes.foodImage} src={food1Image} alt="" />
                <Typography
                    sx={{
                        fontSize: '14px',
                        lineHeight: '21px',
                        textAlign: 'center',
                        letterSpacing: '0.01em',
                        marginBottom: '24px'
                    }}
                >
                    <b>0</b>/250
                </Typography>
                <Box sx={{
                    display: 'flex',
                    marginBottom: '12px'
                }}>
                    <Button
                        variant='outlined'
                        fullWidth
                        sx={{
                            color: '#CD1322',
                            fontWeight: '600',
                            fontSize: '12px',
                            letterSpacing: '0.01em',
                            textTransform: 'capitalize',
                            borderColor: '#CD1322',
                            marginRight: '12px',
                            width: '30%',
                            "&:hover": {
                                borderColor: '#CD1322',
                            }
                        }}
                    >
                        0
                    </Button>
                    <Button 
                        variant='contained'
                        className={classes.button}
                        onClick={onClose}
                        sx={{
                            flexGrow: '1'
                        }}
                    >
                        Stack
                    </Button>
                </Box>
                
                <Button
                    variant='outlined'
                    fullWidth
                    onClick={onClose}
                    sx={{
                        color: '#CD1322',
                        fontWeight: '600',
                        fontSize: '12px',
                        letterSpacing: '0.01em',
                        textTransform: 'capitalize',
                        borderColor: '#CD1322',
                        "&:hover": {
                            borderColor: '#CD1322',
                        }
                    }}
                >
                    Cancel
                </Button>
            </Paper>
        </Dialog>
    );
}

export default StakeModal;