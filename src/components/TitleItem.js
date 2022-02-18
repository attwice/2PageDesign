import React, { Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import { 
    Typography,
    Box,
    LinearProgress
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import StarIcon from '../assets/star.svg';
import CashIcon from '../assets/cash.svg';
import Icon1 from '../assets/icon1.svg';
import Icon2 from '../assets/icon2.svg';
import Icon3 from '../assets/icon3.svg';
import Defense from '../assets/defense.svg';
import Stamina from '../assets/stamina.svg';

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
    }
}));

const CardItem = ({icon, title, subtitle, number, color, value}) => {
    const classes = useStyles();
    return (
        <Box sx={{marginBottom: '12px'}}>
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

const TitleItem = ({index}) => {
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
                        <b>3000</b> / 3000
                    </Typography>
                    <img src={CashIcon} alt="" />
                </Box>
            </Box>
            <Box
                sx={{
                    aspectRatio: '1',
                    cursor: 'pointer',
                    width: '100%',
                    backgroundColor: 'rgba(36, 255, 0, 0.2);'
                }}
                onClick={() => history.push(`/home/tab1/${index + 1}`)}
            ></Box>
            <Box
                sx={{
                    padding: '24px'
                }}
            >
                <CardItem icon={Icon1} title="Attack" subtitle="(19,000 / 20,000 exp.)" number={7} color="#21866D" value={93} />
                <CardItem icon={Defense} title="Defense" subtitle="(1,000 / 40,000 exp.)" number={9} color="#BADB61" value={10} />
                <CardItem icon={Stamina} title="Stamina" subtitle="(9,900 / 10,000 exp.)" number={4} color="#33BC84" value={97} />
                <CardItem icon={Icon2} title="Energy" subtitle="(9/10)" color="#DE7588" value={90} />
                <CardItem icon={Icon3} title="Hunger" subtitle="(1/10)" color="#105157" value={10} />
            </Box>
        </Fragment>
    )
}

export default TitleItem;