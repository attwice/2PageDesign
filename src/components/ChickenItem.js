import React, { Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import { 
    Typography,
    Box,
    LinearProgress,
    Button
} from '@mui/material';
import StarIcon from '../assets/star.svg';
import CashIcon from '../assets/cash.svg';
import EggIcon from '../assets/egg.svg';
import Egg2Icon from '../assets/egg2.svg';
import { useHistory } from 'react-router-dom';

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
        textTransform: 'capitalize!important',
        minHeight: '37px'
    },
    harvest: {
        fontWeight: '600!important',
        fontSize: '12px!important',
        lineHeight: '18px!important',
        letterSpacing: '0.01em!important',
        marginBottom: '12px!important',
        "& img": {
            marginRight: '8px'
        }
    },
    bredding: {
        color: '#C4C4C4!important',
        fontSize: '10px!important',
        letterSpacing: '0.01em!important',
        "& b": {
            fontSize: '12px!important',
            marginRight: '4px'
        }
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

const ChickenItem = ({ index }) => {
    const classes = useStyles();
    const history = useHistory();
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
                        #00000
                    </Typography>
                </Box>
                <Box className={classes.box}>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            lineHeight: '21px',
                            letterSpacing: '0.01em',
                            color: '#4C5862',
                            whiteSpace: 'nowrap',
                            marginRight: '8px'
                        }}
                    >
                        <b>600</b> / 3000
                    </Typography>
                    <img src={CashIcon} alt="" />
                </Box>
            </Box>
            <Box
                sx={{
                    aspectRatio: '1',
                    width: '100%',
                    backgroundColor: 'rgba(36, 255, 0, 0.2);'
                }}
                onClick={() => history.push(`/home/tab2/${index + 1}`)}
            >
            </Box>
            <Box
                sx={{
                    padding: '24px'
                }}
            >
                {index === 0 && <CardItem icon={EggIcon} title="Egg" subtitle="(8 hours 40 mins)" color="#DE7588" value={20} />}
                {index === 1 && <CardItem icon={EggIcon} title="Egg" subtitle="Your Egg is ready." color="#DE7588" value={100} />}
                <Button 
                    variant="contained" 
                    disabled={index === 0}
                    fullWidth
                    className={`${classes.button} ${classes.harvest}`}
                    sx={{
                        color: '#fff!important',
                        backgroundColor: index === 0 ? '#C4C4C4!important' : '#DE7588',
                        "&:hover": {
                            backgroundColor: index === 0 ? '#C4C4C4!important' : '#DE7588',
                        }
                    }}
                >
                    <img src={Egg2Icon} alt="" />
                    Harvest
                </Button>
                <Button 
                    variant="outlined" 
                    disabled
                    fullWidth
                    className={`${classes.button} ${classes.bredding}`}
                    sx={{
                        borderColor: '#C4C4C4!important'
                    }}
                >
                    <b>Breeding</b> (Available in 6 days 8 hours)
                </Button>
            </Box>
        </Fragment>
    )
}

export default ChickenItem;