import React, { createContext, useState, ReactNode } from 'react'

interface selectedArea extends GeoJSON.Feature<GeoJSON.MultiPolygon, { id: number, name: string, setor: string, zona: string }> {}

interface SelectedAreaContextProps {
  selectedArea: selectedArea | null
  setSelectedArea: React.Dispatch<React.SetStateAction<selectedArea | null>>
}

export const SelectedAreaContext = createContext<SelectedAreaContextProps | undefined>(undefined)

interface SelectedAreaProviderProps {
  children: ReactNode
}

export const SelectedAreaProvider: React.FC<SelectedAreaProviderProps> = ({ children }) => {
  const [selectedArea, setSelectedArea] = useState<selectedArea | null>(null)

  return (
    <SelectedAreaContext.Provider value={{ selectedArea, setSelectedArea }}>
      {children}
    </SelectedAreaContext.Provider>
  )
}