import { createSelectedAreaContext } from '../DataContext'
import { NeighborhoodArea } from './types'

export const SelectedAreaContext = createSelectedAreaContext<NeighborhoodArea | null>(null)