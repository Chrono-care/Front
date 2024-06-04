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

export const Header = () => {
    const theme = useTheme();
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
                            <IconButton size={'small'}>
                                <Menu color={'inherit'} />
                            </IconButton>
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
