import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import graphImage from './graph.png'

import neighborhoodData from './populacao_bairros.json'
import NeighborhoodChart from './NeighborhoodChart'

export default function NeighborhoodDash () {
  const [groupedNeighborhoood, setGroupedNeighborhoood] = React.useState()

  function groupBy <T>(list: Array<T>) {
    const map = new Map()
    list.forEach((item) => {
        const collection = map.get(item.id_geometria)
        if (!collection) {
            map.set(item.id_geometria, [item])
        } else {
            collection.push(item)
        }
    })
    return map
  }
  
  React.useEffect(() => {
    const groupedData = groupBy(neighborhoodData)
    setGroupedNeighborhoood(groupedData.get(1))
  }, [])

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
            { neighborhoodData.length ?
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
