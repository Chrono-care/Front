import * as React from 'react';
import { FC } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MenuListingType } from '@/app/components/elements/MenuListing/menuListing.type';
import { Box } from '@mui/material';

type MenuListingProps = {
    anchorEl: HTMLElement | null;
    open: boolean;
    handleClose: () => void;
    list: MenuListingType[];
    anonymous: boolean;
};

export const MenuListing: FC<MenuListingProps> = ({
    open,
    handleClose,
    anchorEl,
    list,
    anonymous,
}) => {
    const handleLogout = () => {
        handleClose();
    };
    const handleNavigation = (route: string) => {
        handleClose();
        window.location.replace(route);
    };
    return (
        <Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {anonymous ? (
                    <MenuItem onClick={() => handleNavigation('/login')}>
                        Login
                    </MenuItem>
                ) : (
                    list.map((item) =>
                        item.key === 'logout' ? (
                            <MenuItem key={item.key} onClick={handleLogout}>
                                {item.value}
                            </MenuItem>
                        ) : (
                            <MenuItem
                                key={item.key}
                                onClick={() => handleNavigation(`/${item.key}`)}
                            >
                                {item.value}
                            </MenuItem>
                        ),
                    )
                )}
            </Menu>
        </Box>
    );
};
