import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import graphImage from '../../assets/graph.png'

import { SelectedAreaContext } from '../../SelectedAreaContext'
import { NeighborhoodData } from './types'
import NeighborhoodChart from './NeighborhoodChart'


export default function NeighborhoodDash () {
  const [neighborhoodData, setNeighborhoodData] = React.useState<NeighborhoodData[]>([])
  const { selectedArea } = React.useContext(SelectedAreaContext)

  React.useEffect(() => {
    const query = selectedArea ? `?id=${selectedArea}` : ''
    fetch(`api/bairros/populacao${query}`)
      .then(res => res.json())
      .then(setNeighborhoodData)
      .catch(e => console.error(e))
  }, [selectedArea])

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={12}>
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
            { Object.keys(neighborhoodData).length
              ? <NeighborhoodChart neighborhoodData={neighborhoodData} />
              : (<>
                <img
                  src={graphImage}
                  alt="Gráfico"
                  width="50px"
                  height="50px"
                />
                <Typography color="textSecondary">
                  Nenhum dado disponível
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Escolha uma área no mapa para visualizar os dados
                </Typography>
              </>)
            }
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
