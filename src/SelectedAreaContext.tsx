import React, { createContext, useState, ReactNode } from 'react'

interface SelectedAreaContextProps {
  selectedArea: string | null
  setSelectedArea: React.Dispatch<React.SetStateAction<string | null>>
}

export const SelectedAreaContext = createContext<SelectedAreaContextProps | undefined>(undefined)

interface SelectedAreaProviderProps {
  children: ReactNode
}

export const SelectedAreaProvider: React.FC<SelectedAreaProviderProps> = ({ children }) => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null)

  return (
    <SelectedAreaContext.Provider value={{ selectedArea, setSelectedArea }}>
      {children}
    </SelectedAreaContext.Provider>
  )
}