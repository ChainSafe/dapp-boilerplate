import * as React from "react"
import { useState } from "react"

type DataContextProps = {
  children: React.ReactNode | React.ReactNode[]
}

interface IDataContext {
  swifty: string
  setSwifty: (newSwifty: string) => void
}

const DataContext = React.createContext<IDataContext | undefined>(undefined)

const DataProvider = ({ children }: DataContextProps) => {
  const [swifty, setSwifty] = useState("pickle-rick")

  return (
    <DataContext.Provider
      value={{
        swifty,
        setSwifty
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

const useData = () => {
  const context = React.useContext(DataContext)
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider")
  }
  return context
}

export { DataProvider, useData }
