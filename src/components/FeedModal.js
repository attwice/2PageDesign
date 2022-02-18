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
import soyImage from '../assets/illu_soy2-20 1.png';
import Icon3 from '../assets/icon3.svg';

const useStyles = makeStyles(theme => ({
    button: {
        boxShadow: '0px 2px 10px rgba(205, 19, 34, 0.08)!important',
        fontWeight: '600!important',
        fontSize: '12px!important',
        letterSpacing: '0.01em!important',
        textTransform: 'capitalize!important',
        minHeight: '37px',
    },
    foodImage: {
        display: 'block',
        margin: 'auto'
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

const FeedModal = ({open, onClose}) => {
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
                    Feed your Rooster
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
                <img className={classes.foodImage} src={soyImage} alt="" />
                <Box sx={{marginBottom: '24px'}}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <img src={Icon3} alt="" />
                        <Typography
                            sx={{
                                fontSize: '12px',
                                lineHeight: '18px',
                                letterSpacing: '0.01em',
                                color: '#4C5862',
                                margin: '0 12px 0 8px',
                                flexGrow: '1'
                            }}
                        >
                            Hunger
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
                            (1/10)
                        </Typography>
                    </Box>
                    <LinearProgress 
                        className={classes.borderLinearProgress} 
                        variant="determinate" 
                        value={10} 
                        sx={{
                            "& .css-5xe99f-MuiLinearProgress-bar1": {
                                backgroundColor: '#105157'
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
                            color: '#105157',
                            fontWeight: '600',
                            fontSize: '12px',
                            letterSpacing: '0.01em',
                            textTransform: 'capitalize',
                            borderColor: '#105157',
                            marginRight: '12px',
                            width: '30%',
                            "&:hover": {
                                borderColor: '#105157',
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
                            flexGrow: '1',
                            backgroundColor: '#105157',
                            "&:hover": {
                                backgroundColor: '#105157',
                            }
                        }}
                    >
                        Feed with Soy
                        <Typography
                            component="span"
                            sx={{
                                marginLeft: '4px',
                                fontSize: '10px'
                            }}
                        >
                            (Max. 900 SOY)
                        </Typography>
                    </Button>
                </Box>
                <Button 
                        variant='contained'
                        className={classes.button}
                        onClick={onClose}
                        fullWidth
                        sx={{
                            backgroundColor: '#CD1322',
                            marginBottom: '12px',
                            "&:hover": {
                                backgroundColor: '#CD1322',
                            }
                        }}
                    >
                        Or Stack to Feed
                    </Button>
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

export default FeedModal;