'use client';

import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { Login, Menu } from '@mui/icons-material';

export const Header = () => {
    return (
        <Box component={'header'}>
            <Box>
                <AppBar
                    position="sticky"
                    sx={{
                        background: '#FFFFFF',
                        boxShadow: 0,
                    }}
                >
                    <Toolbar
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <IconButton>
                            <Menu color={'inherit'}>Menu</Menu>
                        </IconButton>
                        <Typography variant="h6" component="div">
                            Chrono-care
                        </Typography>
                        <IconButton size={'small'}>
                            <Login />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </Box>
    );
};
