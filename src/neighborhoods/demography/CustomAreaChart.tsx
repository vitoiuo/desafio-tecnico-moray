import graphImage from '../../assets/graph.png'
import Typography from '@mui/material/Typography'
import { 
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts'

interface chartAreas {
  datakey: string,
  color: string
}
export interface CustomAreaChartProps {
  data: unknown[],
  chartTitle: string,
  xAxisProp: string,
  chartAreas: chartAreas[] | undefined,
  tooltipText?: string,
}

export default function CustomAreaChart({ data, chartTitle, tooltipText, xAxisProp, chartAreas }: CustomAreaChartProps) {
  return (
    <>
      { data.length
       ?
       <>
        <Typography>
          { chartTitle }
        </Typography>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={1000}
            height={100}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3"  />
            <XAxis dataKey={xAxisProp} />
            <YAxis />
            <Tooltip formatter={value => [value, tooltipText]} />
            { chartAreas?.map(({ datakey, color }, index) => (
                <Area
                  key={index}
                  type="monotone"
                  dataKey={datakey}
                  stroke={color}
                  fill={color}
                />
            ))}
          </AreaChart>
        </ResponsiveContainer>
       </>
       : (<>
        <img
          src={graphImage}
          alt="Gráfico"
          width="50px"
          height="50px"
        />
        <Typography>
          Nenhum dado disponível
        </Typography>
        <Typography variant="body2">
          Escolha uma área no mapa para visualizar os dados
        </Typography>
       </>)
      }
    </>
  )
}