import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { SelectedAreaContext } from '../SelectedAreaContext'
import { PopulationData } from './types'

import PopulationChart from './PopulationChart'
import ChangeRateChart from './ChangeRateChart'

export default function Dashboard () {
  const { value: selectedArea } = SelectedAreaContext.useValue()
  const [populationData, setPopulationData] = React.useState<PopulationData[]>([])

  React.useEffect(() => {
    if (!selectedArea?.id) return
    fetch(`api/bairros/populacao?id=${selectedArea.id}`)
      .then(res => res.json())
      .then(setPopulationData)
      .catch(e => console.error(e))
  }, [selectedArea])

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        mb: 4,
        width: '100vw',
        height: '100vh'
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
      >
        { selectedArea?.name || 'Dash sem título' }
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={6}>
          <PopulationChart populationData={populationData} />
        </Grid>

        <Grid item xs={12} md={4} lg={6}>
          <ChangeRateChart populationData={populationData} />
        </Grid>
      </Grid>
    </Container>
  )
}
