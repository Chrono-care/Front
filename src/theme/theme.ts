"use client";

import { createTheme } from "@mui/material";
import { palette } from "./palette/palette";
import { typography } from "./typography/typography";

export const theme = createTheme({
    palette,
    typography,
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'large'
            },
        }
    }
})