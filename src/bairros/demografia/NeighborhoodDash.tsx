import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import graphImage from '../../assets/graph.png'

import { NeighborhoodData } from './types'
import NeighborhoodChart from './NeighborhoodChart'
import groupBy from '../../utils/groupBy'


export default function NeighborhoodDash () {
  const [neighborhoodData, setNeighborhoodData] = React.useState<NeighborhoodData[]>([])
  const [groupedNeighborhoood, setGroupedNeighborhoood] = React.useState<Record<string, NeighborhoodData[]>>()

  React.useEffect(() => {
    fetch('api/bairros/populacao')
      .then(res => res.json())
      .then(data => setNeighborhoodData(data))
  }, [])

  React.useEffect(() => {
    const groupedData = groupBy(neighborhoodData, 'id_geometria')
    setGroupedNeighborhoood(groupedData["1"])
  }, [neighborhoodData])

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
            { neighborhoodData.size ?
              <>
                <NeighborhoodChart neighborhoodData={groupedNeighborhoood} />
                <Typography color="black">
                    Olii
                </Typography>
              </>
              :
              <>
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
                  Escolha uma geometria no mapa para visualizar os dados
                </Typography>
              </>
            }
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
