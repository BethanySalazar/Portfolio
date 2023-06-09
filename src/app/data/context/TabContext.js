import React, { useContext, createContext, useReducer } from 'react'

export const TabContext = createContext()

export const TabProvider = ({ children, initialState, reducer }) => {
  const [tabState, tabDispatch] = useReducer(reducer, initialState)
  //provider
  return (
    <TabContext.Provider value={[tabState, tabDispatch]}>
      {children}
    </TabContext.Provider>
  )
}

export const useTab = () => {
  return useContext(TabContext)
}
