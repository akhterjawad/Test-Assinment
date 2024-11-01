import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { RxHamburgerMenu } from "react-icons/rx";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <RxHamburgerMenu
            className='text-black text-[30px]'
          />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem
            onClick={handleClose}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={handleClose}
          >
            About Us
          </MenuItem>
          <MenuItem
            onClick={handleClose}
          >
            Wholesale
          </MenuItem>
          <MenuItem
            onClick={handleClose}
          >
            Service
          </MenuItem>
          <MenuItem
            onClick={handleClose}
          >
            News
          </MenuItem>
          <MenuItem
            onClick={handleClose}
          >
            How it Works
          </MenuItem>
        </Menu>
      </div>
    </React.Fragment>
  );
}
