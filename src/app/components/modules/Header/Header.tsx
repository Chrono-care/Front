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
import { SearchInput } from '@/app/components/elements/SearchInput/SearchInput';

export const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorSearch, setAnchorSearch] = React.useState<null | HTMLElement>(
        null,
    );
    const theme = useTheme();
    const open = Boolean(anchorEl);
    const openSearch = Boolean(anchorSearch);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const handleCloseSearch = () => {
        setAnchorSearch(null);
    };
    const handleHover = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorSearch(event.currentTarget);
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
                                handleClose={handleCloseMenu}
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
                                onMouseEnter={handleHover}
                                onClick={handleHover}
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
                            <SearchInput
                                anchorEl={anchorSearch}
                                display={openSearch}
                                handleClose={handleCloseSearch}
                            />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </Box>
    );
};
