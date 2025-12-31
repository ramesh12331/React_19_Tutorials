import { createContext } from "react";

// Create Context with DEFAULT values
// These defaults are used ONLY if no Provider exists
export const UserContext = createContext({
    user : {name : "Guest",
            role : "visitor",
            theme : "light",},
    setUser : () => {},// placeholder function
});

// Context solves prop drilling
// Provider supplies shared data
// useContext consumes shared data
// Default value is used ONLY if Provider is missing

// React Context allows sharing global data
// without passing props through every level.