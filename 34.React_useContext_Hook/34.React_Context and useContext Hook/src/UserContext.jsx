import { createContext } from "react";

// Create a Context object
// The object passed here is the DEFAULT value
// This is used ONLY if no Provider is found
export const UserContext = createContext({
    name : "Guest",
    role : "visitor",
    theme : "light",
});

// Context solves prop drilling
// Provider supplies shared data
// useContext consumes shared data
// Default value is used ONLY if Provider is missing

// React Context allows sharing global data
// without passing props through every level.