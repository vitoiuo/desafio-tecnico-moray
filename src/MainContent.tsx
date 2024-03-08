import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Dashboard from './neighborhoods/demography/Dashboard'

export default function MainContent () {
  return (
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
      <Dashboard />
    </Box>
  )
}
