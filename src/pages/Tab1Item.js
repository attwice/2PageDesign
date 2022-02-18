import React, { Fragment, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { 
    Typography,
    Divider,
    Box,
    IconButton,
    LinearProgress,
    Button
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import TrainingModal from '../components/TrainingModal';
import ImproveModal from '../components/ImproveModal';
import FeedModal from '../components/FeedModal';
import BurnModal from '../components/BurnModal';
import ArrowRightIcon from '../assets/arrow-right.svg';
import StarIcon from '../assets/star.svg';
import CashIcon from '../assets/cash.svg';
import Icon1 from '../assets/icon1.svg';
import Icon2 from '../assets/icon2.svg';
import Icon3 from '../assets/icon3.svg';
import Defense from '../assets/defense.svg';
import Stamina from '../assets/stamina.svg';
import Fire from '../assets/fire.svg';
import EggIcon from '../assets/egg.svg';

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
    actionButton: {
        background: '#BF0C1A!important',
        boxShadow: '0px 2px 10px rgba(205, 19, 34, 0.08)!important',
        fontWeight: '600!important',
        fontSize: '12px!important',
        letterSpacing: '0.01em!important',
        textTransform: 'capitalize!important',
        minHeight: '37px',
        marginTop: '24px!important'
    },
    image: {
        marginRight: '4px'
    }
}));

const CardItem = ({icon, title, subtitle, number, color, value, buttonText, subText, onClick}) => {
    const classes = useStyles();
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '24px'
        }}>
            <Box sx={{
                flexGrow: '1',
                marginRight: '24px'
            }}>
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
            <Button
                variant='contained'
                onClick={onClick}
                sx={{
                    width: 183,
                    backgroundColor: color,
                    boxShadow: '0px 2px 10px rgba(222, 117, 136, 0.08)',
                    fontSize: '12px',
                    letterSpacing: '0.01em',
                    textTransform: 'capitalize',
                    "&:hover": {
                        backgroundColor: color,
                    }
                }}
            >
                <b>{buttonText}</b>
                {subText && <Typography 
                    component="span"
                    sx={{
                        fontSize: '10px',
                        marginLeft: '4px'
                    }}>
                    {subText}
                </Typography>}
            </Button>
        </Box>
    )
}

const Tab1Item = () => {
    const classes = useStyles();
    const history = useHistory();
    const [trainingOpen, setTrainingOpen] = useState(false);
    const [improveOpen, setImproveOpen] = useState(false);
    const [feedOpen, setFeedOpen] = useState(false);
    const [burnOpen, setBurnOpen] = useState(false);
    return (
        <Fragment>
            <TrainingModal open={trainingOpen} onClose={() => setTrainingOpen(false)} />
            <ImproveModal open={improveOpen} onClose={() => setImproveOpen(false)} />
            <FeedModal open={feedOpen} onClose={() => setFeedOpen(false)} />
            <BurnModal open={burnOpen} onClose={() => setBurnOpen(false)} />
            <Box
                sx={{
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <IconButton
                    onClick={() => history.goBack()}
                >
                    <img src={ArrowRightIcon} alt="" />
                </IconButton>
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
                <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
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
            <Divider />
            <Box sx={{
                padding: "24px 62px"
            }}>
                <Box sx={{
                    aspectRatio: '1',
                    cursor: 'pointer',
                    width: '100%',
                    backgroundColor: 'rgba(36, 255, 0, 0.2);'
                }} />
                <Box sx={{
                    marginTop: '24px'
                }}>
                    <CardItem icon={Icon1} title="Attack" subtitle="(19,000 / 20,000 exp.)" number={7} color="#21866D" value={93} buttonText="Train" onClick={() => setTrainingOpen(true)} />
                    <CardItem icon={Defense} title="Defense" subtitle="(1,000 / 40,000 exp.)" number={9} color="#BADB61" value={10} buttonText="Train" onClick={() => setTrainingOpen(true)} />
                    <CardItem icon={Stamina} title="Stamina" subtitle="(9,900 / 10,000 exp.)" number={4} color="#33BC84" value={97} buttonText="Train" onClick={() => setTrainingOpen(true)} />
                    <CardItem icon={Icon2} title="Energy" subtitle="(9/10)" color="#DE7588" value={90} buttonText="Sleep" subText="(200 SOY)" />
                    <CardItem icon={Icon3} title="Hunger" subtitle="(1/10)" color="#105157" value={10} buttonText="Feed" onClick={() => setFeedOpen(true)} />
                    <CardItem icon={EggIcon} title="Egg Rarity :" subtitle="(1,000 / 40,000 SOY)" number="Common" color="#FEB12F" value={10} buttonText="Improve" subText="(200 SOY)" onClick={() => setImproveOpen(true)} />
                    <Button
                        variant='contained'
                        disabled
                        fullWidth
                        sx={{
                            textTransform: 'capitalize',
                            color: '#fff!important',
                            backgroundColor: '#C4C4C4!important',
                            marginBottom: '24px'
                        }}
                    >
                        <b>Stack to Boost</b>
                        <Typography
                            component="span"
                            sx={{
                                fontSize: '10px',
                                marginLeft: '4px',
                            }}
                        >
                            (3,000/3,000 CORN$)
                        </Typography>
                    </Button>
                    <Divider />
                    <Button
                        fullWidth
                        variant="contained"
                        className={classes.actionButton}
                        onClick={() => setBurnOpen(true)}
                    >
                        <img className={classes.image} src={Fire} alt="" />
                        Burn
                    </Button>
                </Box>
            </Box>
        </Fragment>
    )
}

export default Tab1Item;