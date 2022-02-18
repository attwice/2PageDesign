import React, { Fragment, useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
    Box,
    Container,
    Grid,
    Tabs,
    Tab,
} from '@mui/material';
import { Switch, Route, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab1Item from './Tab1Item';
import Tab2Item from './Tab2Item';
import Wallet from '../components/Wallet';
import Tournament from '../components/Tournament';
import Minting from '../components/Minting';
import GameStatus from '../components/GameStatus';
import Result from '../components/Result';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#91b08c',
        padding: '24px'
    },
    tabContent: {
        marginBottom: '24px!important',
        "@media (min-width: 900px)": {
            marginRight: '30px!important',
            marginBottom: '0!important',
        }
    },
    tabs: {
        background: '#FFFFFF',
        boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.06)',
        borderRadius: '8px',
        color: '#CD1322',
        marginBottom: '20px'
    },
    tab: {
        color: '#192A3E!important',
        borderRadius: '8px!important',
        fontSize: '15px!important',
    },
    activeTab1: {
        color: '#fff!important',
        backgroundColor: '#CD1322!important'
    },
    activeTab2: {
        color: '#fff!important',
        backgroundColor: '#DE7588!important'
    },
    activeTab3: {
        color: '#fff!important',
        backgroundColor: '#FEB12F!important'
    },
    tabPanels: {
        background: '#FFFFFF',
        boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.06)',
        borderRadius: '8px',
    }
}));

const Home = () => {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };
    return (
        <Fragment>
            <Header />
            <Box className={classes.root}>
                <Container>
                    <Grid container>
                        <Grid item xs={12} md={7} className={classes.tabContent}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                className={classes.tabs}
                                variant="fullWidth"
                                >
                                <Tab 
                                    className={`${classes.tab} ${value === 0 && classes.activeTab1}`}
                                    label="Tab1"
                                    onClick={() => history.push('/home/tab1')}
                                />
                                <Tab 
                                    className={`${classes.tab} ${value === 1 && classes.activeTab2}`}
                                    label="Tab2"
                                    onClick={() => history.push('/home/tab2')}
                                />
                                <Tab 
                                    className={`${classes.tab} ${value === 2 && classes.activeTab3}`}
                                    label="Tab3 (2)"
                                    onClick={() => history.push('/home/tab3')}
                                />
                            </Tabs>
                            <Box className={classes.tabPanels}>
                                <Switch>
                                    <Route exact path="/home/tab1/:id" component={Tab1Item} />
                                    <Route exact path="/home/tab1" component={Tab1} />
                                    <Route exact path="/home/tab2/:id" component={Tab2Item} />
                                    <Route exact path="/home/tab2" component={Tab2} />
                                    <Route exact path="/home/tab3" component={Tab3} />
                                </Switch>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md>
                            <Wallet />
                            <Tournament />
                            <Minting />
                            <GameStatus />
                            <Result />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fragment>
    )
}

export default Home;