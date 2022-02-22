import { Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

//Use for protected routes
export default function ReqAuth ({children, redirectTo}) {
  const {currentUser} = useUserContext()

  return(
    currentUser ? children : <Navigate to={redirectTo} />
  )
}