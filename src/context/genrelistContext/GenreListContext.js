import { createContext, useReducer } from "react";
import GenreListReducer from "./GenreListReducer";


const INITIAL_STATE = {
    lists:[],
    isFetching: false,
    error: false
}

export const GenreListContext = createContext(INITIAL_STATE)

export const GenreListContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GenreListReducer, INITIAL_STATE)
  
   
    return (
        <GenreListContext.Provider
            value=
            {{ lists: state.lists, isFetching: state.isFetching, error: state.error, dispatch }}>
            {children}
        </GenreListContext.Provider>
    )
}