import React from 'react';
import { makeStyles } from '@mui/styles';
import { 
    Typography,
    Box,
    Divider
} from '@mui/material';

const useStyles = makeStyles(theme => ({
    stausName: {
        fontSize: '12px',
        lineHeight: '18px',
        letterSpacing: '0.01em',
        color: '#4C5862',
        marginRight: '8px'
    },
    statusValue: {
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '21px',
        letterSpacing: '0.01em',
        color: '#4C5862',
    },
    claimText: {
        fontSize: '15px!important',
        lineHeight: '28px!important',
        textAlign: 'center',
        letterSpacing: '0.01em!important',
    }
}));

const GameStatus = () => {
    const classes = useStyles();
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
               Game Status
            </Typography>
            <Divider />
            <Box sx={{ 
                display: 'flex',
                justifyContent: 'space-between',
                padding: '24px 24px 20px',
            }}>
                <Box>
                    <Typography sx={{marginBottom: '4px'}}>
                        <span className={classes.stausName}>
                            Roosters Minted
                        </span>
                        <span className={classes.statusValue}>
                            5,282
                        </span>
                    </Typography>
                    <Typography>
                        <span className={classes.stausName}>
                            Chickens Minted
                        </span>
                        <span className={classes.statusValue}>
                            13,084
                        </span>
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        className={classes.claimText}
                        sx={{
                            color: '#4C5862',
                        }}
                    >
                        Total SOY Claimed
                    </Typography>
                    <Typography
                        className={classes.claimText}
                        sx={{
                            fontWeight: '600',
                            color: '#CD1322',
                        }}
                    >
                        1,772,241,498.54
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default GameStatus;