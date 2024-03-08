import { primaryColor } from '../../ui/theme';
import { PopulationData } from './types'

import Paper from '@mui/material/Paper';
import CustomAreaChart from './CustomAreaChart'

interface PopulationChartProps {
  populationData: PopulationData[]
}

export default function PopulationChart({ populationData }: PopulationChartProps) {
  const chartAreas = [
    {
      datakey: 'populacao',
      color: primaryColor
    }
  ]

  return (
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
        tooltipText='População'
        xAxisProp='ano'
        chartAreas={chartAreas}
      />
    </Paper>
  )
}
