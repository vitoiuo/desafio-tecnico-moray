import React from 'react'
import { 
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

export default function NeighborhoodChart({ neighborhoodData }) {
  return (
    <>
      <h4>Nome</h4>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={1000}
          height={300}
          data={neighborhoodData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3"  />
          <XAxis dataKey="ano" />
          <YAxis />
          <Tooltip />
          <Legend
            formatter={(value) => (value.charAt(0).toUpperCase() + value.slice(1))}
          />
          <Area
            type="monotone"
            dataKey="populacao"
            stroke="#3F9539"
            fill="#3F9539"
            />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}