import React, { createContext, useReducer, useContext } from 'react';


const ContextGlobal = createContext();

export const GlobalProvider = ({ children }) => {

  const initialState = {
    odontologosHome: [],
    odontologosDetail: [],
    favCards: [], 
    odontologoData: [],
    error: false,
    theme: "light"
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ODONTOLOGOS_HOME": 
        return {...state, odontologosHome: action.payload, error: false}
      case "ODONTOLOGOS_DETAIL":
        return { ...state, odontologosDetail: action.payload, error: false };
      case "ERROR":
        return { ...state, error: true };
      case "ADD_FAV":
        return { ...state, favCards: [...state.favCards, action.payload] };
      case "FAV_DATA": 
        return { ...state, odontologoData: action.payload };
      case "CHANGE_THEME": 
        return {...state, theme:state.theme === "light" ? "dark" : "light"}
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalContext = () => useContext(ContextGlobal)






