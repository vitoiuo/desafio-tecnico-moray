import React from 'react'

import { primaryColor } from '../../ui/theme'
import { PopulationData } from './types'
import calcRatesOfChange, { RatesOfChange } from '../../utils/calcRatesOfChange'

import Paper from '@mui/material/Paper'
import CustomAreaChart from './CustomAreaChart'


interface ChangeRateChartProps {
  populationData: PopulationData[]
}
export default function ChangeRateChart ({ populationData }: ChangeRateChartProps) {
  const chartAreas = [
    {
      datakey: 'rateOfChange',
      color: primaryColor
    }
  ]
  const [ratesOfChange, setRatesOfChange] = React.useState<RatesOfChange[]>([])

  React.useEffect(() => {
    setRatesOfChange(calcRatesOfChange(populationData))
  }, [populationData])

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
        data={ratesOfChange}
        chartTitle="Taxa de crescimento pelos anos"
        tooltipText='Taxa de crescimento'
        xAxisProp='ano'
        chartAreas={chartAreas}
      />
    </Paper>
  )
}
