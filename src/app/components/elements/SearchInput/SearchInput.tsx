import { FC } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Box, IconButton } from '@mui/material';
import { Send } from '@mui/icons-material';

type SearchInputProps = {
    anchorEl: HTMLElement | null;
    display: boolean;
    handleClose: () => void;
};

export const SearchInput: FC<SearchInputProps> = ({
    display,
    handleClose,
    anchorEl,
}) => {
    return display ? (
        <Menu anchorEl={anchorEl} open={display} onClose={handleClose}>
            <MenuItem
                sx={{
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                    backgroundColor: 'transparent',
                }}
            >
                <Box display={'flex'} justifyContent={'space-evenly'}>
                    <TextField label={'Search'} />
                    <IconButton sx={{ ml: 1 }}>
                        <Send />
                    </IconButton>
                </Box>
            </MenuItem>
        </Menu>
    ) : null;
};
