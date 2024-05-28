'use client';

import {
    BottomNavigation,
    BottomNavigationAction,
    Box,
    Divider,
} from '@mui/material';

export const Footer = () => {
    return (
        <Box component={'footer'}>
            <BottomNavigation showLabels>
                <BottomNavigationAction label="Recents" />
                <Divider orientation="vertical" variant="middle" flexItem />
                <BottomNavigationAction label="Favorites" />
                <Divider orientation="vertical" variant="middle" flexItem />
                <BottomNavigationAction label="Nearby" />
            </BottomNavigation>
        </Box>
    );
};
