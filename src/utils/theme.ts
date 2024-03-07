import { createTheme } from '@mui/material/styles'

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    primary: createColor('#3F9539'),
  },
})

export default theme