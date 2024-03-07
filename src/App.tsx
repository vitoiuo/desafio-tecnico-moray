import * as React from 'react';

import './styles.css'
import 'leaflet/dist/leaflet.css'

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import AppBar from './ui/AppBar';
import theme from './ui/theme';

import LeafletMap from './bairros/mapa/LeafletMap'
import geojsonData from './geometria-bairros.json'
import NeighborhoodDash from './bairros/demografia/NeighborhoodDash';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" theme={theme}>
          <Toolbar
            color='green'
            sx={{
              pr: '24px'
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="white"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Demografia de bairros por anos
            </Typography>
          </Toolbar>
        </AppBar>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <NeighborhoodDash />
        </Box>
      </Box>
    </ThemeProvider>
      
  )
}
