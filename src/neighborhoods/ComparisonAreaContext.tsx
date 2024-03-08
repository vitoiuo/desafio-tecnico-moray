import { createSelectedAreaContext } from '../DataContext'
import { NeighborhoodArea } from './types'

export const ComparisonAreaContext = createSelectedAreaContext<NeighborhoodArea | null>(null)