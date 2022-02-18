import React, { Fragment } from 'react';
import { 
    Typography,
    Divider,
    Box,
    Paper
} from '@mui/material';
import TitleItem from '../components/TitleItem'

const Tab1 = () => {
    return (
        <Fragment>
            <Typography sx={{
               fontSize: '15px',
               lineHeight: '22px',
               letterSpacing: '0.01em',
               color: '#192A3E',
               fontWeight: '600',
               padding: '12px 24px 8px'
            }}>
               Title
            </Typography>
            <Divider />
            <Box
                sx={{
                    padding: '24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap'
                }}
            >
                {[0, 1].map((index => (
                    <Box
                        key={index}
                        component={Paper}
                        sx={{
                            width: "100%",
                            "&:not(:last-child)": {
                                marginBottom: '24px'
                            },
                            "@media (min-width: 600px)": {
                                width: "calc(50% - 12px)",
                                "&:not(:last-child)": {
                                    marginBottom: '0'
                                },
                            }
                        }}
                    >
                        <TitleItem index={index} />
                    </Box>
                )))}
            </Box>
        </Fragment>
    )
}

export default Tab1;