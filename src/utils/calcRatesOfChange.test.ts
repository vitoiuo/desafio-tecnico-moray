import calcRatesOfChange from './calcRatesOfChange'

describe('calcRatesOfChange', () => {
  const data = [
    { id_geometria: 1, ano: 2010, populacao: 100 },
    { id_geometria: 2, ano: 2011, populacao: 120 },
    { id_geometria: 3, ano: 2012, populacao: 150 },
    { id_geometria: 4, ano: 2013, populacao: 180 },
  ]
  const rateChanges =  [
    { ano: 2011, rateOfChange: '20.00' },
    { ano: 2012, rateOfChange: '25.00' },
    { ano: 2013, rateOfChange: '20.00' },
  ]
  const insufficientData = [{ id_geometria: 1, ano: 2010, populacao: 100 }]
  const emptyReturn: never[] = []

  test.each`
    data                | expectedRatesOfChange
    ${data}             | ${rateChanges}
    ${insufficientData} | ${emptyReturn}
  `('should calculate rates of change correctly', ({ data, expectedRatesOfChange }) => {
    const result = calcRatesOfChange(data)

    expect(result).toEqual(expectedRatesOfChange)
  })
})