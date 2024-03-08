import { PopulationData } from '../neighborhoods/demography/types.ts'

export default function calcRatesOfChange(data: PopulationData[]) {
  const ratesOfChange = []

  for (let i = 1; i < data.length; i++) {
    const changeInPopulation = data[i].populacao - data[i - 1].populacao

    const rateOfChange = (changeInPopulation / data[i - 1].populacao) * 100
    ratesOfChange.push({
      ano: data[i].ano,
      rateOfChange: rateOfChange.toFixed(2),
    })
  }

  return ratesOfChange
}

export interface RatesOfChange {
  ano: number,
  rateOfChange: string
}