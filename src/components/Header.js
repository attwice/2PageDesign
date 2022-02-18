import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
    AppBar,
    Box,
    Toolbar,
    Button,
    Typography
} from '@mui/material';
import Web3 from 'web3';
import ArrowDownIcon from '../assets/arrow-down.svg';

const useStyles = makeStyles(theme => ({
    toolBar: {
      backgroundColor: '#fff'
    },
    menuButton: {
        width: 40,
        minHeight: 64,
        color: "#1D1D1D!important",
        borderRadius: '0!important',
        borderBottom: "4px solid transparent!important",
        "@media (min-width: 900px)": {
            width: 130
        }
    },
    activeMenuButton: {
        borderBottomColor: "#CD1322!important"
    },
    walletButton: {
        background: '#BF0C1A!important',
        boxShadow: '0px 2px 10px rgba(205, 19, 34, 0.08)!important',
        fontWeight: '600!important',
        fontSize: '12px!important',
        letterSpacing: '0.01em!important',
        textTransform: 'capitalize!important',
        minHeight: '37px',
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [menu, setMenu] = useState('menu1');
    const [account, setAccount] = useState('0');
    const ethEnabled = async () => {
		if (window.ethereum) {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            window.web3 = new Web3(window.ethereum);
            return true;
		}
		return false;
    }
    const clickConnectWallet = async () => {
		if (typeof window.web3 === 'undefined') {
		    return;
		}
        await ethEnabled()
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setAccount(accounts[0]);
    }

    useEffect( async () => {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setAccount(accounts[0]);
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className={classes.toolBar}>
                    <Box
                        sx={{
                            width: 126,
                            height: 38,
                            backgroundColor: 'rgba(5, 255, 0, 0.2)',
                            marginRight: '15px',
                            "@media (min-width: 900px)": {
                                marginRight: '45px',
                            }
                        }}
                    />
                    <Box sx={{flexGrow: 1}}>
                        <Button
                            className={`${classes.menuButton} ${menu === 'menu1' && classes.activeMenuButton}`}
                            sx={{ marginRight: '16px' }}
                            onClick={() => setMenu('menu1')}
                        >
                            Menu1
                        </Button>
                        <Button
                            className={`${classes.menuButton} ${menu === 'menu2' && classes.activeMenuButton}`}
                            onClick={() => setMenu('menu2')}
                        >
                            Menu2
                        </Button>
                    </Box>
                    {account && <Button sx={{
                        display: 'flex',
                        alignItems: 'center',
                        textTransform: 'inherit',
                        color: '#BF0C1A'
                    }}>
                        <Box sx={{
                            marginRight: '12px'
                        }}>
                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: '14px',
                                lineHeight: '22px',
                                textAlign: 'right',
                                color: '#1D1D1D',
                            }}>
                                Roosters Club
                            </Typography>
                            <Typography sx={{
                                fontWeight: '500',
                                fontSize: '14px',
                                lineHeight: '22px',
                                textAlign: 'right',
                                color: '#CD1322',
                            }}>
                                {account.slice(0, 6)}...{account.slice(account.length - 4)}
                            </Typography>
                        </Box>
                        <img src={ArrowDownIcon} alt="" />
                    </Button>}
                    {!account && <Button 
                        variant="contained"
                        className={classes.walletButton}
                        onClick={clickConnectWallet}
                    >
                        Connect Wallet
                    </Button>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}