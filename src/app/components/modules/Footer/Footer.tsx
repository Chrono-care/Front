'use client';

import {
    Box,
    Divider,
    Link,
    Stack,
    useMediaQuery,
    useTheme,
} from '@mui/material';

export const Footer = () => {
    const theme = useTheme();
    const mediaQuerySm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box
            position={!mediaQuerySm ? 'fixed' : 'sticky'}
            sx={{ backgroundColor: theme.palette.background.paper }}
            padding={2}
            display={'flex'}
            justifyContent={'center'}
            component={'footer'}
        >
            <Stack direction="row" spacing={4}>
                <Link href={'/'} color="inherit" underline={'none'}>
                    FAQ
                </Link>
                <Divider orientation={'vertical'} />
                <Link href={'/'} color="inherit" underline={'none'}>
                    CGU
                </Link>
                <Divider orientation={'vertical'} />
                <Link href={'/'} color="inherit" underline={'none'}>
                    HELP
                </Link>
            </Stack>
        </Box>
    );
};
