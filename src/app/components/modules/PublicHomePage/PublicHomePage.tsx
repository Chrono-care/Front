'use client';

import {
    Box,
    Button,
    Paper,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { homePageAnonymousTitle } from '@/app/components/modules/PublicHomePage/publicHomePage';
import Grid from '@mui/system/Unstable_Grid';
import { AppRegistration, Login } from '@mui/icons-material';
import Image from 'next/image';

export const PublicHomePage = () => {
    const theme = useTheme();

    const mediaQueryMd = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box marginTop={4}>
            <Typography
                variant={!mediaQueryMd ? 'h3' : 'h5'}
                textAlign={'center'}
            >
                {homePageAnonymousTitle}
            </Typography>
            <Grid container spacing={2} marginTop={8}>
                <Grid sm={12} md={6}>
                    <Paper sx={{ p: 4, height: '100%' }}>
                        <Stack spacing={2}>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                flexDirection={'column'}
                            >
                                <Image
                                    src={'/inscription.jpg'}
                                    width={100}
                                    height={100}
                                    alt={'none'}
                                />
                                <Typography marginY={2} variant={'h5'}>
                                    Inscription
                                </Typography>
                            </Box>
                            <Typography textAlign={'center'} variant={'body1'}>
                                {
                                    "Inscrivez-vous dès aujourd'hui et commencez votre voyage avec Chrono-Care !"
                                }
                            </Typography>
                            <Box display={'flex'} justifyContent={'center'}>
                                <Button startIcon={<AppRegistration />}>
                                    {"S'inscrire"}
                                </Button>
                            </Box>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid sm={12} md={6} width={'100%'}>
                    <Paper sx={{ p: 4, height: '100%' }}>
                        <Stack height={'inherit'} spacing={2}>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                flexDirection={'column'}
                            >
                                <Image
                                    src={'/login.jpg'}
                                    width={100}
                                    height={100}
                                    alt={'none'}
                                />
                                <Typography marginY={2} variant={'h5'}>
                                    Connexion
                                </Typography>
                            </Box>
                            <Typography textAlign={'center'} variant={'body1'}>
                                {
                                    'Si vous avez déjà un compte, connectez-vous ici.'
                                }
                            </Typography>
                            <Box
                                height={'inherit'}
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'flex-end'}
                            >
                                <Button
                                    startIcon={<Login />}
                                    variant={'outlined'}
                                >
                                    Se connecter
                                </Button>
                            </Box>
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};
