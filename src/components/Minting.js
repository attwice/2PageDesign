import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { 
    Typography,
    Box,
    Button,
    Divider
} from '@mui/material';
import MinusImage from '../assets/minus.png';
import PlusImage from '../assets/plus.png';

const useStyles = makeStyles(theme => ({
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
    mintingProgressItem: {
        position: 'relative',
        width: '20%',
        padding: '5px 0',
        "&::after": {
            content: "''",
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 1,
            height: '60%',
        }
    },
    mintingProgressText: {
        position: 'relative',
        textAlign: 'center',
        fontSize: '10px!important',
        lineHeight: '15px!important',
        letterSpacing: '0.01em!important',
        color: '#FFFFFF',
    },
    actionButton: {
        maxWidth: 37,
        maxHeight: 37,
        minWidth: '37px!important',
        padding: '0!important'
    },
    mintButton: {
        background: '#BF0C1A!important',
        boxShadow: '0px 2px 10px rgba(205, 19, 34, 0.08)!important',
        fontWeight: '600!important',
        fontSize: '12px!important',
        letterSpacing: '0.01em!important',
        textTransform: 'capitalize!important',
        minHeight: '37px',
        flexGrow: '1'
    },
}));

const Minting = () => {
    const classes = useStyles();
    const [number, setNumber] = useState(1);
    const decrease = () => {
        if (number <= 1) {
            return;
        }
        setNumber(number - 1)
    }
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
               padding: '16px 24px'
            }}>
               Minting
            </Typography>
            <Divider />
            <Box sx={{ padding: '24px' }}>
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        background: '#E1E1E1',
                        borderRadius: '4px',
                        width: '100%',
                        zIndex: '2',
                        marginBottom: '12px',
                        "&::before": {
                            content: "''",
                            position: 'absolute',
                            width: '36%',
                            height: '100%',
                            top: 0,
                            zIndex: '-1',
                            backgroundColor: '#CD1322',
                            borderRadius: '4px'
                        }
                    }}
                >
                    <Box className={classes.mintingProgressItem} sx={{
                        "&::after": {
                            backgroundColor: '#fff'
                        }
                    }}>
                        <Typography className={classes.mintingProgressText}>
                            GEN<br />0
                        </Typography>
                    </Box>
                    <Box className={classes.mintingProgressItem} sx={{
                        "&::after": {
                            backgroundColor: '#fff'
                        }
                    }}>
                        <Typography className={classes.mintingProgressText}>
                            20,000<br />CORN$
                        </Typography>
                    </Box>
                    <Box className={classes.mintingProgressItem} sx={{
                        "&::after": {
                            backgroundColor: '#fff'
                        }
                    }}>
                        <Typography className={classes.mintingProgressText}>
                            50,000<br />CORN$
                        </Typography>
                    </Box>
                    <Box className={classes.mintingProgressItem} sx={{
                        "&::after": {
                            backgroundColor: '#fff'
                        }
                    }}>
                        <Typography className={classes.mintingProgressText}>
                            100,000<br />CORN$
                        </Typography>
                    </Box>
                    <Box className={classes.mintingProgressItem}>
                        <Typography className={classes.mintingProgressText}>
                            200,000<br />CORN$
                        </Typography>
                    </Box>
                </Box>
                <Typography
                    sx={{
                        fontSize: '15px',
                        lineHeight: '22px',
                        textAlign: 'center',
                        letterSpacing: '0.01em',
                        color: '#4C5862',
                        marginBottom: '27px'
                    }}
                >
                    <b>18,366 / 200,000</b> Minted
                </Typography>
                <Box sx={{
                    display: 'flex',
                }}>
                    <Box sx={{
                        display: 'flex',
                        marginRight: '24px'
                    }}>
                        <Button
                            variant="contained"
                            className={classes.actionButton}
                            onClick={decrease}
                        >
                            <img src={MinusImage} alt="" width="100%" />
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                minWidth: 37,
                                maxWidth: 37,
                                maxHeight: 37,
                                margin: '0 8px',
                                color: '#192A3E',
                                border: '1px solid #CD1322',
                                "&:hover": {
                                    border: '1px solid #CD1322',
                                }
                            }}
                        >
                            {number}
                        </Button>
                        <Button
                            variant="contained"
                            className={classes.actionButton}
                            onClick={() => setNumber(number + 1)}
                        >
                            <img src={PlusImage} alt="" width="100%" />
                        </Button>
                    </Box>
                    <Button variant="contained" className={classes.mintButton}>
                        Mint 
                        <Typography
                            component="span"
                            sx={{
                                fontSize: '10px',
                                marginLeft: '4px'
                            }}
                        >
                            (20,000 CORN$)
                        </Typography>
                    </Button>
                </Box>
            </Box>  
        </Box>
    )
}

export default Minting;