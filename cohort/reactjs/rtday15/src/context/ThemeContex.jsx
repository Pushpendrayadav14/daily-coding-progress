import React from 'react'
import { createContext, useState } from 'react';

export const ThemeDataContext = createContext();
const ThemeContex = ({children}) => {
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <ThemeDataContext value={[theme, setTheme]}>
        {children}
      </ThemeDataContext>
    </div>
  )
}

export default ThemeContex
