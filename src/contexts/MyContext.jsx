import {
  useContext,
  createContext,
  useState,
  useEffect } from "react";

const MyContext = createContext()

const useMyContext = () => {
  return useContext(MyContext)
}

const MyContextProvider = ({ children }) => {

const [myState, setMyState] = useState();

  useEffect(() => {
    setMyState("Hello, I am a state from MyContext!")
    return () => {

    }
  }, []);


  const values = {
    myState,
  }

  return (
    <MyContext.Provider value={values} >
      {children}
    </MyContext.Provider >
  )
}

export { useMyContext, MyContextProvider as default }