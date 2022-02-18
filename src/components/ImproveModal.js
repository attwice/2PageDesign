import React from 'react';
import { makeStyles } from '@mui/styles';
import { 
    Button,
    Dialog,
    Paper,
    Typography,
    Box,
    LinearProgress
} from '@mui/material';
import eggImage from '../assets/illu_egg.png';
import EggIcon from '../assets/egg.svg';

const useStyles = makeStyles(theme => ({
    button: {
        background: '#FEB12F!important',
        boxShadow: '0px 2px 10px rgba(205, 19, 34, 0.08)!important',
        fontWeight: '600!important',
        fontSize: '12px!important',
        letterSpacing: '0.01em!important',
        textTransform: 'capitalize!important',
        minHeight: '37px',
    },
    foodImage: {
        display: 'block',
        margin: '20px auto 20px'
    },
    borderLinearProgress: {
        height: '6px!important',
        borderRadius: 3,
        margin: '6px 0',
        backgroundColor: '#EBEFF2!important',
        "& .css-5xe99f-MuiLinearProgress-bar1": {
            borderRadius: 3
        }
    },
}));

const ImproveModal = ({open, onClose}) => {
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
                    Improve your Egg Rarity
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
                    Use your SOY to improve your egg rarity<br />
                    and get more chance for better openings.
                </Typography>
                <img className={classes.foodImage} src={eggImage} alt="" />
                <Box sx={{marginBottom: '24px'}}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <img src={EggIcon} alt="" />
                        <Typography
                            sx={{
                                fontSize: '12px',
                                lineHeight: '18px',
                                letterSpacing: '0.01em',
                                color: '#4C5862',
                                margin: '0 12px 0 8px'
                            }}
                        >
                            Egg Rarity : 
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '14px',
                                lineHeight: '21px',
                                display: 'flex',
                                alignItems: 'flex-end',
                                letterSpacing: '0.01em',
                                color: '#4C5862',
                                flexGrow: 1
                            }}
                        >
                            Common
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '10px',
                                lineHeight: '15px',
                                textAlign: 'right',
                                letterSpacing: '0.01em',
                                color: '#4C5862',
                                opacity: '0.5'
                            }}
                        >
                            (1,000 / 40,000 SOY)
                        </Typography>
                    </Box>
                    <LinearProgress 
                        className={classes.borderLinearProgress} 
                        variant="determinate" 
                        value={10} 
                        sx={{
                            "& .css-5xe99f-MuiLinearProgress-bar1": {
                                backgroundColor: '#FEB12F'
                            }
                        }}
                    />
                </Box>
                <Box sx={{
                    display: 'flex',
                    marginBottom: '12px'
                }}>
                    <Button
                        variant='outlined'
                        fullWidth
                        sx={{
                            color: '#FEB12F',
                            fontWeight: '600',
                            fontSize: '12px',
                            letterSpacing: '0.01em',
                            textTransform: 'capitalize',
                            borderColor: '#FEB12F',
                            marginRight: '12px',
                            width: '30%',
                            "&:hover": {
                                borderColor: '#FEB12F',
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
                        Improve
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

export default ImproveModal;