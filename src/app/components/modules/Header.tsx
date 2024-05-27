'use client';

import {
    alpha,
    AppBar,
    Box,
    Button,
    IconButton,
    TextField,
    Toolbar,
    Typography,
    useTheme,
} from '@mui/material';
import { Menu, Search } from '@mui/icons-material';

export const Header = () => {
    const theme = useTheme();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Menu />
                    </IconButton>
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-evenly'}
                        flexGrow={1}
                    >
                        <Typography variant="h6" component="div">
                            Chrono-care
                        </Typography>
                        <TextField
                            placeholder={'Recherche'}
                            InputProps={{
                                endAdornment: (
                                    <IconButton size={'small'}>
                                        <Search />
                                    </IconButton>
                                ),
                            }}
                            size={'small'}
                            sx={{
                                '&:hover': {
                                    backgroundColor: alpha(
                                        theme.palette.primary.light,
                                        0.75,
                                    ),
                                },
                                borderColor: theme.palette.primary.dark,
                                background: theme.palette.primary.light,
                                borderRadius: 2,
                            }}
                        />
                    </Box>
                    <Box
                        flexGrow={4}
                        display={'flex'}
                        justifyContent={'flex-end'}
                    >
                        <Button color="secondary">Login</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
