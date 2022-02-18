import React from 'react';
import { makeStyles } from '@mui/styles';
import { 
    Button,
    Dialog,
    Paper,
    Typography
} from '@mui/material';
import MeatImage from '../assets/meat.png';
import Fire from '../assets/fire.svg';

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
    image: {
        marginRight: '4px',
    },
    meatImage: {
        display: 'block',
        margin: 'auto'
    }
}));

const BurnModal = ({open, onClose}) => {
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
                    Burn your Rooster
                </Typography>
                <Typography
                    sx={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        textAlign: 'center',
                        letterSpacing: '0.01em',
                        color: '#4C5862',
                        marginBottom: '58px'
                    }}
                >
                    Get your 3.000 CORN$ back.
                </Typography>
                <img className={classes.meatImage} src={MeatImage} alt="" />
                <Button 
                    fullWidth
                    variant='contained'
                    className={classes.button}
                    onClick={onClose}
                    sx={{
                        marginTop: '48px',
                        marginBottom: '12px'
                    }}
                >
                    <img className={classes.image} src={Fire} alt="" />
                    Burn
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

export default BurnModal;