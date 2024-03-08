import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'

import { SelectedAreaContext } from '../../SelectedAreaContext'
import calcRatesOfChange, { RatesOfChange } from '../../utils/calcRatesOfChange'
import { PopulationData } from './types'
import CustomAreaChart from './CustomAreaChart'


export default function PopulationDash () {
  const { selectedArea } = React.useContext(SelectedAreaContext)
  const [populationData, setPopulationData] = React.useState<PopulationData[]>([])
  const [ratesOfChange, setRatesOfChange] = React.useState<RatesOfChange[]>([])

  React.useEffect(() => {
    if (!selectedArea?.id) return
    fetch(`api/bairros/populacao?id=${selectedArea.id}`)
      .then(res => res.json())
      .then(setPopulationData)
      .catch(e => console.error(e))
  }, [selectedArea])

  React.useEffect(() => {
    setRatesOfChange(calcRatesOfChange(populationData))
  }, [populationData])

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
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              justifyContent: 'center',
              height: 550,
            }}
          >
           <CustomAreaChart
              data={populationData}
              chartTitle="População pelos anos"
              xAxisProp='ano'
              areaProp='populacao'
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={6}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              justifyContent: 'center',
              height: 550,
            }}
          >
            <CustomAreaChart
              data={ratesOfChange}
              xAxisProp='ano'
              areaProp='rateOfChange'
              chartTitle="Taxa de crescimento pelo anos"
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
