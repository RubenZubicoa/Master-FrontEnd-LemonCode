import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import * as classes from './app.layout.styles';
import { Link } from 'react-router-dom';
import { switchRoutes } from '#core/router/routes.js';
import Button from '@mui/material/Button';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="Menu">
            <AccountCircle />
          </IconButton>
          <Link to={switchRoutes.characterCollection} className={classes.button}>Characters</Link>
          <Link to={switchRoutes.location} className={classes.button}>Locations</Link>
          <Link to={switchRoutes.episodes} className={classes.button}>Episodes</Link>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
