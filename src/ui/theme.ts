import { createTheme } from '@mui/material/styles'

export const primaryColor = '#3F9539'

const { palette } = createTheme()
const { augmentColor } = palette
const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } })
const theme = createTheme({
  palette: {
    primary: createColor(primaryColor),
  },
})

export default theme