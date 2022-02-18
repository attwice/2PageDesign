import React from 'react';
import { makeStyles } from '@mui/styles';
import { 
    Typography,
    Box,
    Divider,
    IconButton,
    Link
} from '@mui/material';
import BoxArrowUpRight from '../assets/box-arrow-up-right.svg';

const useStyles = makeStyles(theme => ({
    box: {
        display: 'flex',
        alignItems: 'center'
    }
}));

const Result = () => {
    const classes = useStyles();
    const tournamentResults = [
        {
            address: '0X BE88 ... 2808',
            value: 54176118
        },
        {
            address: '0X 9772 ... 3EE1',
            value: 53444163
        },
        {
            address: '0X 17BA ... 0C02',
            value: 51721355
        },
        {
            address: '0X BE88 ... 2808',
            value: 54176118
        },
        {
            address: '0X BE88 ... 2808',
            value: 54176118
        },
        {
            address: '0X BE88 ... 2808',
            value: 54176118
        },
        {
            address: '0X BE88 ... 2808',
            value: 54176118
        },
        {
            address: '0X BE88 ... 2808',
            value: 54176118
        }
    ]
    return (
        <Box sx={{
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
               Last Tournament Results
            </Typography>
            <Divider />
            <Box sx={{ 
                padding: '24px 24px 20px',
            }}>
                {tournamentResults.map((result, index) => (
                    <Box
                        key={index}
                        className={classes.box}
                        sx={{
                            justifyContent: 'space-between',
                            marginBottom: '16px'
                        }}
                    >
                        <Typography
                            component="div"
                            className={classes.box}
                        >
                            <Typography sx={{
                                width: '32px',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                letterSpacing: '0.01em',
                                color: '#4C5862',
                            }}>
                                {index + 1}.
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '12px',
                                    letterSpacing: '0.01em',
                                    color: '#4C5862',
                                    marginRight: '4px'
                                }}
                            >
                                {result.address}
                            </Typography>
                            <IconButton component={Link}>
                                <img src={BoxArrowUpRight} alt="" />
                            </IconButton>
                        </Typography>
                        <Typography sx={{
                            fontSize: '15px',
                            lineHeight: '22px',
                            letterSpacing: '0.01em',
                            color: '#CD1322',
                        }}>
                            <b>{new Intl.NumberFormat('en-US').format(result.value)} </b>CORN$
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Result;