import { createContext, useReducer } from 'react'
import menuReducer, { initialState } from 'context/reducer/menuReducer'

export const context = createContext()

export default function ContextProvider({ children }) {

   const [state, dispatch] = useReducer(menuReducer, initialState)

   return (
      <context.Provider
         value={state}
      >
         {children}
      </context.Provider>
   )
}
