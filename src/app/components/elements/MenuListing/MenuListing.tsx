import * as React from 'react';
import { FC } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type MenuListingProps = {
    anchorEl: HTMLElement | null;
    open: boolean;
    handleClose: () => void;
};

export const MenuListing: FC<MenuListingProps> = ({
    open,
    handleClose,
    anchorEl,
}) => {
    const handleLogout = () => {
        handleClose();
    };
    const handleNavigation = (route: string) => {
        handleClose();
        window.location.replace(route);
    };
    return (
        <div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => handleNavigation('/profile')}>
                    Profile
                </MenuItem>
                <MenuItem onClick={() => handleNavigation('/account')}>
                    My account
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </div>
    );
};
