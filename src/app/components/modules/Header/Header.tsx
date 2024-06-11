'use client';

import {
    AppBar,
    Box,
    IconButton,
    Link,
    Toolbar,
    Typography,
    useTheme,
} from '@mui/material';
import { Menu, Search } from '@mui/icons-material';
import * as React from 'react';
import { MenuListing } from '@/app/components/elements/MenuListing/MenuListing';

export const Header = () => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box component={'header'}>
            <Box>
                <AppBar
                    position="sticky"
                    sx={{
                        background: theme.palette.background.paper,
                        boxShadow: 0,
                    }}
                >
                    <Toolbar
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box display="flex">
                            <IconButton onClick={handleClick} size={'small'}>
                                <Menu color={'inherit'} />
                            </IconButton>
                            <MenuListing
                                anchorEl={anchorEl}
                                open={open}
                                handleClose={handleClose}
                            />
                            <Typography
                                display={'flex'}
                                alignItems={'center'}
                                variant={'body2'}
                                marginLeft={1}
                            >
                                Menu
                            </Typography>
                        </Box>
                        <Link
                            color={theme.palette.primary.dark}
                            href={'/'}
                            underline={'none'}
                            variant="h6"
                        >
                            Chrono-care
                        </Link>
                        <Box display="flex">
                            <IconButton
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    ':hover': {
                                        background: 'none',
                                    },
                                }}
                                size={'small'}
                            >
                                <Search />
                            </IconButton>
                            <Typography
                                variant={'body2'}
                                display={'flex'}
                                alignItems={'center'}
                                marginLeft={1}
                            >
                                Rechercher
                            </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </Box>
    );
};
