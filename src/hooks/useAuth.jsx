import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {
  const infos = useContext(AuthContext);
  return infos;
};

export default useAuth;
