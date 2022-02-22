import {
  useContext,
  createContext,
  useState
} from "react";

const IsMobile = createContext()

const useIsMobile = () => {
  return useContext(IsMobile)
}

const IsMobileProvider = ({ children }) => {

  const [isMobile] = useState(window.matchMedia("(max-width: 768px)").matches);

  const values = {
    isMobile,
  }

  return (
    <IsMobile.Provider value={values} >
      {children}
    </IsMobile.Provider >
  )
}

export { useIsMobile, IsMobileProvider as default }