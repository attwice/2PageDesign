import React from 'react';
import { makeStyles } from '@mui/styles';
import { 
    Typography,
    Box,
    Button,
    Divider,
} from '@mui/material';
import BoxImg from '../assets/box.png';

const useStyles = makeStyles(theme => ({
    value: {
        fontWeight: '600',
        fontSize: '51px',
        lineHeight: '76px',
        letterSpacing: '0.01em',
        color: '#192A3E',
    },
    unit: {
        fontSize: '15px',
        lineHeight: '22px',
        letterSpacing: '0.01em',
        color: '#192A3E',
    },
    button: {
        background: '#BF0C1A!important',
        boxShadow: '0px 2px 10px rgba(205, 19, 34, 0.08)!important',
        fontWeight: '600!important',
        fontSize: '12px!important',
        letterSpacing: '0.01em!important',
        textTransform: 'capitalize!important',
        minHeight: '37px',
        width: 246,
    },
    boxImage: {
        position: 'absolute',
        right: '24px',
        top: '-54px'
    }
}));

const Wallet = () => {
    const classes = useStyles();
    return (
        <Box sx={{
            position: 'relative',
            backgroundColor: '#fff',
            boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.06)',
            borderRadius: '8px',
            marginTop: '54px',
            marginBottom: '24px'
        }}>
            <img className={classes.boxImage} src={BoxImg} alt="" />
            <Typography sx={{
               fontWeight: '500',
               fontSize: '15px',
               lineHeight: '22px',
               letterSpacing: '0.01em',
               color: '#192A3E',
               padding: '16px 24px'
            }}>
               My Wallet
            </Typography>
            <Divider />
            <Box sx={{ padding: '15px 24px 20px' }}>
                <Typography
                    sx={{
                        textAlign: 'center',
                        marginBottom: '12px',
                    }}
                >
                    <span className={classes.value}>
                        7,492
                    </span>
                    <span className={classes.unit}>
                        CORN$
                    </span>
                </Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '34px'
                }}>
                    <Button variant='contained' className={classes.button}>
                        Buy CORN$
                    </Button>
                </Box>
                <Typography
                    sx={{
                        textAlign: 'center',
                        marginBottom: '12px'
                    }}
                >
                    <span className={classes.value}>
                        23,200
                    </span>
                    <span className={classes.unit}>
                        SOY
                    </span>
                </Typography>
                <Typography
                    sx={{
                        textAlign: 'center'
                    }}
                >
                    <Typography 
                        component="span"
                        sx={{
                            fontSize: '13px',
                            lineHeight: '19px',
                            letterSpacing: '0.01em',
                            color: '#4C5862',
                            opacity: '0.5',
                        }}
                    >
                        You Claimed :
                    </Typography>
                    <Typography 
                        component="span"
                        sx={{
                            fontWeight: '600',
                            fontSize: '13px',
                            lineHeight: '19px',
                            letterSpacing: '0.01em',
                            color: '#4C5862',
                        }}
                    >
                        39,237 SOY
                    </Typography>
                </Typography>
            </Box>
        </Box>
    )
}

export default Wallet;