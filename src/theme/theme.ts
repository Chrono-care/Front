'use client';

import { createTheme } from '@mui/material';
import { palette } from './palette/palette';
import { typography } from './typography/typography';

export const theme = createTheme({
    palette,
    typography,
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'large',
            },
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    padding: '6px 16px',
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                size: 'small',
            },
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 20,
                    },
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                },
            },
        },
    },
});
