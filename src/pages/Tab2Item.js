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
import ImproveModal from '../components/ImproveModal';
import StakeModal from '../components/StakeModal';
import BurnModal from '../components/BurnModal';
import ArrowRightIcon from '../assets/arrow-right.svg';
import StarIcon from '../assets/star.svg';
import CashIcon from '../assets/cash.svg';
import Fire from '../assets/fire.svg';
import EggIcon from '../assets/egg.svg';
import Egg2Icon from '../assets/egg2.svg';

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
    },
    image: {
        marginRight: '4px'
    }
}));

const CardItem = ({icon, title, subtitle, number, color, value, buttonText, subText, disabled, onClick}) => {
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
                disabled={disabled}
                onClick={onClick}
                sx={{
                    width: 183,
                    backgroundColor: disabled ? '#C4C4C4!important' : color,
                    boxShadow: '0px 2px 10px rgba(222, 117, 136, 0.08)',
                    fontSize: '12px',
                    color: '#fff!important',
                    letterSpacing: '0.01em',
                    textTransform: 'capitalize',
                    "&:hover": {
                        backgroundColor: disabled ? '#C4C4C4!important' : color,
                    }
                }}
            >
                {disabled ? (
                    <>
                        <img style={{marginRight: '8px'}} src={Egg2Icon} alt="" />
                        Harvest
                    </>
                ) : (
                    <>
                        <b>{buttonText}</b>
                        {subText && <Typography 
                            component="span"
                            sx={{
                                fontSize: '10px',
                                marginLeft: '4px'
                            }}>
                            {subText}
                        </Typography>}
                    </>
                )}
                
            </Button>
        </Box>
    )
}

const Tab2Item = () => {
    const classes = useStyles();
    const history = useHistory();
    const [improveOpen, setImproveOpen] = useState(false);
    const [stakeOpen, setStakeOpen] = useState(false);
    const [burnOpen, setBurnOpen] = useState(false);
    return (
        <Fragment>
            <ImproveModal open={improveOpen} onClose={() => setImproveOpen(false)} />
            <StakeModal open={stakeOpen} onClose={() => setStakeOpen(false)} />
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
                        <b>600</b> / 3000
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
                    <CardItem icon={EggIcon} title="Egg Rate :" subtitle="(8 hours 40 mins)" number="x1" color="#DE7588 " value={20} buttonText="Improve" subText="(200 SOY)" disabled={true} />
                    <CardItem icon={EggIcon} title="Egg Rarity :" subtitle="(1,000 / 40,000 SOY)" number="Common" color="#FEB12F" value={10} buttonText="Improve" subText="(200 SOY)" onClick={() => setImproveOpen(true)} />
                    <Divider />
                    <Button
                        fullWidth
                        variant="contained"
                        className={classes.actionButton}
                        onClick={() => setStakeOpen(true)}
                        sx={{
                            marginTop: '24px',
                            marginBottom: '12px'
                        }}
                    >
                        Stack to Boost Production
                        <Typography
                            component="span"
                            sx={{
                                fontSize: '10px',
                                marginLeft: '4px',
                            }}
                        >
                            (600/3000)
                        </Typography>
                    </Button>
                    <Button
                        variant='outlined'
                        disabled
                        fullWidth
                        sx={{
                            textTransform: 'capitalize',
                            color: '#C4C4C4!important',
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
                        sx={{
                            marginTop: '24px'
                        }}
                    >
                        <img className={classes.image} src={Fire} alt="" />
                        Burn
                    </Button>
                </Box>
            </Box>
        </Fragment>
    )
}

export default Tab2Item;