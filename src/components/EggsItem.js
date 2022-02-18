import React, { Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import { 
    Typography,
    Box,
    LinearProgress,
    Button,
} from '@mui/material';
import StarIcon from '../assets/star.svg';
import EggIcon from '../assets/egg.svg';
import EggImg from '../assets/egg_rose.png';
import ThumbUp from '../assets/thumb-up.svg';
import ThumbDown from '../assets/thumb-down.svg';

const useStyles = makeStyles(theme => ({
    cardHeader: {
        padding: '12px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    box: {
        display: 'flex',
        alignItems: 'center'
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
    button: {
        background: '#FEB12F!important',
        boxShadow: '0px 2px 10px rgba(254, 177, 47, 0.08)!important',
        textTransform: 'capitalize!important'
    },
    thumb: {
        marginRight: '8px'
    }
}));

const CardItem = ({icon, title, subtitle, number, color, value}) => {
    const classes = useStyles();
    return (
        <Box sx={{marginBottom: '24px'}}>
            <Box className={classes.box}>
                <img src={icon} alt="" />
                <Typography
                    sx={{
                        fontSize: '12px',
                        lineHeight: '18px',
                        letterSpacing: '0.01em',
                        color: '#4C5862',
                        margin: '0 12px 0 8px'
                    }}
                >
                    {title}
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
                    {number}
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
                    {subtitle}
                </Typography>
            </Box>
            <LinearProgress 
                className={classes.borderLinearProgress} 
                variant="determinate" 
                value={value} 
                sx={{
                    "& .css-5xe99f-MuiLinearProgress-bar1": {
                        backgroundColor: color
                    }
                }}
            />
        </Box>
    )
}

const TitleItem = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Box className={classes.cardHeader}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <img src={StarIcon} alt="" />
                    <Typography
                        sx={{
                            fontSize: '15px',
                            lineHeight: '22px',
                            letterSpacing: '0.01em',
                            color: '#323C47',
                            marginLeft: '8px'
                        }}
                    >
                        #23C47
                    </Typography>
                </Box>
            </Box>
            <Box
                component="img"
                src={EggImg}
                sx={{
                    aspectRatio: '1',
                    width: '100%',
                }}
            />
            <Box
                sx={{
                    padding: '24px'
                }}
            >
                <Box
                    className={classes.box}
                    sx={{
                        justifyContent: 'space-between',
                        marginBottom: '22px'
                    }}
                >
                    <Box className={classes.box}>
                        <img className={classes.thumb} src={ThumbUp} alt="" />
                        <Typography
                            sx={{
                                fontSize: '14px',
                                letterSpacing: '0.01em',
                                color: '#75ACDE',
                            }}
                        >
                            #00111
                        </Typography>
                    </Box>
                    <Box className={classes.box}>
                        <img className={classes.thumb} src={ThumbDown} alt="" />
                        <Typography
                            sx={{
                                fontSize: '14px',
                                letterSpacing: '0.01em',
                                color: '#DE7588',
                            }}
                        >
                            #23024
                        </Typography>
                    </Box>
                </Box>
                <CardItem icon={EggIcon} title="Egg Quality" color="#FEB12F" value={20} />
                <Button 
                    variant="contained" 
                    fullWidth
                    className={`${classes.button}`}
                >
                    open
                </Button>
            </Box>
        </Fragment>
    )
}

export default TitleItem;