import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MapIcon from '@mui/icons-material/Map'

import AppBar from './AppBar'

interface HeaderProps {
  open: boolean
  toggleDrawer: () => void
  drawerwidth: number
}

export default function Header({ open, toggleDrawer, drawerwidth}: HeaderProps) {
  return (
    <AppBar
      position="absolute"
      open={open}
      drawerwidth={drawerwidth}
    >
      <Toolbar
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MapIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
