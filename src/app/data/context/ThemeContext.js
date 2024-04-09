import React, { useContext, createContext, useReducer } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children, initialState, reducer }) => {
  const [themeState, themeDispatch] = useReducer(reducer, initialState)
  //provider
  return (
    <ThemeContext.Provider value={[themeState, themeDispatch]}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
