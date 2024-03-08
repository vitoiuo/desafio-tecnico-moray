import * as React from 'react'

import './App.css'
import 'leaflet/dist/leaflet.css'
import CssBaseline from '@mui/material/CssBaseline'

import { SelectedAreaProvider } from './SelectedAreaContext'

import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import theme from './ui/theme'
import Drawer from './ui/Drawer'
import Header from './ui/Header'
import CustomToolbar from './ui/CustomToolbar'
import MainContent from './MainContent'
import LeafletMap from './neighborhoods/map/LeafletMap'

export default function App() {
  const DRAWER_DEFAULT_WIDTH = 600
  const [open, setOpen] = React.useState(true)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <ThemeProvider theme={theme}>
      <SelectedAreaProvider >
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Header
            open={open}
            toggleDrawer={toggleDrawer}
            drawerwidth={DRAWER_DEFAULT_WIDTH}
          />

          <Drawer
            variant="permanent"
            open={open}
            theme={theme}
            drawerwidth={DRAWER_DEFAULT_WIDTH}
          >
            <CustomToolbar toggleDrawer={toggleDrawer} />
            <LeafletMap />
          </Drawer>

          <MainContent />
        </Box>
      </ SelectedAreaProvider>
    </ThemeProvider>
  )
}
