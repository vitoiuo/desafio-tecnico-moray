import React from 'react'

interface ContextValue<T> {
  value: T,
  setValue: React.Dispatch<React.SetStateAction<T>>
}

interface ProviderProps {
  children: React.ReactNode
}

export function createSelectedAreaContext<T>(defaultValue: T) {
  const Context = React.createContext<ContextValue<T> | null>(null)

  const Provider: React.FC<ProviderProps> = ({ children }) => {
    const [value, setValue] = React.useState(defaultValue)

    return (
      <Context.Provider value={{ value, setValue }}>
        {children}
      </Context.Provider>
    )
  }

  const useValue = () => {
    const context = React.useContext(Context)
    if (!context) {
      throw new Error('useValue must be used within a Provider')
    }
    return context
  }

  return { Provider, useValue }
}