import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: 'red' }}> 
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <img src="/TheHartfordIcon.png" alt="logo" style={{ marginRight: '20px', height: '50px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Hartford
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
