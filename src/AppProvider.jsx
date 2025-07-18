import React, { useState } from 'react'
import { createContext } from 'react'

export const AppContext = createContext();

function AppProvider({children}) {
    const [showProduct , setshowProduct] = useState(null)
  return (
    <AppContext.Provider value={{showProduct , setshowProduct}} >
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider