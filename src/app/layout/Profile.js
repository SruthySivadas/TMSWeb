import React from 'react';
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { DB_Init } from '../DBSlice/SliceDB';
import { Logout } from '../pages/Login/sliceUsers';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import resetFilter from './slice';
export default function Profile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.SliceDB.value);

  const fLogOut = () => {
    dispatch(DB_Init());
    dispatch(Logout());
    // dispatch(resetFilter());
  };
  const vMediaQuery = useMediaQuery('(max-width: 767px)');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <span onClick={handleClick} style={{ display: vMediaQuery ? 'flex' : '' }}>
        <PersonOutlineOutlinedIcon
          style={{
            justifyContent: 'center'
          }}
          sx={{ fontSize: '30px' }}
        />
        {/* <p>User</p> */}
      </span>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        sx={{
          maxWidth: '20rem',
          display: 'flex',
          minHeight: '10rem',
          justifyContent: 'center',
          padding: '1rem',
          marginTop: '0.5rem',
          marginRight: '1rem'
        }}>
        <Typography variant="h3" sx={{ p: 3, textAlign: 'center' }}>
          {user.login.userId}
        </Typography>
        {/* <Typography variant="h4" sx={{ p: 1 }}>
          {user.login.userName}
        </Typography> */}
        <Typography variant="h4" sx={{ p: 1 }}>
          UserName: {user.login.userName}
        </Typography>
        <Typography variant="h4" sx={{ p: 1 }}>
          Truck Id: {user.userInfo.TruckID}
        </Typography>
        <Typography variant="h4" sx={{ p: 1 }}>
          Truck Name: {user.userInfo.TruckName}
        </Typography>
        <Button sx={{ margin: '3rem' }} onClick={fLogOut} variant="contained">
          <LogoutIcon /> Logout{' '}
        </Button>
        <div></div>
      </Popover>
    </>
  );
}
