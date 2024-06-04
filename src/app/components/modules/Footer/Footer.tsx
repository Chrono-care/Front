'use client';

import { Box, Divider, Link, Stack, useTheme } from '@mui/material';

export const Footer = () => {
    const theme = useTheme();
    return (
        <Box
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
