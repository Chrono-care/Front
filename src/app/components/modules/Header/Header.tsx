'use client';

import {
    alpha,
    AppBar,
    Box,
    Container,
    IconButton,
    TextField,
    Toolbar,
    Typography,
    useTheme,
} from '@mui/material';
import { Login, Menu, Search } from '@mui/icons-material';

export const Header = () => {
    const theme = useTheme();
    return (
        <Container component={'header'} maxWidth={'lg'}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar variant={'elevation'}>
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
                            marginLeft={2}
                            display={'flex'}
                            justifyContent={'flex-end'}
                        >
                            <IconButton size={'small'}>
                                <Login />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </Container>
    );
};
